window.addEventListener("load",() => {
  let swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { el: ".swiper-pagination", clickable: true }
  });
})



  document.getElementById("mobileMenuBtn").addEventListener("click", () => {
    document.getElementById("mobileMenu").style.display="flex";
  });
  document.getElementById("closeMenu").addEventListener("click" , () => {
    document.getElementById("mobileMenu").style.display="none";
  });
