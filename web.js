// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after tapping a link (mobile)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

// Scroll-reveal animation for sections
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
} else {
    revealEls.forEach(el => el.classList.add("is-visible"));
}

// Simple cart counter
const cartCount = document.querySelector(".cart-count");
let count = 0;
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        count += 1;
        if (cartCount) cartCount.textContent = count;
        button.textContent = "Added";
        setTimeout(() => { button.textContent = "Add to cart"; }, 1200);
    });
});