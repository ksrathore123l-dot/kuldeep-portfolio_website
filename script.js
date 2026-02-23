/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
// Note: You would usually include ScrollReveal library here, 
// but we used CSS animations for the hero for now. 
// We can add ScrollReveal later for other sections.

/* Typed JS */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Web Developer', 'Web Designer',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* Scroll Reveal Animation (Custom) */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: Remove this else block if you want animations to happen only once
            // reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger once on load
reveal();

/* Read More Button Logic */
const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.querySelector('.about-more-text');

readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});

/* Force scroll to top on refresh */
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onload = function () {
    window.scrollTo(0, 0);
};

/* Contact Form Handling */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    const body = `Name: ${fullName}%0D%0AEmail: ${email}%0D%0AMobile: ${mobile}%0D%0AMessage: ${message}`;

    // Replace 'your-email@example.com' with your actual email address
    const mailtoLink = `mailto:kuldeepsingh@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
});
