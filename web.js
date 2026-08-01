let card = document.querySelectorAll(".trend");
let mainPage = document.querySelector(".main");
let navMenu = document.querySelector("nav ul");
let hamburger = document.querySelector(".hamburger");

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

function Shops() {
    mainPage.style.display = "none";
    card.forEach(el => el.style.display = "none");
}

function Blogs() {
    // add your blogs section logic here
}

function About() {
    // add your about section logic here
}

function Contact() {
    // add your contact section logic here
}