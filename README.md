# generator-jrreact

Yeoman generator for React web projects. Mostly just for personal use, given it uses a set list of
technologies based on personal preference:

* React
* Yarn (if installed, otherwise npm)
* Webpack 2
* Babel¹ (with [object rest spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) and [class property](https://babeljs.io/docs/plugins/transform-class-properties/) plugins)
* Jest
* Enzyme
* Sass
* Autoprefixer²
* eslint (based mostly on [airbnb rules](https://github.com/airbnb/javascript))
* sass-lint
* Github Pages deployment (`npm run deploy`).

¹ *ES6+ is not transpiled as this project is mainly for prototyping with Chrome. If you need to support multiple browsers,
use [babel-preset-env](https://github.com/babel/babel-preset-env) and [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)*<br>
² *As above, Autoprefixer only generates prefixes for the Chrome (last 2 versions). If you
need to change this, update the `browserslist` file in the project root ([documentation](https://github.com/ai/browserslist)).*

<hr>

Other tools not included with this generator that I would recommend are:

* [react-hot-loader](https://github.com/gaearon/react-hot-loader) (React hot reloading)
* [react-router](https://github.com/ReactTraining/react-router) (routing)
* [react-intl](https://github.com/yahoo/react-intl) (internationalisation)
* [Redux](http://redux.js.org/docs/introduction/) or [MobX](https://github.com/mobxjs/mobx) (state management)
* [React Storybook](https://github.com/storybooks/react-storybook) (component demos)
* [TypeScript](https://www.typescriptlang.org/) (static types)
* [Husky](https://github.com/typicode/husky) (pre-commit/pre-push Git hooks)
* [Travis](https://travis-ci.org/) or [Circle CI](https://circleci.com/) (continuous integration)

## Prerequisites

```
npm i -g yo
```

## Installation

```
npm i -g generator-jrreact
```

## Usage
```
yo jrreact
```
