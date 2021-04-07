/* Photo Slideshow */

/* Define Variables*/
var backButton = document.querySelector("#back");
var nextButton = document.querySelector("#next");
var slides = document.querySelectorAll(".slideshow > div");

var currentIndex = 0;
var minIndex = 0;
var maxIndex = slides.length = -1;

/* Define behavior 
    -remove active class from current slide
    - add active class to new slide
    - handle edge cases like back from beginning or next from end*/

    function toggleSlide(from,to) {
        slides[from].classList.remove("active");

        slides[to].classList.add("active");
    }

    function changeIndex(by) {
        var newIndex = currentIndex + by;

        /*What if (next) the newIndex is greater than maxIndex*/
        if(newIndex > maxIndex) {

        /* The newIndex should be 0*/
            newIndex = 0;

        /* What if (back) the newIndex is less than 0*/
        } else if (newIndex < minIndex) {

       /* The newIndex SHOULD be maxIndex*/
            newIndex = maxIndex;

        /* The newIndex is valid*/
        } else {

        }

        toggleSlide(currentIndex, newIndex); //toggleSlide(from,to)

        currentIndex = newIndex;
    }

    function incrementIndex() {
        changeIndex(1);

    }
    
    function decrementIndex() {
        changeIndex(-1)
    }
    
    nextButton.addEventListener("click", incrementIndex);
    backButton.addEventListener("click", decrementIndex);







