## UA car plates recognizer.

It is offline-first, mobile-first, static, single page web application, that is hosted on github pages with custom domain: http://carsua.app

This is a project that allows user to search a ukrainian car plates using open data. It's stack of the next tools, libraries, services etc.:

* Typescript
* Webpack
* React
* Redux
* React Router
* Material UI Framework
* Workbox
* PWA
* Jest
* NodeJs
* Azure Table Storage
* Azure Functions
* Azre DevOps
* Google/Facebook OAth2
* HTML5 Video/Audio
* Powershell

The extra services are using here:
* Disqus (Chat as a service)
* Automatic Number Plate Recognition API (Image recognizer as a Service)
* RIA Auto API (Car ads as a Service)
* National Highway Traffic Safety Administration API (Vin recognizer as a Service)
* Github Pafes (hosting as a Service)
* Let's Encrypt (certificate as a Service)

The project is open for everyone, so don't hesitate to create issues and pull request.
It is pretend to use the rules of https://12factor.net

Roadmap (see 'Research' project):
* Setup CI/CD
* Integration/e2e tests
* IE11 support
* Add notification about new app version
* Add facebook hashtag posts, for instance https://www.facebook.com/hashtag/ве7116аа 
* Setup content from plartesmania (avto-nomer.ru) service
* Add crash test rating

## Setup
You'll need to install a few things before you have a working copy of the project.

### 1. Clone this repo:
Navigate into your workspace directory.

Run:
```sh
$ git clone https://github.com/Krak86/carplates.git
```
### 2. Install node.js:
https://nodejs.org/en/

### 3. Install dependencies:
Navigate to the cloned repo's directory.

Run:
```sh
$ npm i
```

Afterwards you need to execute extra steps:

* get you own keys (check .env_example file) (use .env to hide it from a project)
* create your own azure table storage tables or use local emulator (you need 2 tables: for cars and for favorites)
* create azure function and add code there (check azure folder)
* manually download CSV files, parse it and upload to azure table using azure storage explorer or API (check powershell folder, azure folder and columns.csv as a template for columns)
* adjust policy html file (check policy folder), manually generate PDF (use Chrome for convert html to pdf)
* adjust CNAME file in case if you want to use custom domain name