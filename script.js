

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")



hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});
 
 
 
 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	 hamburger.classList.remove("active");
	 navMenu.classList.remove("active");
 }));




ScrollReveal({distance: '80px',
    duration: 2000,
    delay:200,
 });


 ScrollReveal().reveal('.home-content, heading, ', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


 const typed = new Typed('.multiple-text',{
    strings: ['Full Stack Developer', 'Web Designer'],
    typeSpeed : 70,
    backSpeed: 70,
    backDelay : 1000,
    loop: true,
 });