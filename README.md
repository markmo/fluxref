# Flux React Reference App

This project attempts to create a best practice implementation of a [Flux](http://facebook.github.io/flux/) [React](http://facebook.github.io/react/) App using [Browserify](http://browserify.org/) and [Gulp](http://gulpjs.com/).

It is part of an ongoing investigation to find my preferred front-end development approach and framework.

My journey and preferences over the years has been:

* Standard Web (WebWork -> Cocoon -> Spring MVC)
* Java Swing (using WebStart)
* Adobe Flex (and Air)
* Own JavaScript SPA Framework using Knockout and RequireJS
* Bootstrap-based using RequireJS and Grunt

Currently liking:
* Elm from a language perspective, concerns over component ecosystem and accepted patterns for large-scale development
* React, using the Flux Architecture, and switching from Grunt to Gulp, and from RequireJS to Browserify

Currently passing on:
* Angular 1.3
* Ember

Angular 1.3 doesn't seem to provide great support for one of the major anchors I had in making the Bootstrap-based architecture scale - Nested Views. This is where React seems to shine. The approach of building composable, self-contained components seems more natural than a template-based MVC approach. Nested Views was also an issue with Knockout, and not being able to "unmount" a component when it went out of view, such as a mobile page sliding out of view. As an all-in-one framework with a focus on testing, Angular is admirable, but it doesn't appear to solve many of the specific issues I faced with previous frameworks, for the cost of an "all in" framework. I am also concerned by reports of performance issues, and the complexity of two-way data binding as the UI becomes more complex.

Angular 2.0 shows promise, pulling in aspects of [Durandal](http://durandaljs.com/). I am concerned about a few changes, such as the move to AtScript. Related to this is a vague concern that the general approach is to make the framework more Java-like. I don't have an issue with Java, and the goals of AtScript seem admirable. But JavaScript is its own beast, and while another language for the web may be just what is required, the question then is does it go far enough, or should I be looking at something else entirely such as Elm.

Ember is interesting but appears a little heavy in terms of size of library.

I've been a fan of RequireJS but I continue to have issue mixing AMD libraries with libraries providing some form of partial support.

After using both Grunt and Gulp, I've found Gulp faster, and more intuitive to use.

On the TODO list (no pun intended) are:
* [Mithril](http://lhorie.github.io/mithril/) (intrigued by its performance)
* Alternative implementations of the Flux architecture including [Reflux](https://github.com/spoike/refluxjs) and [Fluxy](https://github.com/jmreidy/fluxy)
* [Clojurescript](https://github.com/clojure/clojurescript) and [Om](https://github.com/swannodette/om).