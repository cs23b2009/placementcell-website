/**
 * IIITDM Placement Cell - Continuous Auto-Sliding Carousel & Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initLightbox();
});

/* --------------------------------------------------------------------------
   Continuous Hero Image Slider (Horizontal Transform)
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const track = document.getElementById('slider-track');
  const sliderContainer = document.querySelector('.showcase-slider-container');
  if (!track || !sliderContainer) return;

  const slides = track.querySelectorAll('.slide-item');
  const dots = sliderContainer.querySelectorAll('.slider-dot');
  const prevBtn = sliderContainer.querySelector('.slider-nav-prev');
  const nextBtn = sliderContainer.querySelector('.slider-nav-next');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;
  const slideInterval = 3000; // Auto-slides every 3 seconds

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function restartTimer() {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(nextSlide, slideInterval);
  }

  // Next / Prev button navigation
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      restartTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      restartTimer();
    });
  }

  // Dots click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      restartTimer();
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const isModalOpen = document.querySelector('.photo-lightbox-modal.active');
    if (!isModalOpen) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        restartTimer();
      }
      if (e.key === 'ArrowRight') {
        nextSlide();
        restartTimer();
      }
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 40) {
      nextSlide();
      restartTimer();
    } else if (touchEndX > touchStartX + 40) {
      prevSlide();
      restartTimer();
    }
  }, { passive: true });

  // Start continuous automatic sliding immediately
  restartTimer();
}

/* --------------------------------------------------------------------------
   Lightbox Modal for Fullscreen Photo Viewing
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('photo-lightbox');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  const clickableImages = document.querySelectorAll('.clickable-photo');

  clickableImages.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt') || 'PRAGNA 2026 Event Photo';
      modalImg.src = src;
      if (modalCaption) modalCaption.textContent = alt;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content-wrapper')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
