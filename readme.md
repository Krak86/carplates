[![Build Status](https://dev.azure.com/krak86/CarsuaDevOps/_apis/build/status/Krak86.carplates?branchName=master)](https://dev.azure.com/krak86/CarsuaDevOps/_build/latest?definitionId=1&branchName=master)
[![Beerpay](https://beerpay.io/Krak86/carplates/badge.svg?style=beer)](https://beerpay.io/Krak86/carplates)

## UA car plates recognizer.

It is offline-first, mobile-first, static, single page web application, that is hosted on github pages with custom domain: http://carsua.app

This is a project that allows user to search a ukrainian car plates using open data. It's stack of the next tools, libraries, services etc.:

* [Typescript](https://www.typescriptlang.org/)
* [Webpack](https://webpack.js.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Material UI](https://material-ui.com/)
* [Workbox](https://developers.google.com/web/tools/workbox)
* [PWA](https://developers.google.com/web/progressive-web-apps)
* [Jest](https://jestjs.io/)
* [NodeJs](https://nodejs.org/)
* [Azure Table Storage](https://azure.microsoft.com/en-us/services/storage/tables/)
* [Azure Functions](https://azure.microsoft.com/en-us/services/functions/)
* [Azre DevOps](https://azure.microsoft.com/en-us/services/devops/)
* [Google/Facebook OAth2](https://oauth.net/2/)
* [HTML5 Video/Audio](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
* [Powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-6)

The extra services are using here:
* [Disqus (Chat as a service)](https://disqus.com/)
* [Automatic Number Plate Recognition API (Image recognizer as a Service)](https://platerecognizer.com/)
* [RIA Auto API (Car ads as a Service)](https://developers.ria.com/)
* [National Highway Traffic Safety Administration API (Vin recognizer as a Service)](https://vpic.nhtsa.dot.gov/api/vehicles/decodevin)
* [Github Pages (hosting as a Service)](https://pages.github.com/)
* [Let's Encrypt (certificate as a Service)](https://letsencrypt.org/)
* [Azre DevOps (devOps as a Service)](https://azure.microsoft.com/en-us/services/devops/)

The project is open for everyone, so don't hesitate to create [issues](https://github.com/Krak86/carplates/issues) and [pull request](https://github.com/Krak86/carplates/pulls).
It is pretend to use the rules of [12 factors](https://12factor.net)

Roadmap (see [projects](https://github.com/Krak86/carplates/projects)):
* Integration/e2e tests
* IE11 support
* Add notification about new app version, for instance [react-toastify](https://github.com/fkhadra/react-toastify)
* Add facebook hashtag posts, for instance https://www.facebook.com/hashtag/ве7116аа
* Add crash test rating, for instance [one.nhtsa.gov](https://one.nhtsa.gov/webapi/api/SafetyRatings/modelyear/2016/make/VOLKSWAGEN/model/JETTA?format=json)
* Add android and IOS apps using [React Native](https://facebook.github.io/react-native/)
* Create BOT for facebook, telegram, viber, wasap
* Create own ML service for image recognizer
* Add [Auth0](https://auth0.com/) (Auth as a service)

## Setup
You'll need to install a few things before you have a working copy of the project.

### 1. Clone this repo:
Navigate into your workspace directory.

Run:
```sh
$ git clone https://github.com/Krak86/carplates.git
```
### 2. Install node.js:
https://nodejs.org

### 3. Install dependencies:
Navigate to the cloned repo's directory.

Run:
```sh
$ npm i
```

Afterwards you need to execute extra steps:

* get you own keys (check .env_example file) (use .env to hide it from a project)
* create your own azure table storage tables or use local emulator (you need 2 tables: for cars and for favorites)
* create 2 azure functions, add code there (check azure folder)
* manually download CSV files, parse it and upload to azure table using azure storage explorer or API (check powershell folder, azure folder and columns.csv as a template for columns)
* adjust policy html file (check policy folder), manually generate PDF (use Chrome for convert html to pdf)
* adjust CNAME file in case if you want to use custom domain name

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:3000/](http://localhost:3000/)
```sh
$ npm run dev
```
## Deployment
Build the current application
```sh
$ npm run prod
```
## TEST
Build the current application
```sh
$ npm run test
```
## Check online
https://krak86.github.io/carplates
http://carsua.app

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/Krak86/carplates/badge.svg?style=beer-square)](https://beerpay.io/Krak86/carplates)  [![Beerpay](https://beerpay.io/Krak86/carplates/make-wish.svg?style=flat-square)](https://beerpay.io/Krak86/carplates?focus=wish)
