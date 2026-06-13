// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".glass-card, .project-card, .skill-pill, .timeline-item"
);

revealElements.forEach((el) => {
    el.classList.add("hidden");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

revealElements.forEach((el) => {
    observer.observe(el);
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(7,11,20,0.92)";
        header.style.borderBottom =
            "1px solid rgba(255,255,255,0.08)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "rgba(7,11,20,0.60)";
        header.style.borderBottom =
            "1px solid rgba(255,255,255,0.05)";
    }

});


// =========================
// ACTIVE MENU HIGHLIGHT
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// HOVER EFFECT ON PROJECTS
// =========================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(96,165,250,0.12),
            rgba(255,255,255,0.05)
        )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,0.05)";

    });

});


// =========================
// SMOOTH BUTTON ANIMATION
// =========================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .resume-btn"
);

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


// =========================
// PROFILE CARD FLOAT EFFECT
// =========================

const profileCard = document.querySelector(".profile-card");

if (profileCard) {

    document.addEventListener("mousemove", (e) => {

        const x =
            (window.innerWidth / 2 - e.pageX) / 50;

        const y =
            (window.innerHeight / 2 - e.pageY) / 50;

        profileCard.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

}


// =========================
// CONSOLE MESSAGE
// =========================

// console.log(
//     "Portfolio Developed by Kamani Snehith 🚀"
// );
