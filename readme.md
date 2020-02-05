[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8eb0158930f441f5b49b03c3948a22f4)](https://app.codacy.com/manual/Krak86/carplates?utm_source=github.com&utm_medium=referral&utm_content=Krak86/carplates&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://dev.azure.com/krak86/CarsuaDevOps/_apis/build/status/Krak86.carplates?branchName=master)](https://dev.azure.com/krak86/CarsuaDevOps/_build/latest?definitionId=1&branchName=master)
[![Beerpay](https://beerpay.io/Krak86/carplates/badge.svg?style=beer)](https://beerpay.io/Krak86/carplates)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Krak86_carplates&metric=bugs)](https://sonarcloud.io/dashboard?id=Krak86_carplates) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Krak86_carplates&metric=code_smells)](https://sonarcloud.io/dashboard?id=Krak86_carplates) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Krak86_carplates&metric=ncloc)](https://sonarcloud.io/dashboard?id=Krak86_carplates) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Krak86_carplates&metric=alert_status)](https://sonarcloud.io/dashboard?id=Krak86_carplates) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Krak86_carplates&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=Krak86_carplates) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Krak86_carplates&metric=security_rating)](https://sonarcloud.io/dashboard?id=Krak86_carplates) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Krak86_carplates&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=Krak86_carplates)
## UA car plates recognizer

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
* [PlatesMania (Image photo by plate number as a Service)](https://platesmania.com/api)
* [RIA Auto API (Car ads as a Service)](https://developers.ria.com/)
* [National Highway Traffic Safety Administration API (Vin recognizer as a Service)](https://vpic.nhtsa.dot.gov/api/vehicles/decodevin)
* [Github Pages (Hosting as a Service)](https://pages.github.com/)
* [Let's Encrypt (Certificate as a Service)](https://letsencrypt.org/)
* [Azre DevOps (DevOps as a Service)](https://azure.microsoft.com/en-us/services/devops/)
* [Application Insights (Logs as a Service)](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)

The extra Linters Analysis are used:
* [TSLint](https://palantir.github.io/tslint/)
* [SonarTS](https://github.com/SonarSource/SonarTS)
* [TSLint React](https://github.com/palantir/tslint-react)
* [TSLint React Hooks](https://github.com/Gelio/tslint-react-hooks)
* [TS Strict Type-Checking](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)

Roadmap (see [projects](https://github.com/Krak86/carplates/projects)):
* Integration/e2e tests, for instance [cypress](https://www.cypress.io/)
* IE11 support
* Add notification about new app version, for instance [react-toastify](https://github.com/fkhadra/react-toastify)
* Add facebook hashtag posts, for instance https://www.facebook.com/hashtag/ве7116аа
* Add crash test rating, for instance [one.nhtsa.gov](https://one.nhtsa.gov/webapi/api/SafetyRatings/modelyear/2016/make/VOLKSWAGEN/model/JETTA?format=json)
* Add android and IOS apps using [React Native](https://facebook.github.io/react-native/)
* Create BOT for facebook, telegram, viber, wasap
* Create own ML service for image recognizer
* Add [Auth0](https://auth0.com/) or [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) (Auth as a service)

The project is open for everyone, so don't hesitate to create [issues](https://github.com/Krak86/carplates/issues) and [pull request](https://github.com/Krak86/carplates/pulls).

It is pretend to use the rules of [12 factors](https://12factor.net):
<ol>
<li>Codebase: Github</li>
<li>Dependencies: npm</li>
<li>Config: Dotenv</li>
<li>Backing services: Azure Table Storage, Disqus, RIA, NHTSA, ANPR, PlatesMania</li>
<li>Build, release, run:  Azure DevOps</li>
<li>Processes: Azure Table Storage, Disqus, RIA, NHTSA, ANPR, PlatesMania</li>
<li>Port binding: webpack</li>
<li>Concurrency: Azure Table Storage, Disqus, RIA, NHTSA, ANPR, PlatesMania</li>
<li>Disposability: Azure DevOps, webpack</li>
<li>Dev/prod parity: Azure DevOps, webpack</li>
<li>Logs: Application Insights</li>
<li>Admin processes: Azure DevOps, Github</li>
</ol>

## Functional Testing Result
According to [DTAP/SDLC](https://github.com/Krak86/carplates/wiki/DTAP:-Software-Development-Life-Cycle-(SDLC)) (Development Testing Acceptance Production/Software Development Life Cycle) here are the part of Testing/System testing/QA testing result:
* License Risks and Compliance Testing: [WhiteSource Bolt](https://dev.azure.com/krak86/CarsuaDevOps/_apps/hub/whitesource.ws-bolt.build-hub.wss)
* Linters Analysis: [SonarCloud](https://sonarcloud.io/dashboard?id=Krak86_carplates)
* CSS validation: [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcarsua.pp.ua%2F%23%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* HTML validation: [validator.w3.org](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcarsua.pp.ua%2F)
* Localization Testing: [validator.w3.org](https://validator.w3.org/i18n-checker/check?uri=https://carsua.pp.ua/#validate-by-uri+)
* Accessibility Testing: [lighthouse](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https://carsua.pp.ua)
* SEO Testing: [lighthouse](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https://carsua.pp.ua)
* Best Practicies Testing: [lighthouse](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https://carsua.pp.ua)
* Performance Testing: [lighthouse](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https://carsua.pp.ua)
* Security Testing/Vulnerability Testing: [OWASP ZAP Proxy](https://krak86.github.io/carplatesQA)
* Install/Uninstall Testing: [![Build Status](https://dev.azure.com/krak86/CarsuaDevOps/_apis/build/status/Krak86.carplates?branchName=master)](https://dev.azure.com/krak86/CarsuaDevOps/_build/latest?definitionId=1&branchName=master)

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
## DTAP: Software Development Life Cycle (SDLC)
* Development/Testing/Acceptance env: [https://carsua.pp.ua](https://carsua.pp.ua)
* Production env: [http://carsua.app](http://carsua.app)

##WIKI
* [DTAP/SDLC](https://github.com/Krak86/carplates/wiki/DTAP:-Software-Development-Life-Cycle-(SDLC)) (Development Testing Acceptance Production/Software Development Life Cycle)
* [Security Testing](https://github.com/Krak86/carplates/wiki/Security-Testing)

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/Krak86/carplates/badge.svg?style=beer-square)](https://beerpay.io/Krak86/carplates)  [![Beerpay](https://beerpay.io/Krak86/carplates/make-wish.svg?style=flat-square)](https://beerpay.io/Krak86/carplates?focus=wish)
