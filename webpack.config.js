const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

const dist = "docs";
const pathToDist = __dirname + "/" + dist;

module.exports = {
  entry: {
    main: [
      "./src/js/index.tsx",
    ],
    /*polyfill: [
      "es6-object-assign",
      "whatwg-fetch",
      "promise-polyfill",
    ]*/
  },
  output: {
    filename: "js/[name].[hash].js",
    path: pathToDist,
    publicPath: ""
  },
  module: {
    rules: [
      //TYPESCRIPT
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/
      },
      //FONTS
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
      },
      //IMAGES
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash].[ext]'
                }
            },
            {
                loader: 'img-loader',
                options: {
                    plugins: [
                        require('imagemin-gifsicle')({
                            interlaced: true,
                        }),
                        require('imagemin-mozjpeg')({
                            progressive: true,
                            arithmetic: false,
                        }),
                        require('imagemin-optipng')({
                            optimizationLevel: 5,
                        }),
                        require('imagemin-svgo')({
                            plugins: [
                                {convertPathData: false},
                            ]
                        }),
                    ]
                }
            }
        ]
      },
      //CSS
      {
        test: /\.(css)$/,
        use: [          
          {
            loader: 'file-loader',
            options: {
              name: 'app.css',
              outputPath: 'css',
              publicPath: './'
            }
          },
          {
              loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true           
            }
          },            
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin([dist]),
    new ImageminWebpWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Phaser game",
      filename: "index.html",
      template: "./src/index.html",
      favicon: "./src/img/favicons/favicon.png",
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      xhtml: true,
    }),
    new CopyWebpackPlugin([
      {
        from:'src/img',
        to:'img'
      },
      {
        from:'src/manifest.json',
        to:''
      },
      {
        from:'src/robots.txt',
        to:''
      },
      {
        from:'src/audio',
        to:'audio'
      },
      {
        from:'src/CNAME',
        to:''
      },
      {
        from:'src/policy/policy.pdf',
        to:'policy'
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      precacheManifestFilename: "precache-manifest.[manifestHash].js",
      exclude: [
          /\.(png|jpe?g|gif|svg|webp)$/i,
          /\.map$/,
          /^manifest.*\\.js(?:on)?$/,
          /CNAME/,
          /\.(m4r|ogg)$/i,
      ],
      offlineGoogleAnalytics: true,
      runtimeCaching: [
          {
              urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
              handler: "NetworkFirst",
              /*options: {
                  cacheName: "images",
                  expiration: {
                      maxEntries: 20
                  }
              }*/
          }
      ]
    }),
    new WebpackNotifierPlugin({
      title: 'Webpack', 
      excludeWarnings: true, 
      alwaysNotify: true
    }),
  ],
  devServer: {
    publicPath: "/",
    compress: true,
    hot: true,
    public: process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
    contentBase: pathToDist,
    host: process.env.DEVSERVER_HOST || "localhost",
    port: process.env.DEVSERVER_PORT || 8080,
    https: !!parseInt(process.env.DEVSERVER_HTTPS || true),
    disableHostCheck: true,
    overlay: true,
    watchContentBase: true,
    watchOptions: {
      poll: !!parseInt(process.env.DEVSERVER_POLL || false),
      ignored: /node_modules/,
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      //maxSize: 102400,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          cache: true,
          parallel: true,
          sourceMap: true,
          extractComments: false,
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {},
            mangle: true,
            module: false,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
          },
        }
      ),
      new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
              map: {
                  inline: false,
                  annotation: true,
              },
              safe: true,
              discardComments: true
          },
      })
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};