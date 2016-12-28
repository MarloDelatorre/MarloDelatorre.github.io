var dropdownToggled = false;
var imageIndex = 1;

function toggleDropdown() {
  var menuItems = document.getElementById("menu-items");
  if (dropdownToggled) {
    menuItems.setAttribute("class", ""); 
  } else {
    menuItems.setAttribute("class", "toggled");
  }
  dropdownToggled = dropdownToggled ? false : true;
}

function slideTo(index) {
  var sliderIndicators = document.getElementsByClassName("slider-indicator")[0].children;

  var sliderDescriptions = document.getElementsByClassName("slider-desc")[0].children[0].children;

  // clear active indicator
 sliderIndicators[imageIndex - 1].setAttribute("class", ""); 

  // clear active description
  sliderDescriptions[imageIndex - 1].setAttribute("class", "");

  imageIndex = index;
  // set selected indicator to active  
  sliderIndicators[index - 1].setAttribute("class", "active");

  // set selected description to active
  sliderDescriptions[index - 1].setAttribute("class", "active");
  // set appropriate background image
  document.getElementsByClassName("image-wrapper")[0].style.backgroundImage = "url(img/slider-" + index + ".jpg)";
}

window.setInterval(function() {
  var i = imageIndex + 1;
  if (i > 4) {
    i = 1;
  }
  slideTo(i);
  imageIndex = i;
}, 5000);

