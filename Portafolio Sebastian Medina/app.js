// Soft GSAP-powered animations and subtle interactions
document.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap) {
    console.warn('GSAP is not loaded. Animations are disabled.');
    return;
  }

  const animatedElements = document.querySelectorAll('[data-animate]');

  const animationPresets = {
    'fade-up': { y: 32, opacity: 0 },
    'fade-left': { x: 32, opacity: 0 },
    'fade-right': { x: -32, opacity: 0 },
  };

  const reveal = (el) => {
    const preset = animationPresets[el.dataset.animate] || { y: 24, opacity: 0 };
    gsap.fromTo(
      el,
      { ...preset },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      }
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    observer.observe(el);
  });

  // Hero micro-interaction: tilt the highlighted card
  const heroCard = document.querySelector('#hero [data-animate="fade-left"]');
  if (heroCard) {
    const tilt = (event) => {
      const rect = heroCard.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
      gsap.to(heroCard, {
        rotateX: -y,
        rotateY: x,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    heroCard.addEventListener('pointermove', tilt);
    heroCard.addEventListener('pointerleave', () => {
      gsap.to(heroCard, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power2.out' });
    });
  }
});

