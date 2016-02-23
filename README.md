# ES6 playground

This repo is meant to get you jump started on playing around with ECMAScript 6.

[babel][babel] is a JavaScript compiler, which compiles newer/different
versions of JavaScript to JavaScript that can run in other environments that
would not normally work due to limitations of those environments. It used to be
dedicated to compiles es6 to es5, but it is now a general purpose compiler from
JavaScript *to* JavaScript. You need to install plugins in order to activate the
different features. Then you need to use the `require` hook to enable compiling.
That initialization step is taken care of for you in `init.js`.

You can start writing es6 in `index.js`. A good es6 resource is on
[babel's website][babel-es6]. Run `npm start` or `node init` in order to run
your code.

[babel]: https://babeljs.io/
[babel-es6]: https://babeljs.io/docs/learn-es2015/
