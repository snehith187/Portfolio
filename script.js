// ===============================
// Smooth Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".glass-card, .skill-pill, .project-card, .profile-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {

    element.classList.add("hidden");
    observer.observe(element);

});


// ===============================
// Navbar Background Effect
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(11,17,32,0.97)";

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.25)";

    } else {

        header.style.background =
            "rgba(11,17,32,0.92)";

        header.style.boxShadow = "none";

    }

});


// ===============================
// Project Card Hover Effect
// ===============================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


// ===============================
// Console Message
// ===============================

console.log(
    "Kamani Snehith Portfolio Loaded Successfully 🚀"
);
