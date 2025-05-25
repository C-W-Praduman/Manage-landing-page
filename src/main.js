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
