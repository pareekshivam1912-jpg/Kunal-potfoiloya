/**
 * AARAV MEHTA — LUXURY INTERIOR DESIGNER & CREATIVE DIRECTOR
 * Interactive Vanilla JavaScript Modules
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Project Data Store (All 6 Signature Commissions)
     ========================================================================== */
  const projectsData = {
    aravali: {
      title: 'The Aravali Residence',
      location: 'Jaipur, Rajasthan',
      year: '2024',
      area: '12,000 sq.ft',
      category: 'Luxury Residential Estate [Interiors & Architecture]',
      heroImg: 'assets/images/aravali_exterior.jpg',
      gallery: [
        'assets/images/aravali_interior.jpg',
        'assets/images/courtyard_house_exterior.jpg'
      ],
      clientBrief: 'The client, a prominent industrialist family, sought a timeless ancestral estate that embraced panoramic views of the Aravali range while maintaining complete family privacy and generous spaces for multi-generational gatherings.',
      concept: 'A series of monolithic sandstone pavilions revolving around a serene central water courtyard, creating microclimatic cooling and dramatic framing of the Rajasthani desert sun.',
      materials: ['Hand-Chiseled Dholpur Sandstone', 'Honed Roman Travertine', 'Smoked European Oak', 'Aged Brushed Brass', 'Raw Linen Bouclé'],
      challenges: 'Navigating intense summer heat gains without sacrificing full-height glazed mountain views, and integrating modern acoustic separation across grand double-height volumes.',
      solution: 'Custom motorized perforated bronze jali screens that filter harsh solar rays, paired with deeply recessed overhangs and subterranean thermal buffer zones.',
      result: 'An architectural tour de force that seamlessly weaves royal Rajasthani grandeur with the quiet elegance of contemporary European minimalism.'
    },
    'casa-verde': {
      title: 'Casa Verde',
      location: 'Worli, Mumbai',
      year: '2023',
      area: '6,500 sq.ft',
      category: 'Contemporary Coastal Residence [Interiors & Architecture]',
      heroImg: 'assets/images/casa_verde_exterior.jpg',
      gallery: [
        'assets/images/aravali_interior.jpg',
        'assets/images/malabar_estate_exterior.jpg'
      ],
      clientBrief: 'A young tech founder desired an urban sanctuary that felt entirely detached from Mumbai’s frenetic skyline, focusing on biophilic wellness and organic tactile textures.',
      concept: 'An internal oasis anchored by an indoor botanical atrium, fluted lime-plaster surfaces, and undulating low-slung Italian seating that mimics natural coastline topography.',
      materials: ['Verde Alpi Marble', 'Fluted Lime Plaster', 'Bleached White Ash', 'Tuscan Leather', 'Natural Clay Ceramics'],
      challenges: 'Maximizing natural cross-ventilation while providing high-grade acoustic isolation from neighboring city highways.',
      solution: 'Custom triple-glazed acoustic curtain walls combined with automated internal humidity regulating green walls and indirect cove lighting.',
      result: 'A deeply restorative living experience centered on botanical light, stone, and indoor–outdoor flow.'
    },
    'noir-villa': {
      title: 'The Noir Villa',
      location: 'Golf Links, Delhi NCR',
      year: '2024',
      area: '9,800 sq.ft',
      category: 'Modern Luxury Villa [Interiors & Architecture]',
      heroImg: 'assets/images/noir_villa_exterior.jpg',
      gallery: [
        'assets/images/noir_villa_interior.jpg',
        'assets/images/azure_penthouse_exterior.jpg'
      ],
      clientBrief: 'An avid contemporary art collector requested an enigmatic, dark-toned private villa tailored for showcasing museum-scale sculptures and hosting private wine tastings.',
      concept: 'Shadow play as high architecture. Deep charcoal tones, burnished metals, and backlit Patagonia quartzite slabs acting as illuminated artworks.',
      materials: ['Patagonia Quartzite', 'Smoked Black Walnut', 'Burnished Gunmetal', 'Charcoal Velvet', 'Matte Black Granite'],
      challenges: 'Preventing the dark palette from feeling cold or enclosed, ensuring spaces felt inviting and emotionally warm during daytime.',
      solution: 'Integrating high-CRI 2700K museum-grade spotlights with concealed uplights that brush warmth across rich timber textures.',
      result: 'A moody, dramatic sanctuary composed for evening light, smoked oak, and quiet dark-luxury restraint.'
    },
    'courtyard-house': {
      title: 'The Courtyard House',
      location: 'Fateh Sagar, Udaipur',
      year: '2023',
      area: '15,500 sq.ft',
      category: 'Traditional × Contemporary Villa [Interiors & Architecture]',
      heroImg: 'assets/images/courtyard_house_exterior.jpg',
      gallery: [
        'assets/images/courtyard_house_interior.jpg',
        'assets/images/aravali_interior.jpg'
      ],
      clientBrief: 'Revitalize a historic family lakefront property with a design language that honors Mewari palace architecture while incorporating ultra-modern amenities.',
      concept: 'A fluid sequence of three water courtyards, marble colonnades, and cantilevered glass reading terraces that float over reflecting pools.',
      materials: ['White Makrana Marble', 'Local Green Udaipur Stone', 'Hand-Forged Brass', 'Custom Hand-Knotted Silk Rugs', 'Teak Wood Joinery'],
      challenges: 'Preserving delicate heritage stone elements while completely overhauling structural foundations and HVAC systems.',
      solution: 'Partnering with third-generation Udaipur master stonemasons to hand-chisel matching ornamental arches while concealing climate control behind stone cornices.',
      result: 'A palatial residence that bridges three centuries of Rajasthani architectural heritage with world-class contemporary living.'
    },
    'azure-penthouse': {
      title: 'Azure Penthouse',
      location: 'South Mumbai',
      year: '2025',
      area: '8,200 sq.ft',
      category: 'Ultra-Luxury High-Rise Penthouse [Interiors & Architecture]',
      heroImg: 'assets/images/azure_penthouse_exterior.jpg',
      gallery: [
        'assets/images/noir_villa_interior.jpg',
        'assets/images/casa_verde_exterior.jpg'
      ],
      clientBrief: 'A prominent venture capitalist wanted a sky-high penthouse providing uninterrupted 270-degree horizons of the Arabian Sea, featuring dedicated private gallery lounges.',
      concept: 'A celebration of infinite horizon lines with seamless micro-cement floors, floor-to-ceiling frameless glass, and floating champagne gold brass shelving.',
      materials: ['Statuary Calacatta Marble', 'Seamless Micro-Cement', 'Satin Champagne Brass', 'Camel Hair Upholstery', 'Curved Fluted Glass'],
      challenges: 'High wind loads and vibration at the 52nd floor requiring specialized lightweight custom furniture anchoring and acoustic damping.',
      solution: 'Custom lightweight honeycombed marble slabs for vertical wall claddings and bespoke engineered joinery built directly into structural cores.',
      result: 'The epitome of coastal sky luxury, celebrating the shifting hues of the Mumbai sunset from every vantage point.'
    },
    'malabar-estate': {
      title: 'The Malabar Estate',
      location: 'Alibaug Coastal Belt, Maharashtra',
      year: '2024',
      area: '14,500 sq.ft',
      category: 'Tropical Architectural Estate [Interiors & Architecture]',
      heroImg: 'assets/images/malabar_estate_exterior.jpg',
      gallery: [
        'assets/images/courtyard_house_interior.jpg',
        'assets/images/aravali_exterior.jpg'
      ],
      clientBrief: 'A multi-acre private weekend sanctuary for an industrialist family, requiring expansive tropical veranda architecture integrated with shaded courtyard water features and artisanal timber craftsmanship.',
      concept: 'Pavilion-style Indian vernacular architecture constructed from locally quarried laterite stone, high vaulted teakwood ceilings, and continuous indoor-outdoor garden connectivity.',
      materials: ['Hand-Chiseled Laterite Stone', 'Reclaimed Burma Teak', 'Unlacquered Aged Brass', 'Hand-Loomed Silk & Linen', 'River-Washed Black Granite'],
      challenges: 'Withstanding harsh coastal monsoon humidity while maintaining open-air veranda living with seamless timber millwork.',
      solution: 'Deep 4-meter wraparound roof cantilevers, specialized marine-grade natural oil finishes on solid teak, and natural convection cooling breezeways.',
      result: 'A magnificent coastal Indian villa estate celebrated for its tranquil integration of architecture, tropical flora, and bespoke handcrafted interiors.'
    }
  };

  /* ==========================================================================
     2. Editorial Journal Articles Data
     ========================================================================== */
  const journalArticles = {
    '1': {
      title: 'Why Natural Materials Are Making a Comeback',
      category: 'Materiality',
      date: 'February 2026 • 5 Min Read',
      heroImg: 'assets/images/aravali_exterior.jpg',
      content: `
        <p class="modal-lead">In an age dominated by synthetic perfection and digital ubiquity, the soul craves what is authentic, tactile, and grounded.</p>
        <p>For decades, interior trends drifted toward flawless composite surfaces, synthetic veneers, and high-gloss laminates. Yet something profound was lost in that clinical pursuit: the patina of time. A natural material is not static; it lives alongside us. It absorbs sunlight, records gentle touches, and matures gracefully over generations.</p>
        <p>When you place your palm against a slab of unpolished Roman travertine or run your fingers along hand-rubbed Indian oak, you register a connection that manufactured materials cannot simulate. The microscopic imperfections, mineral veining, and organic textures evoke an innate psychological calming effect known as biophilic grounding.</p>
        <p>In our studio’s recent residential projects in Jaipur and Mumbai, we have championed locally quarried Dholpur sandstone, unlacquered brass, and raw bouclé linens. These materials do not wear out; they wear in. Choosing natural materials is not merely an aesthetic preference; it is a conscious commitment to permanence, heritage, and well-being.</p>
      `
    },
    '2': {
      title: 'The Art of Designing With Light',
      category: 'Architecture',
      date: 'January 2026 • 4 Min Read',
      heroImg: 'assets/images/casa_verde_exterior.jpg',
      content: `
        <p class="modal-lead">Light is not merely an accessory to illuminate darkness; it is the fundamental sculptor of spatial emotion.</p>
        <p>Too often in contemporary interior design, lighting is treated as an afterthought—a grid of harsh downlights punched into a false ceiling. This approach flattens architecture, washes out materials, and induces cognitive fatigue.</p>
        <p>At Aarav Mehta Studio, we treat natural and artificial illumination with equal architectural reverence. During daylight hours, we sculpt deep window reveals, jali screens, and skylights to choreograph shifting sunbeams. In the evening, the luminaires themselves should remain virtually invisible actors.</p>
        <p>We work in three distinct layers: architectural ambient glow (concealed cove lighting beneath floating joinery), task accentuation (focused 2700K narrow beams highlighting artworks and tactile stone veins), and decorative mood lamps that provide warm human-level focal points. When done with mastery, a home gently transitions its occupants into evening tranquility.</p>
      `
    },
    '3': {
      title: 'Modern Indian Interiors: Reconciling Heritage & Minimal Warmth',
      category: 'Design Culture',
      date: 'December 2025 • 6 Min Read',
      heroImg: 'assets/images/courtyard_house_exterior.jpg',
      content: `
        <p class="modal-lead">Moving beyond cliché royal ornament to discover a nuanced, quiet language of modern Indian luxury.</p>
        <p>India’s architectural legacy is one of the richest on earth—yet modern Indian homes often find themselves torn between two extremes: overly ornate imitation palace aesthetics or sterile, placeless Western minimalism.</p>
        <p>Our philosophy proposes a third, deeply sophisticated way: the synthesis of ancestral spatial archetypes with clean modern restraint. Think of the traditional central 'Aangan' (courtyard) reimagined with razor-thin glass walls and serene travertine water tables; or the intricate 'Jali' geometric lattice executed in razor-cut satin brass.</p>
        <p>By empowering master generational artisans—woodcarvers from Jodhpur, stone sculptors from Udaipur, and silk weavers from Varanasi—to work with contemporary silhouettes, we create residences that could only belong in India, yet stand proudly among the finest homes in Milan, Tokyo, or New York.</p>
      `
    },
    '4': {
      title: '5 Principles of Timeless Design',
      category: 'Philosophy',
      date: 'November 2025 • 5 Min Read',
      heroImg: 'assets/images/azure_penthouse_exterior.jpg',
      content: `
        <p class="modal-lead">How to create interior spaces that resist the fleeting expiration dates of digital trends.</p>
        <p>In the age of algorithm-driven Pinterest and Instagram aesthetics, design cycles that once lasted decades now expire in eighteen months. How does an interior architect design a residence that will feel as breathtaking in 2045 as it does today?</p>
        <p><strong>1. Architectural Proportion Over Surface Dressing:</strong> If the spatial volume, ceiling height, and daylight angles are flawed, no amount of expensive wallpaper can rescue the room.</p>
        <p><strong>2. Honesty in Materiality:</strong> Avoid imitation finishes. Genuine stone, solid timber, and real brass carry an intrinsic authenticity that never goes out of fashion.</p>
        <p><strong>3. Generous Negative Space:</strong> Avoid visual clutter. Give masterpiece furnishings room to breathe and command attention.</p>
        <p><strong>4. Ergonomic Comfort:</strong> A chair that looks stunning in a photograph but hurts your spine will inevitably be replaced. True luxury is effortless comfort.</p>
        <p><strong>5. Personal Narrative:</strong> A home should showcase the client’s curated collections, family memories, and travels, not a designer’s ego.</p>
      `
    }
  };

  /* ==========================================================================
     3. Custom Circle Cursor Implementation (Desktop Only - No Mouse Pointer)
     ========================================================================== */
  const cursorCircle = document.getElementById('cursorCircle');

  if (cursorCircle && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let circleX = -100;
    let circleY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        circleX = mouseX;
        circleY = mouseY;
        isVisible = true;
        cursorCircle.style.opacity = '1';
      }
    });

    document.addEventListener('mouseleave', () => {
      cursorCircle.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursorCircle.style.opacity = '1';
    });

    const renderCursor = () => {
      if (isVisible) {
        circleX += (mouseX - circleX) * 0.35;
        circleY += (mouseY - circleY) * 0.35;
        cursorCircle.style.transform = `translate(${circleX}px, ${circleY}px)`;
      }
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Magnify on interactive hoverables
    const hoverTargets = document.querySelectorAll('a, button, input, select, textarea, .project-card, .studio-photo-card, .service-editorial-card, .pillar-card, .press-item, .filter-btn, .before-after-slider, .stat-card');
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      target.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ==========================================================================
     4. Sticky Header & Active Link Highlight on Scroll
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Compact header style
    if (scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Active navigation item tracking
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     5. Mobile Navigation Drawer
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });


  /* ==========================================================================
     7. Project Category Filtering
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategories = (card.getAttribute('data-category') || '')
          .trim()
          .split(/\s+/);
        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ==========================================================================
     8. Fullscreen Project Detail Modal
     ========================================================================== */
  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  const openProjectModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    const materialsHTML = data.materials
      .map((mat) => `<span class="material-chip">${mat}</span>`)
      .join('');

    modalContent.innerHTML = `
      <div class="modal-project-hero">
        <span class="modal-project-badge">${data.category}</span>
        <h2 class="modal-project-title" id="modalProjectTitle">${data.title}</h2>
      </div>

      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <strong>Location</strong>
          <span>${data.location}</span>
        </div>
        <div class="modal-meta-item">
          <strong>Completion Year</strong>
          <span>${data.year}</span>
        </div>
        <div class="modal-meta-item">
          <strong>Scale / Area</strong>
          <span>${data.area}</span>
        </div>
        <div class="modal-meta-item">
          <strong>Lead Architect</strong>
          <span>Aarav Mehta</span>
        </div>
      </div>

      <div class="modal-gallery-strip">
        <img src="${data.heroImg}" alt="${data.title} Primary View" class="modal-gallery-img">
        <div class="modal-gallery-sub">
          <img src="${data.gallery[0]}" alt="${data.title} Detail One" class="modal-gallery-img">
          <img src="${data.gallery[1]}" alt="${data.title} Detail Two" class="modal-gallery-img">
        </div>
      </div>

      <div class="modal-narrative-grid">
        <div>
          <h3 class="modal-block-title">✦ Client Brief</h3>
          <p class="modal-block-text">${data.clientBrief}</p>
        </div>
        <div>
          <h3 class="modal-block-title">✦ Architectural Concept</h3>
          <p class="modal-block-text">${data.concept}</p>
        </div>
      </div>

      <div class="modal-narrative-grid">
        <div>
          <h3 class="modal-block-title">✦ Challenges &amp; Nuance</h3>
          <p class="modal-block-text">${data.challenges}</p>
        </div>
        <div>
          <h3 class="modal-block-title">✦ Design Solution</h3>
          <p class="modal-block-text">${data.solution}</p>
        </div>
      </div>

      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--color-border-dark);">
        <h3 class="modal-block-title">✦ Material Palette</h3>
        <div class="modal-materials-chips">${materialsHTML}</div>
      </div>

      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border-dark);">
        <h3 class="modal-block-title">✦ Final Outcome</h3>
        <p class="modal-block-text">${data.result}</p>
      </div>

      <div style="margin-top: 3rem; text-align: center;">
        <a href="#contact" class="btn btn--gold modal-cta" id="modalCommissionBtn">
          <span>COMMISSION A SIMILAR SPACE</span>
          <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `;

    // Modal Commission CTA event
    const modalCommissionBtn = document.getElementById('modalCommissionBtn');
    if (modalCommissionBtn) {
      modalCommissionBtn.addEventListener('click', () => {
        closeProjectModal();
      });
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Bind all project view triggers
  document.querySelectorAll('.view-project-btn, .project-img-wrapper').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.project-card');
      const projectId = card ? card.getAttribute('data-project-id') : trigger.getAttribute('data-project');
      if (projectId) openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* ==========================================================================
     9. Interactive Draggable Before / After Comparison Slider
     ========================================================================== */
  const baSlider = document.getElementById('baSlider');
  const baBeforeWrapper = document.getElementById('baBeforeWrapper');
  const baBeforeImg = document.getElementById('baBeforeImg');
  const baHandle = document.getElementById('baHandle');

  if (baSlider && baBeforeWrapper && baHandle && baBeforeImg) {
    let isDragging = false;

    // Sync image width for precise 1:1 overlap
    const syncImageWidth = () => {
      const sliderWidth = baSlider.getBoundingClientRect().width;
      baBeforeImg.style.width = `${sliderWidth}px`;
    };

    window.addEventListener('resize', syncImageWidth);
    syncImageWidth();

    const setSliderPosition = (percentage) => {
      const clamped = Math.max(0, Math.min(100, percentage));
      baBeforeWrapper.style.width = `${clamped}%`;
      baHandle.style.left = `${clamped}%`;
      baSlider.setAttribute('aria-valuenow', Math.round(clamped));
    };

    const handlePointerMove = (clientX) => {
      const rect = baSlider.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      setSliderPosition(percentage);
    };

    // Mouse Events
    baSlider.addEventListener('mousedown', (e) => {
      isDragging = true;
      handlePointerMove(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      handlePointerMove(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Events for Mobile / Tablet
    baSlider.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Keyboard Accessibility
    baSlider.addEventListener('keydown', (e) => {
      const currentVal = parseFloat(baSlider.getAttribute('aria-valuenow') || 50);
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSliderPosition(currentVal - 5);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSliderPosition(currentVal + 5);
      }
    });
  }

  /* ==========================================================================
     10. Testimonials Slider (4 Client Perspectives)
     ========================================================================== */
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testiPrevBtn = document.getElementById('testiPrev');
  const testiNextBtn = document.getElementById('testiNext');
  const testiDots = document.querySelectorAll('.slider-dot');
  let currentTestiIndex = 0;
  let testiInterval = null;

  const showTestimonial = (index) => {
    if (index >= testimonialSlides.length) index = 0;
    if (index < 0) index = testimonialSlides.length - 1;

    testimonialSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    testiDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentTestiIndex = index;
  };

  const nextTestimonial = () => showTestimonial(currentTestiIndex + 1);
  const prevTestimonial = () => showTestimonial(currentTestiIndex - 1);

  if (testiNextBtn) testiNextBtn.addEventListener('click', nextTestimonial);
  if (testiPrevBtn) testiPrevBtn.addEventListener('click', prevTestimonial);

  testiDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showTestimonial(idx);
    });
  });

  // Autoplay with hover pause
  const startTestiAutoplay = () => {
    testiInterval = setInterval(nextTestimonial, 7000);
  };
  const stopTestiAutoplay = () => {
    if (testiInterval) clearInterval(testiInterval);
  };

  const testiContainer = document.getElementById('testimonialSlider');
  if (testiContainer) {
    testiContainer.addEventListener('mouseenter', stopTestiAutoplay);
    testiContainer.addEventListener('mouseleave', startTestiAutoplay);
    startTestiAutoplay();

    // Swipe support for testimonials on touch devices
    let touchStartX = 0;
    testiContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    testiContainer.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) nextTestimonial();
      if (touchEndX - touchStartX > 50) prevTestimonial();
    }, { passive: true });
  }

  /* ==========================================================================
     11. Journal Article Reader Modal
     ========================================================================== */
  const articleModal = document.getElementById('articleModal');
  const articleModalContent = document.getElementById('articleModalContent');
  const articleCloseBtn = document.getElementById('articleCloseBtn');
  const articleBackdrop = document.getElementById('articleBackdrop');

  const openArticleModal = (articleId) => {
    const article = journalArticles[articleId];
    if (!article) return;

    articleModalContent.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="modal-project-badge">${article.category}</span>
        <h2 class="modal-project-title" style="font-size: 2.4rem;">${article.title}</h2>
        <span style="font-size: 0.75rem; color: var(--color-gold); letter-spacing: 0.15em; text-transform: uppercase;">
          ${article.date} • By Aarav Mehta
        </span>
      </div>
      
      <div style="margin: 2rem 0; overflow: hidden; border: 1px solid var(--color-border-dark);">
        <img src="${article.heroImg}" alt="${article.title}" style="width: 100%; height: 320px; object-fit: cover;">
      </div>

      <div class="article-essay-body" style="font-size: 1.05rem; color: var(--color-text-inverse-muted); line-height: 1.8;">
        ${article.content}
      </div>

      <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--color-border-dark); text-align: center;">
        <a href="#contact" class="btn btn--gold" id="articleDiscussBtn">
          <span>DISCUSS A VISION WITH AARAV</span>
        </a>
      </div>
    `;

    const articleDiscussBtn = document.getElementById('articleDiscussBtn');
    if (articleDiscussBtn) {
      articleDiscussBtn.addEventListener('click', closeArticleModal);
    }

    articleModal.classList.add('active');
    articleModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeArticleModal = () => {
    articleModal.classList.remove('active');
    articleModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.read-article-btn, .journal-img-wrapper').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.journal-card');
      const articleId = card ? card.getAttribute('data-article-id').replace('article-', '') : btn.getAttribute('data-article');
      if (articleId) openArticleModal(articleId);
    });
  });

  if (articleCloseBtn) articleCloseBtn.addEventListener('click', closeArticleModal);
  if (articleBackdrop) articleBackdrop.addEventListener('click', closeArticleModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && articleModal.classList.contains('active')) {
      closeArticleModal();
    }
  });

  /* ==========================================================================
     12. Consultation Inquiry Form Validation & Success State
     ========================================================================== */
  const consultationForm = document.getElementById('consultationForm');
  const formSuccessCard = document.getElementById('formSuccessCard');
  const resetFormBtn = document.getElementById('resetFormBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (consultationForm) {
    const fields = {
      fullName: { el: document.getElementById('fullName'), error: document.getElementById('nameError'), validator: (v) => v.trim().length >= 2 },
      email: { el: document.getElementById('email'), error: document.getElementById('emailError'), validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
      phone: { el: document.getElementById('phone'), error: document.getElementById('phoneError'), validator: (v) => v.trim().length >= 8 },
      city: { el: document.getElementById('city'), error: document.getElementById('cityError'), validator: (v) => v.trim().length >= 2 },
      projectType: { el: document.getElementById('projectType'), error: document.getElementById('typeError'), validator: (v) => v !== '' },
      message: { el: document.getElementById('message'), error: document.getElementById('messageError'), validator: (v) => v.trim().length >= 10 }
    };

    // Live validation on blur
    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      if (field.el) {
        field.el.addEventListener('blur', () => {
          const isValid = field.validator(field.el.value);
          field.el.classList.toggle('invalid', !isValid);
          if (field.error) field.error.classList.toggle('visible', !isValid);
        });

        field.el.addEventListener('input', () => {
          if (field.el.classList.contains('invalid')) {
            const isValid = field.validator(field.el.value);
            if (isValid) {
              field.el.classList.remove('invalid');
              if (field.error) field.error.classList.remove('visible');
            }
          }
        });
      }
    });

    consultationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isFormValid = true;

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (field.el) {
      const isValid = field.validator(field.el.value);
      field.el.classList.toggle('invalid', !isValid);
      if (field.error) field.error.classList.toggle('visible', !isValid);
      if (!isValid) isFormValid = false;
    }
  });

  if (isFormValid) {
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const budgetEl = document.getElementById('budget');
    const budget = budgetEl && budgetEl.value ? budgetEl.value : 'Not specified';
    const name = fields.fullName.el.value.trim();
    const email = fields.email.el.value.trim();
    const phone = fields.phone.el.value.trim();
    const city = fields.city.el.value.trim();
    const projectType = fields.projectType.el.value;
    const message = fields.message.el.value.trim();

    const subject = encodeURIComponent(`Project inquiry — ${name} (${city})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nProject type: ${projectType}\nBudget: ${budget}\n\nBrief:\n${message}`
    );

    // Opens the visitor's email client with a prefilled message to the studio.
    window.location.href = `mailto:studio@aaravmehta.design?subject=${subject}&body=${body}`;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      consultationForm.style.display = 'none';
      formSuccessCard.classList.add('active');
    }, 600);
  }
});

    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        consultationForm.reset();
        formSuccessCard.classList.remove('active');
        consultationForm.style.display = 'block';
      });
    }
  }

  /* ==========================================================================
     13. Scroll Reveal Animations (IntersectionObserver)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-slide-up, .reveal-fade-left, .reveal-fade-right, .reveal-fade');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ==========================================================================
     14. Smooth Anchor Scrolling with Dynamic Offset
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 85;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
