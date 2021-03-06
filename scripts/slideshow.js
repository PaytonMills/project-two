/* Photo Slideshow */
/*
  Get reference
    - back button
    - next button
    - slides
    
  Define
    - currentIndex
    - minIndex
    - maxIndex
*/
var backButton = document.querySelector("#back");
var nextButton = document.querySelector("#next");
var slides = document.querySelectorAll(".slideshow > div");

var currentIndex = 0;
var minIndex = 0;
var maxIndex = slides.length - 1;

/*
  Define behavior
    - remove active class from current slide
    - add active class to new slide
    - handle edge cases like back from beginning or next from end
*/

function toggleSlide(from, to) {
  /* Remove active class from current slideIndex */
  slides[from].classList.remove("active");

  /* Add active class to new slideIndex */
  slides[to].classList.add("active");
}

function changeIndex(by) {
  var newIndex = currentIndex + by; // -1

  /* What if (next) the nexIndex is greater than maxIndex */
  if (newIndex > maxIndex) {
    /* The newIndex SHOULD be 0 */
    newIndex = 0;

    /* What if (back) the newIndex is less than 0 */
  } else if (newIndex < minIndex) {
    /* The newIndex SHOULD be maxIndex */
    newIndex = maxIndex;
  } else {
    /* The newIndex is valid */
  }

  toggleSlide(currentIndex, newIndex); // toggleSlide(from, to)

  currentIndex = newIndex;
}

function incrementIndex() {
  changeIndex(1);
}

function decrementIndex() {
  changeIndex(-1);
}

/*
  Wire it up
*/

/* Wire up next to change by +1 */
nextButton.addEventListener("click", incrementIndex);

/* Wire up next to change by -1 */
backButton.addEventListener("click", decrementIndex);
