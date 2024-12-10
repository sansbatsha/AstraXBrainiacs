let currentIndex = 0;
const items = document.querySelectorAll(".carousel_item");
const dots = document.querySelectorAll(".carousel_dot");
const totalItems = items.length;

// Initialize the carousel
const initCarousel = () => {
   // Mark the first dot as active
   dots[currentIndex].classList.add("active");

   // Auto-slide every 2 seconds
   setInterval(() => nextSlide(), 2000);

   // Add event listeners for navigation
   document.querySelector(".carousel_button__next").addEventListener("click", nextSlide);
   document.querySelector(".carousel_button__prev").addEventListener("click", prevSlide);

   // Add event listeners for dots
   dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
   });
};

// Update carousel position
const updateCarousel = () => {
   const inner = document.querySelector(".carousel_inner");
   inner.style.transform = `translateX(-${currentIndex * 100}%)`;

   dots.forEach(dot => dot.classList.remove("active"));
   dots[currentIndex].classList.add("active");
};

// Go to next slide
const nextSlide = () => {
   currentIndex = (currentIndex + 1) % totalItems;
   updateCarousel();
};

// Go to previous slide
const prevSlide = () => {
   currentIndex = (currentIndex - 1 + totalItems) % totalItems;
   updateCarousel();
};

// Go to a specific slide
const goToSlide = (index) => {
   currentIndex = index;
   updateCarousel();
};

// Initialize the carousel on page load
window.addEventListener("load", initCarousel);
