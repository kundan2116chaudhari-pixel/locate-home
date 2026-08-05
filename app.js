/* ==========================================================================
   LOCATE HOMES — APPLICATION JAVASCRIPT
   Handles Lenis Smooth Scroll, GSAP Animations, Stat Counters, Video Rail, 
   Process Hover Crossfade & Parallax Effects.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP Plugins
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ------------------------------------------------------------------------
  // 1. Initialize Lenis Smooth Scroll
  // ------------------------------------------------------------------------
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', () => {
        ScrollTrigger.update();
      });

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  }

  // Recalculate ScrollTrigger measurements when images or window load
  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });

  // Listen to all image loads to prevent layout jumps / breaks
  document.querySelectorAll('img').forEach((img) => {
    if (img.complete) {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    } else {
      img.addEventListener('load', () => {
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      });
    }
  });

  // Smooth Anchor Navigation Handling with Lenis
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(targetEl, { offset: -70, duration: 1.0 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 2. Preloader Animation (0% -> 100% Counter & Hero Reveal)
  // ------------------------------------------------------------------------
  const preloader = document.getElementById('preloader');
  const preloaderNum = document.getElementById('preloader-num') || document.getElementById('loader-percent');

  let count = { val: 0 };

  if (preloader) {
    if (preloaderNum) {
      gsap.to(count, {
        val: 100,
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          const rounded = Math.floor(count.val);
          preloaderNum.textContent = rounded;
        },
        onComplete: () => {
          // Fade out preloader overlay
          preloader.classList.add('fade-out');

          // Trigger Hero entrance animation
          animateHeroEntrance();

          // Initialize ScrollTrigger reveals after preloader finishes
          initScrollReveals();

          // Recalculate layout metrics after preloader hides
          if (typeof ScrollTrigger !== 'undefined') {
            setTimeout(() => ScrollTrigger.refresh(), 400);
          }
        }
      });
    } else {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        animateHeroEntrance();
        initScrollReveals();
      }, 500);
    }
  } else {
    animateHeroEntrance();
    initScrollReveals();
  }

  // ------------------------------------------------------------------------
  // 3. Hero Entrance GSAP Animation
  // ------------------------------------------------------------------------
  function animateHeroEntrance() {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-top-controls', 
      { y: -30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo('#hero-headline', 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.1 }, 
      '-=0.7'
    )
    .fromTo('#hero-subcopy', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      '-=0.8'
    )
    .fromTo('#hero-cta', 
      { y: 20, opacity: 0, scale: 0.95 }, 
      { y: 0, opacity: 1, scale: 1, duration: 0.9 }, 
      '-=0.7'
    )
    .fromTo('.hero-scroll-indicator', 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.8 }, 
      '-=0.5'
    );
  }

  // ------------------------------------------------------------------------
  // 4. Header Scroll Shadow Transition
  // ------------------------------------------------------------------------
  const header = document.getElementById('main-header');
  const heroSection = document.getElementById('hero');

  if (header && heroSection && typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: heroSection,
      start: 'bottom 80px',
      onEnter: () => header.classList.add('is-scrolled'),
      onLeaveBack: () => header.classList.remove('is-scrolled'),
    });
  }

  // ------------------------------------------------------------------------
  // 5. Buy / Rent Hero Background Toggle
  // ------------------------------------------------------------------------
  const toggleBuyBtn = document.getElementById('toggle-buy');
  const toggleRentBtn = document.getElementById('toggle-rent');
  const toggleContainer = document.querySelector('.hero-toggle-container');
  const videoBuy = document.getElementById('hero-video-buy');
  const videoRent = document.getElementById('hero-video-rent');

  function switchHeroMode(mode) {
    if (mode === 'buy') {
      toggleBuyBtn.classList.add('active');
      toggleBuyBtn.setAttribute('aria-pressed', 'true');
      toggleRentBtn.classList.remove('active');
      toggleRentBtn.setAttribute('aria-pressed', 'false');
      toggleContainer.removeAttribute('data-state');

      videoRent.classList.remove('active');
      videoBuy.classList.add('active');
      videoBuy.play().catch(() => {});
    } else if (mode === 'rent') {
      toggleRentBtn.classList.add('active');
      toggleRentBtn.setAttribute('aria-pressed', 'true');
      toggleBuyBtn.classList.remove('active');
      toggleBuyBtn.setAttribute('aria-pressed', 'false');
      toggleContainer.setAttribute('data-state', 'rent');

      videoBuy.classList.remove('active');
      videoRent.classList.add('active');
      videoRent.play().catch(() => {});
    }
  }

  if (toggleBuyBtn && toggleRentBtn) {
    toggleBuyBtn.addEventListener('click', () => switchHeroMode('buy'));
    toggleRentBtn.addEventListener('click', () => switchHeroMode('rent'));
  }

  // ------------------------------------------------------------------------
  // 6. Mobile Overlay Menu Toggle
  // ------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileCloseBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('is-active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.mobile-nav-link', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.2 }
      );
    }
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ------------------------------------------------------------------------
  // 7. Global ScrollReveals (IntersectionObserver + GSAP) & Stat Counters
  // ------------------------------------------------------------------------
  function initScrollReveals() {
    // IntersectionObserver for [data-reveal] & [data-line-reveal] (The Curve Spec)
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('[data-reveal], .fade-up, .line-reveal-wrap').forEach(el => {
        revealObserver.observe(el);
      });
    } else {
      document.querySelectorAll('[data-reveal], .fade-up, .line-reveal-wrap').forEach(el => {
        el.classList.add('is-revealed');
      });
    }

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Staggered Fade-Up Elements
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => {
      gsap.fromTo(el,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // Stat Counters Count-Up Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((counter) => {
      const targetVal = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = targetVal % 1 !== 0;

      gsap.fromTo(counter, 
        { innerText: 0 },
        {
          innerText: targetVal,
          duration: 2.2,
          ease: 'power2.out',
          snap: { innerText: isDecimal ? 0.1 : 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          onUpdate: function() {
            if (isDecimal) {
              counter.innerText = parseFloat(counter.innerText).toFixed(1);
            } else {
              counter.innerText = Math.floor(counter.innerText);
            }
          }
        }
      );
    });

    // Contact Parallax Background Image
    const contactBg = document.querySelector('#contact-parallax-bg img');
    if (contactBg) {
      gsap.to(contactBg, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }

  // ------------------------------------------------------------------------
  // 8. Location Videos Rail (Arrow Navigation, Drag-to-Scroll & Progress Bar)
  // ------------------------------------------------------------------------
  const videoRail = document.getElementById('video-rail');
  const railProgressBar = document.getElementById('rail-progress-bar');
  const railPrevBtn = document.getElementById('rail-prev-btn');
  const railNextBtn = document.getElementById('rail-next-btn');

  if (videoRail) {
    let isMouseDown = false;
    let startX, scrollLeft;

    // Arrow Button Navigation
    if (railPrevBtn) {
      railPrevBtn.addEventListener('click', () => {
        videoRail.scrollBy({ left: -360, behavior: 'smooth' });
      });
    }

    if (railNextBtn) {
      railNextBtn.addEventListener('click', () => {
        videoRail.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }

    // Mouse Drag events for Desktop
    videoRail.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      videoRail.classList.add('is-dragging');
      startX = e.pageX - videoRail.offsetLeft;
      scrollLeft = videoRail.scrollLeft;
    });

    const stopDragging = () => {
      if (!isMouseDown) return;
      isMouseDown = false;
      videoRail.classList.remove('is-dragging');
    };

    videoRail.addEventListener('mouseleave', stopDragging);
    videoRail.addEventListener('mouseup', stopDragging);

    videoRail.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - videoRail.offsetLeft;
      const walk = (x - startX) * 1.8;
      videoRail.scrollLeft = scrollLeft - walk;
    });

    // Update Progress Bar on Scroll
    videoRail.addEventListener('scroll', () => {
      const maxScroll = videoRail.scrollWidth - videoRail.clientWidth;
      if (maxScroll > 0 && railProgressBar) {
        const percentage = (videoRail.scrollLeft / maxScroll) * 100;
        railProgressBar.style.width = Math.max(15, percentage) + '%';
      }
    });

    // Video Hover Autoplay in Rail
    const videoCards = document.querySelectorAll('.video-card-916');
    videoCards.forEach((card) => {
      const video = card.querySelector('.rail-video');
      if (video) {
        card.addEventListener('mouseenter', () => {
          video.play().catch(() => {});
        });
        card.addEventListener('mouseleave', () => {
          video.pause();
        });
      }
    });
  }

  // ------------------------------------------------------------------------
  // 9. Sunteck Gallery Rail & Controls
  // ------------------------------------------------------------------------
  const sunteckGalleryRail = document.getElementById('sunteck-gallery-rail');
  const sunteckGalleryProgress = document.getElementById('sunteck-gallery-progress');
  const sunteckPrevBtn = document.getElementById('sunteck-prev-btn');
  const sunteckNextBtn = document.getElementById('sunteck-next-btn');

  if (sunteckGalleryRail) {
    let isMouseDown = false;
    let startX, scrollLeft;

    if (sunteckPrevBtn) {
      sunteckPrevBtn.addEventListener('click', () => {
        sunteckGalleryRail.scrollBy({ left: -360, behavior: 'smooth' });
      });
    }

    if (sunteckNextBtn) {
      sunteckNextBtn.addEventListener('click', () => {
        sunteckGalleryRail.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }

    sunteckGalleryRail.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      sunteckGalleryRail.classList.add('is-dragging');
      startX = e.pageX - sunteckGalleryRail.offsetLeft;
      scrollLeft = sunteckGalleryRail.scrollLeft;
    });

    const stopDragging = () => {
      if (!isMouseDown) return;
      isMouseDown = false;
      sunteckGalleryRail.classList.remove('is-dragging');
    };

    sunteckGalleryRail.addEventListener('mouseleave', stopDragging);
    sunteckGalleryRail.addEventListener('mouseup', stopDragging);

    sunteckGalleryRail.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - sunteckGalleryRail.offsetLeft;
      const walk = (x - startX) * 1.8;
      sunteckGalleryRail.scrollLeft = scrollLeft - walk;
    });

    sunteckGalleryRail.addEventListener('scroll', () => {
      const maxScroll = sunteckGalleryRail.scrollWidth - sunteckGalleryRail.clientWidth;
      if (maxScroll > 0 && sunteckGalleryProgress) {
        const percentage = (sunteckGalleryRail.scrollLeft / maxScroll) * 100;
        sunteckGalleryProgress.style.width = Math.max(15, percentage) + '%';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 10. 360° Tour Iframe Embed & Fallback Detection
  // ------------------------------------------------------------------------
  const tourIframe = document.getElementById('fisheye-360-iframe');
  const tourFallbackCard = document.getElementById('tour-fallback-card');

  if (tourIframe && tourFallbackCard) {
    let iframeLoaded = false;

    tourIframe.addEventListener('load', () => {
      iframeLoaded = true;
    });

    // Check after 3 seconds if iframe failed or was blocked by X-Frame-Options
    setTimeout(() => {
      try {
        if (!iframeLoaded || !tourIframe.contentWindow || tourIframe.contentWindow.location.href === 'about:blank') {
          // Display fallback banner with direct launch button
          tourFallbackCard.style.display = 'block';
        }
      } catch (e) {
        // Cross-origin restriction triggered (expected if embedding allowed or blocked cross-domain)
        // If tour works inside iframe, keep iframe; if broken, fallback displays.
      }
    }, 3000);
  }

  // Sunteck Contact Parallax Background Image
  const sunteckContactBg = document.querySelector('#sunteck-contact-bg img');
  if (sunteckContactBg && typeof ScrollTrigger !== 'undefined') {
    gsap.to(sunteckContactBg, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: '#sunteck-enquiry',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // ------------------------------------------------------------------------
  // 9. Process Section Hover Background Crossfade (Gerax Signature)
  // ------------------------------------------------------------------------
  const processItems = document.querySelectorAll('.process-item');
  const processBgImgs = document.querySelectorAll('.process-bg-img');

  processItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const index = item.getAttribute('data-index');

      processBgImgs.forEach((bg) => {
        if (bg.getAttribute('data-index') === index) {
          bg.classList.add('active');
        } else {
          bg.classList.remove('active');
        }
      });
    });
  });
});
