/* =========================================================
   ADVANCED PORTFOLIO
   script.js
   ========================================================= */


/* =========================================================
   1. SELECT DOM ELEMENTS
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const themeToggle = document.getElementById("themeToggle");


/* =========================================================
   2. MOBILE NAVIGATION
   ========================================================= */

function toggleMobileMenu() {

    if (!mainNav) {
        return;
    }

    mainNav.classList.toggle("active");

    const isOpen = mainNav.classList.contains("active");

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* =========================================================
   3. CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

function closeMobileMenu() {

    if (!mainNav) {
        return;
    }

    mainNav.classList.remove("active");

    if (menuToggle) {

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }
}


const navigationLinks =
    document.querySelectorAll(".header__link");


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* =========================================================
   4. DARK / LIGHT MODE
   ========================================================= */

function enableDarkMode() {

    document.body.classList.add("dark-theme");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );
    }
}


function enableLightMode() {

    document.body.classList.remove("dark-theme");

    if (themeToggle) {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }
}


function toggleTheme() {

    const isDark =
        document.body.classList.contains("dark-theme");

    if (isDark) {

        enableLightMode();

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    } else {

        enableDarkMode();

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

    }
}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


/* =========================================================
   5. LOAD SAVED THEME
   ========================================================= */

function loadSavedTheme() {

    const savedTheme =
        localStorage.getItem("portfolioTheme");

    if (savedTheme === "dark") {

        enableDarkMode();

    } else {

        enableLightMode();

    }
}


loadSavedTheme();


/* =========================================================
   6. ACTIVE NAVIGATION LINK
   ========================================================= */

function setActiveNavigation() {

    const currentPage =
        window.location.pathname.split("/").pop()
        || "index.html";

    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        link.classList.remove(
            "header__link--active"
        );

        if (linkPage === currentPage) {

            link.classList.add(
                "header__link--active"
            );

        }

    });

}


setActiveNavigation();


/* =========================================================
   7. SCROLL REVEAL ANIMATION
   ========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .section__header"
    );


function revealOnScroll() {

    animatedElements.forEach(function (element) {

        const elementPosition =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementPosition < windowHeight - 80) {

            element.classList.add(
                "is-visible"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* =========================================================
   8. DYNAMIC CURRENT YEAR
   ========================================================= */

function updateCopyrightYear() {

    const copyright =
        document.querySelector(
            ".footer__copyright"
        );

    if (!copyright) {
        return;
    }

    const currentYear =
        new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} Shristy Portfolio. All Rights Reserved.`;

}


updateCopyrightYear();


/* =========================================================
   9. SMOOTH SCROLLING
   ========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================================
   10. WINDOW RESIZE HANDLER
   ========================================================= */

function handleResize() {

    if (window.innerWidth >= 900) {

        if (mainNav) {
            mainNav.classList.remove("active");
        }

        if (menuToggle) {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    }

}


window.addEventListener(
    "resize",
    handleResize
);


/* =========================================================
   11. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Advanced Portfolio loaded successfully!"
);