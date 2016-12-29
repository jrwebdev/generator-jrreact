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
* eslint (based mostly on [airbnb rules](https://github.com/airbnb/javascript)) and sass-lint
* Github Pages deployment (`npm run deploy`).

Other tools not included with this generator that I would recommend are:
* [react-router](https://github.com/ReactTraining/react-router) (routing)
* [react-intl](https://github.com/yahoo/react-intl) (internationalisation)
* [Redux](http://redux.js.org/docs/introduction/) or [MobX](https://github.com/mobxjs/mobx) (state management)
* [React Storybook](https://github.com/storybooks/react-storybook) (component demos)
* [TypeScript](https://www.typescriptlang.org/) (static types)

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
