# 🖱️ Nav On Scroll

**NavOnScroll.js** — Bring Life to Navigation. Add scrolling animations to it with this ```Vanilla Js Lite Plugin```. Be it Bootstrap, Semantic-UI, Materialize, or just any Custom Navigation Bar; **navonscroll.js** is Easy To Integrate and make your ```Navigation Bar Animate On Scroll events.```

## Features 📦
* No Dependencies!
* Vanilla JS Lite Plugin
* Easy to Integrate with any framework
* Supports Top & Bottom Navigation Bar
* Easy Configuration & Flexebility

## Installation 📥

[Download](https://github.com/kmanadkat/navonscroll/archive/master.zip) git repository and get the js plugin from ```dist``` folder.

```html
dist/navonscroll.min.js
```

## Usage 🕹

Designed to be easy to use, it does most of the heavy lifting 🏋🏻 behind the scenes and exposes a simple api to interact with the dom.

1️⃣ Get your Navbar Markup ready with "id" attribute. Below example shows id set to ```demo1Navbar```

```html
<!--==================== Declare Navbar with ID ====================-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="demo1Navbar">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active"><a class="nav-link" href="#">Home</span></a></li>
      <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
    </ul>
  </div>
</nav>
```
2️⃣ go ahead and include ```navonscroll.min.js``` script file. Placing it just above ```</body>``` tag is fine.
```html
<!--================ Nav On Scroll Plugin ================-->
 <script src="assets/js/navonscroll.min.js"></script>
</body>
```
3️⃣ Finally, make *function call with required parameters.* Other parameters has some defaults set for you, if you want to get started real quick.
```html
 <!--================ NavOnScroll Plugin ================-->
  <script src="navonscroll.min.js"></script>
  <!-- Function Call --> 
  <script>
    hide_on_scroll({
      nav_id : 'demo1Navbar'
    });
  </script>
</body>
```
Yup! That was it 🎈. There you go with a beautiful on scroll animating Navbar. Pretty simple, isn't it!

## Configuration
Let us jump in ```real easy and powerful configurations``` (function parameters) to have *more control over onscroll behaviour of navbar.*

I am listing all Parameters of ```hide_on_scroll()``` with default values below :
```javascript
// hide_on_scroll function with DEFAULT parameter VALUES
hide_on_scroll({
  nav_id               : '',      // you must specify this for plugin to work
  nav_offset           : 200,     // after how much y-scroll, nav should hide onscroll down
  nav_position         : 'top',   // you want to see nav bar at 'top' or 'bottom', default 'top'
  hide_onscroll_mobile : false,   // disables hide-onscroll for mobile, you can set it to true
  mobile_width         : 576      // viewport width below which it disables hide-onscroll if above is false
});
```
As you can see i have written down comments for each parameter passed. Just have a glance on it & you are good to go 🏃🏻

If you are having are having hard time with undertsnading those parameters, not to worry. I have made around [9 Demo Examples](https://kmanadkat.github.io/navonscroll/#examples) for you with Frameworks ```Bootstrap v4.3``` & ```Semantic UI``` also took care for developers who create from scratch with custom navigation div.

> We are always talking of **Horizontal Navigation Menu** and not the vertical lists menu or sidebars.

🎯 We reached the end, this plugin will definitely add an extra touch in your project.
## License
[MIT](https://github.com/kmanadkat/navonscroll/blob/master/LICENSE) license. ```Free for use in Commercial and Personal projects with Attribution.```