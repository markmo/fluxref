# Flux React Reference App

This project attempts to create a best practice implementation of a [Flux](http://facebook.github.io/flux/) [React](http://facebook.github.io/react/) App using [Browserify](http://browserify.org/) and [Gulp](http://gulpjs.com/).

It is part of an ongoing investigation to find my preferred front-end development approach and framework.

My journey and preferences over the years has been:

* Standard Web (e.g. WebWork, Cocoon, Spring MVC)
* Java Swing (and WebStart)
* Adobe Flex (and Air)
* Custom JavaScript SPA Framework using Knockout and RequireJS
* Bootstrap-based using RequireJS and Grunt

Currently liking:
* Elm from a language perspective, concerns over component ecosystem and accepted patterns for large-scale development
* React, using the Flux Architecture, switching from Grunt to Gulp, and RequireJS to Browserify

Currently passing on:
* Angular 1.3
* Ember

Angular 1.3 doesn't seem to provide great support for one of the major anchors I have in making the Bootstrap-based architecture scale - Nested Views. This is where React seems to shine. The approach of building composable, self-contained components seems more natural than a template-based MVC approach. Nested Views was also an issue with Knockout, and not being able to "unmount" a component, such as when a mobile page slides out of view.

As an all-in-one framework with a focus on testing, Angular is admirable, but it doesn't appear to solve many of the specific issues with previous frameworks. I am also concerned by reports of performance issues, and the complexity of two-way data binding as the UI becomes more complex.

Angular 2.0 shows promise, pulling in aspects of [Durandal](http://durandaljs.com/). I am concerned about the move to AtScript. Related to this is a vague concern that the general approach seems to be making JavaScript more Java-like. I don't have an issue with Java, and the goals of AtScript make sense. But JavaScript is its own beast, and while another language for the web may be just what is needed, the question then is does it go far enough, or should I be looking at something else entirely such as Elm.

Ember is interesting but appears a little heavy in terms of library size.

With respect to build tools, I've been a fan of RequireJS but I continue to have issues mixing AMD libraries with libraries providing some form of partial AMD support.

After using both Grunt and Gulp, I've found Gulp to be faster, and more intuitive to use.

On the TODO list (no pun intended) are:
* [Mithril](http://lhorie.github.io/mithril/) (intrigued by its performance)
* Alternative implementations of the Flux architecture including [Reflux](https://github.com/spoike/refluxjs) and [Fluxy](https://github.com/jmreidy/fluxy)
* [Clojurescript](https://github.com/clojure/clojurescript) and [Om](https://github.com/swannodette/om).