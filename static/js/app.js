//===================== MOBILE NAVBAR TOGGLE =====================//
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav__link");
const navBtn = document.getElementById("nav-btn");
const navClose = document.getElementById("nav-close");

// Function to toggle the menu visibility
function toggleMenu() {
  navMenu.classList.toggle("show-menu");
  navBtn.classList.toggle("hide-icon");
  navClose.classList.toggle("show-icon");
}

// Event listener for navBtn click and touch events
navBtn.addEventListener("click", toggleMenu);
navBtn.addEventListener("touchend", toggleMenu);

// Event listener for navClose click and touch events
navClose.addEventListener("click", toggleMenu);
navClose.addEventListener("touchend", toggleMenu);

// Loop through each nav link and add event listeners for click and touch events
navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", toggleMenu);
  navLink.addEventListener("touchend", toggleMenu);
});




//===================== ACCORDION SKILLS TABS =====================//
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function closeAllTabs() {
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].classList.remove("skills__open");
    skillsContent[i].classList.add("skills__close");
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", () => {
    const parent = element.parentNode;
    if (parent.classList.contains("skills__open")) {
      parent.classList.remove("skills__open");
      parent.classList.add("skills__close");
    } else {
      closeAllTabs();
      parent.classList.remove("skills__close");
      parent.classList.add("skills__open");
    }
  });

  element.addEventListener("touchstart", () => {
    const parent = element.parentNode;
    if (parent.classList.contains("skills__open")) {
      parent.classList.remove("skills__open");
      parent.classList.add("skills__close");
    } else {
      closeAllTabs();
      parent.classList.remove("skills__close");
      parent.classList.add("skills__open");
    }
  });
});



//===================== SWIPER CAROUSELS =====================//
// SKILLS TABS
const skillsSwiper = new Swiper(".skills-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  debugger: true,
});

// PROJECTS CAROUSEL
const projectsSwiper = new Swiper(".projects-swiper", {

});