<a href="http://react-pwa.surenatoyan.com/" target="_blank" rel="noreferrer">
 <img src="./public/images/cover.png" width="600" title="Base App">
</a>

# React-PWA

A minimal React PWA application as a Github template.

## Synopsis

It's a combination of essential (and minimal) libraries/components/utils and their integrations upon CRA, which developers usually need during the process of making React application.

## Motivation
We love CRA. And we think it's the right way to build a React application for most of the projects. We have been using CRA in lots of projects, and we are sure that there are lots of routines that developers don't need to care about: like webpack config.

By the same philosophy, there are other routines above the basic configuration, which are almost the same in lots of projects - like router, theme, store, etc. This project is a minimal layer upon CRA which gives you all of that out of the box as a template.

## Features

* [CRA](#cra)
* [React Router](#react-router)
* [Material UI](#material-ui)
* [Store](#store)
* [Theme](#theme)
* [Notifications](#notifications)
* [Error Handling](#error-handling)
* [Service Worker](#service-worker)
* [SEO](#seo)
* [No IE](#no-ie)
* [Hoster](#hoster)

#### CRA

It's based on CRA, which is (of course) not ejected. It means you have full access to CRA features.

#### React Router

The latest version of `react-router-dom` is integrated. Routes are defined in [/src/routes/](https://github.com/suren-atoyan/react-pwa/blob/master/src/routes/index.js). In the minimal version of the template, there are demonstrated 5 routes that render 5 pages. Pages are loaded asynchronously by [asyncComponentLoader](https://github.com/suren-atoyan/react-pwa/blob/master/src/utils/asyncComponentLoader/loader.js) utility (which is optional).

#### Material UI

The latest version of [Material-UI](https://material-ui.com/) is integrated. The whole layout of the application is made by `Material-UI` components. In the demonstrated components/sections you can notice how MUI components can be customized. The styling system is also inherited from MUI.

#### Store

For store management [recoil](https://github.com/facebookexperimental/Recoil) has been used. It's a simple state management tool. Here you can find its [implementation and integration](https://github.com/suren-atoyan/react-pwa/tree/master/src/store).

There is no global state object like in Redux, each part of shared state has it's own "life". For example there are `store/theme`, `store/sw` and `store/notifications`. See how you can use `store/theme` in [the example](https://github.com/suren-atoyan/react-pwa#theme) below.

NOTE: you can also see how it's can be done with [overmindjs](https://github.com/cerebral/overmind) [here](https://github.com/suren-atoyan/react-pwa/tree/a849c006cd45f577bf0c7da78efaa51246254448/src/store).

#### Theme

The [theme system](https://github.com/suren-atoyan/react-pwa/blob/master/src/theme/ThemeProvider.js) is based on MUI theme. See how you can use it:

```js
// ...
import { useTheme } from 'store/theme';

function SomeCoolComponent() {
  const [theme, actions] = useTheme();

  // let's see what is the current theme mode
  console.log(theme);

  // and if you want to change the theme, call appropriate action
  function toggleTheme() {
    actions.toggle();
  }
}
```

Also you can modify predefined theme parameters in [config](https://github.com/suren-atoyan/react-pwa/blob/master/src/config/index.js#L29) file.

#### Notifications

Here we've used [notistack](https://github.com/iamhosseindhv/notistack). To show a notification you just need to call the appropriate action; look how you can do it:

```js
// ...
import { useNotifications } from 'store/notifications';

function SomeCoolComponent() {
  const [notifications, actions] = useNotifications();

  function showNiceWarning() {
    actions.push({ message: 'Heeeeey, something went wrong I guess' });
  }
}
```

#### Error Handling

[Error Handling](https://github.com/suren-atoyan/react-pwa/tree/master/src/errorHandling) is based on `react-error-boundary` package. There is also [implemented](https://github.com/suren-atoyan/react-pwa/tree/master/src/errorHandling/Fallbacks) a general fallback for the whole app.

#### Service Worker

In the production application there will be used service worker and workbox provided by CRA, plus we "listen" to changes, and in case of new build, the user will get a notification about the new version of the application (app is updatable).

<img src="./public/images/readme/sw.update.png" width="300" title="SW update">

#### SEO

For SEO there is used `react-helmet`. The [Meta component](https://github.com/suren-atoyan/react-pwa/tree/master/src/components/Meta) will help you to update meta tags easily. To see the simple usage of it check [this](https://github.com/suren-atoyan/react-pwa/blob/master/src/pages/Welcome/Component.js#L20).

#### No IE

A special script works in the index.html file for checking if the browser of the user is IE or not. And if it is the case, the execution of the application will be stopped and a special message will be shown. You may not think about the compatibility of the app and IE, plus you may not think about how broken your app will be in different versions of IE. So, all users of IE will see this message when they visit your app.

<img src="./public/images/readme/ie.message.png" width="300" title="IE message">

You can see the implementation of this [here](https://github.com/suren-atoyan/react-pwa/tree/master/public/no-ie). It supports multiple languages. You can add your language with its translation [here](https://github.com/suren-atoyan/react-pwa/blob/master/public/no-ie/init.js#L15).

#### Hoster

There is a simple express server `/hoster/server`, which plays the role of a static server. The script `start-prod` (`npm/yarn start-prod`), will build the project and start express server. For more read in [Usage](#usage) section.

## Size

After all these integrations the biggest bundle size is **~66KB**. It means even first load will be pretty fast (in my case it's 1.1s), further loads (already cached by service worker and workbox) will take ~0.25s.

<img src="./public/images/readme/build.png" width="300" title="Build">

## Usage

You can use this template just by pressing `Use this temaplte`.

<img src="./public/images/readme/use-template.png" width="300" title="Use this temaplte">

Or you can fork/clone it.

Install dependencies:

```bash
yarn # or npm install
```

In order to run it in development, run:

```bash
yarn start # or npm run start
```

In order to run it in production, run:

```bash
yarn start-prod # or npm run start-prod
```

The last one will build your project (`yarn build`) and start express server (`yarn serve`) so as to serve static files.

## Structure

<img src="./public/images/readme/structure.png" width="200" title="Structure">

Initial files:

`index.js`

<img src="./public/images/readme/index.js.png" width="500" title="index.js file">

`App.js`

<img src="./public/images/readme/App.js.png" width="500" title="App.js file">

`Layout`

<img src="./public/images/readme/layout.sc.png" width="500" title="Layout component">

## [Live Demo](https://react-pwa.surenatoyan.com/)

<div>
 <img src="./public/images/readme/demo-dark.png" width="300" title="Dark demo"> <img src="./public/images/readme/demo-light.png" width="300" title="Light demo">
</div>

## Audit

NOTE: The performance is not 100 because of demo server.
Check the results in the [live demo](https://react-pwa.surenatoyan.com/)

<img src="./public/images/readme/audit.png" width="500" title="Audit results">

## TODOs

- [ ] Full test coverage

## License

[MIT](./LICENSE)

