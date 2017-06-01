# generator-jrreact

[![npm version](https://badge.fury.io/js/generator-jrreact.svg)](https://badge.fury.io/js/generator-jrreact)

Yeoman generator for React web projects. Mostly just for personal use, given it uses a set list of
technologies based on personal preference:

* React
* Yarn (if installed, otherwise npm)
* Webpack 2
* Babel (with [object rest spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) and [class property](https://babeljs.io/docs/plugins/transform-class-properties/) plugins)
* Jest
* Enzyme
* Sass
* Autoprefixer
* eslint (based mostly on [airbnb rules](https://github.com/airbnb/javascript))
* sass-lint
* Github Pages deployment (`npm run deploy`).

<hr>

Other tools not included with this generator that I would recommend are:

* [react-hot-loader](https://github.com/gaearon/react-hot-loader) (React hot reloading)
* [react-router](https://github.com/ReactTraining/react-router) (routing)
* [react-intl](https://github.com/yahoo/react-intl) (internationalisation)
* [Redux](http://redux.js.org/docs/introduction/) or [MobX](https://github.com/mobxjs/mobx) (state management)
* [React Storybook](https://github.com/storybooks/react-storybook) (component development environment)
* [TypeScript](https://www.typescriptlang.org/) (static types)
* [Prettier](https://github.com/prettier/prettier) (code formatting)
* [Husky](https://github.com/typicode/husky) (Git hooks)
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
