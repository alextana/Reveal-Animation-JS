var bodyHeight = window.innerHeight;
var revealElements = document.getElementsByClassName('reveal--onscroll');
// animate function
var Animate = function() {
    for (var i = 0; i < revealElements.length; i++) {
        var positionFromTop = revealElements[i].getBoundingClientRect().top;
        if ( positionFromTop - bodyHeight <= 0 ) {

            if(revealElements[i].classList.contains('fade-in')) {
                revealElements[i].classList.add("reveal--fade-in");
            }
            else if(revealElements[i].classList.contains('slide-in-left')) {
                revealElements[i].classList.add("reveal--slide-in-left");
            }
            else if(revealElements[i].classList.contains('slide-in-right')) {
                revealElements[i].classList.add("reveal--slide-in-right");
            }
        
        }   
    }
}
// triggers function on scroll
window.onscroll = Animate;
// triggers function on load
window.onload = Animate;