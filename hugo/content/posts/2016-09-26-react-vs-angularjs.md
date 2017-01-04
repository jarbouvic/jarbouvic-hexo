---
comments: true
date: 2016-09-27T11:00:46+07:00
draft: false
title: React makes me resent AngularJS
languages: 
- en
categories: 
- tech
tags: 
- AngularJS
- React
---

Just went through the React official [tutorial](https://facebook.github.io/react/docs/tutorial.html) and I am amazed by the simplicity of the framework as opposed to the unassumed complexity of AngularJS. I played mentally with it for 5 minutes and it just feels like a box of Legos™ where each block has its own obvious shape and role and can be used independently of the others. At first sight, working with React looks like a simple game of fitting blocks inside each others, allowing you to build anything from the simplest of structure to the most intricate work of art.

To be fair, I haven't even written one line of code yet with React, yet it feels natural and straightforward. I remember going through Angular tutorials amazed by how it seemed to just magically work but unable to fully grasp the bigger picture. Every component of the framework felt it had roots growing all the way to some obscure foundation which would require weeks to understand and master. I felt overwhelmed by the amount of conventions and setup to go through before being able to build a simple app.

Here's some of the frustration I went through:

- What's this magical `$scope` doing ? How the heck should it be used when everyone says it's potentially a time-bomb ? But it's everywhere in the tutorials...
- `$digest` what ? Wait, it sometimes work, sometimes *doesn't*?
- The inconspicuous binding between javascript camelCase and kebab-case DOM element names: I mean it took me a full day to understand why my `simpleDirective` would simply just not work with my `<SimpleDirective>` element! And it still kind of feels like black magic today.
- IIFE ? Really ? What's this `$inject` non-sense ? Do I really need *that* everywhere in my code ?

```javascript
(function() {
    var MyController = function($scope, greeter) {
        // ...
    }
    MyController.$inject = ['$scope', 'greeter'];
    someModule.controller('MyController', MyController);
})();
```
- No componentization (pre 1.5)? So what should a module do ? What should an app do then ? How should I organize my code ? Put all my controllers together, my directives together, my templates together, my filters together ? It wants to be MVC yes, but it doesn't feel right...
- jqLite ? So Angular even went ahead and slashed jQuery to fit its needs only ? 

All in all, to develop in AngularJS it seems you have to go through a full month of head-banging on the table before you can manage to have something running by something else than just pure magic. I understand that AngularJS was built at a time where alternatives did not exist and it had to fight against browsers to run properly before ES5 support. It is pretty impressive in itself and can definitely be used to build rich and complex web applications.

But encountering React has made me feel like I've been abused of by AngularJS. Why all the pain ? Why the throbbing headaches ? I get that React does not have the same approach and is built as a library rather than a framework. This makes learning React more of a step-by-step experience, which makes it much easier to grasp. Nevertheless, shouldn't it be the way to go for frameworks too ? Shouldn't frameworks be essentially composed of loosely-coupled modules or libraries rather than one big monolithic, multi-layer block ? There's a reason why we love Legos™, that's because it makes building stuff a lot more easy and enjoyable. Not blaming AngularJS though, it does (did ?) serve a purpose, but wow, how I enjoy the breeze that React blows my way!

PS: I know that Angular 2 has addressed most of the downfalls of AngularJS, but it's apparently still one big monolith. Not sure I'm ready to embark on another hell-bent journey to learn it from scratch again...

