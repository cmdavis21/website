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
navBtn.addEventListener("touchstart", toggleMenu);

// Event listener for navClose click and touch events
navClose.addEventListener("click", toggleMenu);
navClose.addEventListener("touchstart", toggleMenu);

// Loop through each nav link and add event listeners for click and touch events
navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", toggleMenu);
  navLink.addEventListener("touchstart", toggleMenu);
});


//===================== ACCORDION SKILLS TABS =====================//
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.classList; // Retrieve the classList of the parent element

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass.contains("skills__close")) { // Use the contains() method to check if the class "skills__close" is present
    this.parentNode.className = "skills__content skills__open";
  }

}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
  element.addEventListener("touchstart", toggleSkills);
});


//===================== PROJECTS SWIPER CAROUSEL =====================//
const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  direction: 'horizontal',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
