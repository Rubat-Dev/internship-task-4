document.addEventListener("DOMContentLoaded", () => {
  // Swiper Init
  window.addEventListener("load", () => {
    let swiper = new Swiper(".testimonialSwiper", {
      loop: true,
      autoplay: { delay: 2000 },
      pagination: { el: ".swiper-pagination", clickable: true }
    });
  });

  // navbar-flex-and-block
  document.getElementById("mobileMenuBtn").addEventListener("click", () => {
    document.getElementById("mobileMenu").style.display="flex";
  });
  document.getElementById("closeMenu").addEventListener("click" , () => {
    document.getElementById("mobileMenu").style.display="none";
  });

  // Contact Form Validation
  const form = document.querySelector('#contactForm');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!emailPattern.test(email)) {
    emailInput.setCustomValidity("❌ Please enter a valid email address");
    emailInput.reportValidity();
    return;
  } else {
    emailInput.setCustomValidity(""); // reset error
  }

  alert("✅ Form submitted successfully!");
  form.submit();
});

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity(""); 
});

});





