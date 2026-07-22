/* ==========================================
AINEX TAXI
script.js
========================================== */

// ==========================
// Mobile Menu
// ==========================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  
  if (nav.style.display === "block") {
    
    nav.style.display = "none";
    
  } else {
    
    nav.style.display = "block";
    
  }
  
});

// ==========================
// Close Menu After Click
// ==========================

document.querySelectorAll("nav a").forEach(link => {
  
  link.addEventListener("click", () => {
    
    if (window.innerWidth < 768) {
      
      nav.style.display = "none";
      
    }
    
  });
  
});

// ==========================
// Booking Form
// ==========================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  
  bookingForm.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    alert("✅ Booking Request Submitted Successfully!");
    
    bookingForm.reset();
    
  });
  
}

// ==========================
// Contact Form
// ==========================

const contactForm = document.querySelector(".contact form");

if (contactForm) {
  
  contactForm.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    alert("📩 Message Sent Successfully!");
    
    contactForm.reset();
    
  });
  
}

// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 400) {
    
    topBtn.style.display = "block";
    
  } else {
    
    topBtn.style.display = "none";
    
  }
  
});

topBtn.addEventListener("click", () => {
  
  window.scrollTo({
    
    top: 0,
    
    behavior: "smooth"
    
  });
  
});

// ==========================
// Smooth Button
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  anchor.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      
      target.scrollIntoView({
        
        behavior: "smooth"
        
      });
      
    }
    
  });
  
});

// ==========================
// Vehicle Button
// ==========================

document.querySelectorAll(".card button").forEach(button => {
  
  button.addEventListener("click", () => {
    
    document.querySelector("#booking").scrollIntoView({
      
      behavior: "smooth"
      
    });
    
  });
  
});

// ==========================
// WhatsApp
// ==========================

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {
  
  whatsapp.addEventListener("click", (e) => {
    
    e.preventDefault();
    
    const message = encodeURIComponent("Hello, I want to book a taxi.");
    
    window.open(
      
      "https://wa.me/919236414171?text=" + message,
      
      "_blank"
      
    );
    
  });
  
}

// ==========================
// Reveal Animation
// ==========================

const reveals = document.querySelectorAll(".card,.service,.about-image,.booking,.contact");

window.addEventListener("scroll", () => {
  
  reveals.forEach(item => {
    
    const top = item.getBoundingClientRect().top;
    
    const visible = window.innerHeight - 100;
    
    if (top < visible) {
      
      item.style.opacity = "1";
      
      item.style.transform = "translateY(0)";
      
    }
    
  });
  
});

reveals.forEach(item => {
  
  item.style.opacity = "0";
  
  item.style.transform = "translateY(60px)";
  
  item.style.transition = "all .8s ease";
  
});

// ==========================
// Current Year Footer
// ==========================

const footer = document.querySelector("footer p");

if (footer) {
  
  footer.innerHTML = "© " + new Date().getFullYear() + " AINEX TAXI. All Rights Reserved.";
  
}

// ==========================
// Loading Animation
// ==========================

window.addEventListener("load", () => {
  
  document.body.style.opacity = "1";
  
});

document.body.style.opacity = "0";

document.body.style.transition = ".4s";

// ==========================
// End
// ==========================
