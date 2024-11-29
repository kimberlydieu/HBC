// JavaScript for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    document.getElementById("contact-form").reset();
});

const hamburger = document.getElementById('hamburger-icon');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    console.log('Hamburger clicked!');
});
