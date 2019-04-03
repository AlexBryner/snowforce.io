
# Snowforce.io Stenciljs App

This project has been built using a web component compiler and framework Stenciljs that will look very familiar if you have worked before with React.  The resulting web page is mostly statically compiled with offline support as a progressive web app. A few plugins have been added by Stencil including Workbox for managing the service worker, a router for navigation, a Sass compiler for compiling component specific css, and auto generated markdown documents for each component based on the TypeScript compilation.  There is more about Stencil below.

The build directory is in src and the compiled results will be in a www directory that is not included in source but will be compiled based on the scripts and configuration. Each component in source currently has a few files

    * .tsx : Will look very familiar to working with react where the render function returns the html to be rendered on the dom.  At the top of the TSX file the @Component object defines how to reference the component, where to find the styles, and whether or not the shadow dom will be enabled for that component.

    * .spec.ts : Tests to be run by Jest

    * .scss : Scss file that will be compiled to css for the component.  Global imports for all Scss files are managed in the stencil.config.ts file under plugins.  Currently importing all Mixins, Variables, and other functions to each component scss file.

    * README.md : Auto-generated Readme file that is built up by stencil based on the typescript annotations.  There is a line that delineates where the auto-gen portion starts and any notes can be manually added above that line.

# Scripts

Scripts have been added to the package.json file include

## Dev Server - npm run start-dev-server

This builds up the www directory for development and launches a local host environment to view the compiled results.  This does not launch a service worker like it will in prod.  There are quite a few notes preserved and in some cases added that will be accessible in the hosted site.  When updates are saved the page will not refresh, but updates will be logged in the browser console.

Currently firefox does not support features used in the development builds that are required to run the hot module reloading.  Firefox does support the production builds.

## Production Build - npm run production-build

This minifies and preps the site for static hosting unless otherwise designated.  There is also a service worker added using the workbox plugin that caches any resources listed in the stencil.config.ts file under the output target - serviceworker

## Run Tests

Currently only running jest, but future support is coming for End to End (e2e) testing that will utilize puppeteer and even items like running screen shots.

    * npm run test - One time run of tests
    * npm run test.watch - Runs tests as you dev

## Update Global CSS from Theme Directory - npm run compile-theme-scss

Currently using this for normalize and a couple minor items.  Components utilizing shadow dom get a scoped context for css so need to evaluate the use case around this in the future.

## Build ReadMe.md Docs - npm run build-docs

Generates the markdown files used for readme's within each component directory.

## Firebase

### Local Server - npm run firebase-local-serve

# About Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

https://stenciljs.com/docs/introduction/