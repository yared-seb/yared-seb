document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle Logic ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobileMenuButton.classList.remove("active");
    });
  });

  // --- Hero Image Slider Logic ---
  const heroImages = document.querySelectorAll(".hero-img");
  let heroIndex = 0;

  function showNextHeroImage() {
    // Hide all images
    heroImages.forEach((img) => img.classList.remove("active"));
    // Increment index, looping back to 0 at the end
    heroIndex = (heroIndex + 1) % heroImages.length;
    // Show the new image
    heroImages[heroIndex].classList.add("active");
  }

  // Start the automatic slider
  setInterval(showNextHeroImage, 5000);

  // --- Student Life Photo Carousel Logic ---
  const carousel = document.getElementById("photo-carousel");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const carouselImages = document.querySelectorAll(".carousel-img");
  let currentIndex = 0;

  function updateCarousel() {
    const imageWidth = carouselImages[0].clientWidth;
    const offset = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Event listener for the 'next' button
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
  });

  // Event listener for the 'previous' button
  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
  });

  // Handle window resize to prevent layout issues
  window.addEventListener("resize", updateCarousel);
});
