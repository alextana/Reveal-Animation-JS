# Reveal-Animation-JS
Simple Vanilla JS Reveal Animation Plugin I use for my projects
## How to Use
Using this plugin is very simple, you just need to reference both the javascript and the css files into your document and assign **reveal--onscroll** plus one of these classes to the items you want to animate

* fade-in
* slide-in-left
* slide-in-right
* zoom-in
* rotate-in

*Example of an HTML use case*

```html
 <div class="item reveal--onscroll zoom-in">
                    <h1>Zoom in</h1>
                </div>
```


## Customisation

You're welcome to get the script and play with it, it's really easy to add animations, just add an else if statement with your css class

```javascript 
 else if(revealElements[i].classList.contains('slide-in-left')) {
                revealElements[i].classList.add("reveal--slide-in-left");
```

The first one will be the one you add to your HTML file and the second one would be the one in the .css file, which would be the actual animation.


