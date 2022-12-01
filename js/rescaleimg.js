/**
 * Slider Function to rescale image 
 */

var img="img"
let slider = document.getElementById("img-slider");

var elems = document.getElementById("display-image");
for (var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundSize = "100px";
}

slider.addEventListener('input', e => {
  elems.style.backgroundSize = e.target.value + 'px'
})
