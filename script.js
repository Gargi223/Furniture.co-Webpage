
    function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('show');
    }



  document.addEventListener("DOMContentLoaded", function() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const productCards = document.querySelectorAll(".product-card");

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

     
      const category = button.getAttribute("data-category");

      
      productCards.forEach(card => {
        if (category === "deal" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});


let currentIndex = 0;

function moveToNextSlide() {
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  currentIndex = (currentIndex + 1) % slides.length;
  const offset = -currentIndex * 100;
  carouselTrack.style.transform = `translateX(${offset}%)`;
}

setInterval(moveToNextSlide, 4000); 
