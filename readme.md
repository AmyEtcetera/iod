# IOD Site Refactor and Refresh

This project uses ZURB's Foundation for Sites framework to organize and structure the project, and generates flat, minified files for production.

Goals:

With performance, accessibility, SEO, user-friendliness, speed and organization for developer all in mind...

- Improved use of semantic HTML5
- Site is device agnostic
- Make Google happier
- SEO: page titles unique to each page
- More robust responsive design than first phase
- Enhanced navigation menus and breadcrumbs

For the dev...

- Clean crufty CSS files and rebuild as mobile-first
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Minified production code


## Installation notes from ZURB

You'll need:

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com/)



### Using the CLI

Get full installation and use instructions from [ZURB](https://foundation.zurb.com/sites/docs/).

Develop:

```bash
npm start
```

or Production:

```bash
npm run build
```
