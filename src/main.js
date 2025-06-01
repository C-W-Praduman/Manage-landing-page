const primaryNavigation = document.getElementById("primary-navigation");

const toggleButton = document.querySelector(".mobile-nav-toggle");



const iconHamburger = document.querySelector(".icon-hamburger");

let flag = true;

const handleToggle = () => {

    primaryNavigation.classList.toggle("open");

    if (flag) {
        iconHamburger.src = "public/images/icon-close.svg"
        flag = false
    } else {
        iconHamburger.src = "public/images/icon-hamburger.svg"
        flag = true
    }
}

toggleButton.addEventListener("click", (e) => {

    handleToggle();

})


// swiper-js slider handling 


  const swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      // Force 1 slide for screens below 768px
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

