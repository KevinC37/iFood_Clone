let previous = document.getElementById("carousel_previousbtn");
let next = document.getElementById("carousel_nextbtn");
let carouselContainer = document.getElementById("carousel_container");
let carouselItems = document.getElementById("categories_container");

//show carousel if overflow, else hide it
(function toggleCarouselOnOverflow() {
    if(carouselItems.clientWidth < carouselItems.scrollWidth) {
        previous.style.display = "visible";
        next.style.display = "visible";
        carouselContainer.style.display = "flex";
    
    } else {
        previous.style.display = "none";
        next.style.display = "none";
        carouselContainer.style.display = "flex";
        carouselContainer.style.justifyContent = "flex-start";
    
    }
})();

//Scrolls carousel to left/right
(function scrollCarousel() {
    previous.addEventListener("click", () => {
        carouselItems.scrollLeft = carouselItems.scrollWidth;
        next.classList.remove("scroll_right");
        previous.classList.add("scroll_left");
    
    })
    
    next.addEventListener("click", () => {
        carouselItems.scrollLeft = -carouselItems.scrollWidth;
        next.classList.add("scroll_right");
        previous.classList.remove("scroll_left");
    })
})();
