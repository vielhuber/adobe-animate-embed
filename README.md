# 🍿 adobe-animate-embed 🍿

embed canvas animations generated with adobe animate the way it should be.

## supports

-   fully responsive to the parent container
-   full or partly transparent backgrounds
-   auto play and rewind on mouse over and out
-   no need to manually embed createjs (e.g. from an external cdn)
-   simple caching mechanism when loading published files from adobe animate
-   control loop, rewind and play/pause
-   embedding of multiple animations (from the same source) on the same page
-   different fps in different animations, also manually modify speed
-   full ie11 support

## installation

### directly

```html
<script src="adobe-animate-embed.min.js"></script>
```

### library

```sh
npm install adobe-animate-embed
```

```js
import aae from 'adobe-animate-embed';
```

## usage

first create an animation in adobe animate of type [html5 canvas](https://helpx.adobe.com/animate/using/creating-publishing-html5-canvas-document.html) and publish the animation with the default values into e.g. /data/animation1/. for more information look at this [blog article](https://vielhuber.de/blog/adobe-animate-animationen-nativ-einbinden/).

now prepare an empty container:

```html
<div class="anim1"></div>
```

instantiate the animation by referencing the js file from the folder created above:

```js
let a1 = new aae(
    document.querySelector('.anim1'), // dom element, where the animation should be instantiated
    '/data/animation1/animation1.js' // url to the js file; can be an absolute or relative link
);
```

it's time to run the animation:

```js
a1.start();
```

by default the loop setting from the publish settings is used.
however, you can change this dynamically:

```js
a1.start(true); // run in loop
a1.start(false); // run once
```

you even can rewind an animation and play it backwards:

```js
a1.start(null, false); // run forwards
a1.start(null, true); // run backwards
```

`start` immediately starts the animation. however, you can also show only the first frame:

```js
a1.start(null, null, false); // no autoplay
a1.resume();
```

you can manually adjust the speed of an animation:

```js
a1.start(null, null, null, 2); // play at double speed
```

often you want an animation to play when hovering an element and rewind when unhovering.\
the library provides a handy shortcut for that:

```js
a1.hover();
```

you can stop, pause or destroy the animation at any time:

```js
a1.stop();
a1.pause();
a1.destroy();
```

## caveats

- easing functions such as "elastic" are not cleanly supported by Animate CC after the export
