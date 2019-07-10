# Reveal-Animation-JS
Simple Vanilla JS Reveal Animation Plugin I use for my projects
## How to Use
Using this plugin is very simple, you just need to reference both the javascript and the css files into your document and assign one of these classes to the items you want to animate

* fade-in
* slide-in-left
* slide-in-right

These are all the animations supported at the moment.

## Customisation

You're welcome to get the script and play with it, it's really easy to add animations, just add an else if statement with your css class

```javascript 
 else if(revealElements[i].classList.contains('slide-in-left')) {
                revealElements[i].classList.add("reveal--slide-in-left");
```




