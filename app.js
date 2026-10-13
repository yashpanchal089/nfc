/**
 * MANASI POLYCLINIC - SMART NFC & DIGITAL PROFILE ENGINE
 * Cleanse | Heal | Nourish | Rejuvenate
 * Dr. N.D. Manasi Patani Kotak
 * Developed for Mahant Software Client Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Profile Data Configuration
  const profile = {
    clinicName: "Manasi Polyclinic",
    doctorName: "Dr. N.D. Manasi Patani Kotak",
    qualifications: "B.Sc. (Micro) • Dip. Naturopathy & Yogic Science",
    designation: "Naturopathy & Yoga Trainer • Garbh Sanskar",
    specializations: "Nutrition & Diet • Oncology Specialization",
    motto: "CLEANSE | HEAL | NOURISH | REJUVENATE",
    tagline: "If you think Health is costly, Try Illness.",
    phone: "+91 96998 85834",
    phoneClean: "919699885834",
    email: "manasipolyclinic@gmail.com",
    address: "1A, Jessamine CHS Ltd, Holy Cross Rd, near Hcg Hospital, I C Colony, Kandarpada, Borivali West, Mumbai, Maharashtra 400103",
    googleMapUrl: "https://maps.app.goo.gl/r8CCBG9ZwiUzrN5m8",
    instagramUrl: "https://www.instagram.com/manasi_polyclinic_",
    youtubeUrl: "https://www.youtube.com/watch?v=oY32hOTGsQ0",
    cardUrl: window.location.href.split('?')[0].replace(/\/$/, '') || "https://card.mahantsoftware.com/manasi",

    // Treatments Catalog
    treatments: [
      {
        id: "cupping",
        category: "naturopathy",
        name: "Cupping Therapy",
        icon: "ri-sparkling-2-line",
        desc: "Ancient negative-pressure therapy to improve micro-circulation, remove metabolic stagnation, relax muscles, and relieve chronic pain.",
        badge: "Speciality"
      },
      {
        id: "garbh-sanskar",
        category: "maternal",
        name: "Garbh Sanskar",
        icon: "ri-parent-line",
        desc: "Holistic prenatal education, Vedic sanskaras, foetal bonding, sound meditation, and positive mental conditioning for expectant mothers.",
        badge: "Speciality"
      },
      {
        id: "prenatal-yoga",
        category: "maternal",
        name: "Pre-Natal & Post-Natal Yoga",
        icon: "ri-women-line",
        desc: "Gentle postures, pelvis toning, breathing exercises, and safe restorative practices to prepare for normal childbirth and speedy postpartum recovery.",
        badge: "Maternal Care"
      },
      {
        id: "child-mom-care",
        category: "maternal",
        name: "Child Care & Post-Birth Mom Care",
        icon: "ri-heart-pulse-line",
        desc: "Holistic infant wellness routines, natural immunity building, maternal lactation nutrition, and postpartum abdominal toning.",
        badge: "Mother & Baby"
      },
      {
        id: "detox",
        category: "naturopathy",
        name: "Comprehensive Detox Therapy",
        icon: "ri-recycle-line",
        desc: "Full-body toxin elimination protocols combining gentle internal cleansing, skin perspiration, and elimination support without harsh chemicals.",
        badge: "Naturopathy"
      },
      {
        id: "mud-therapy",
        category: "naturopathy",
        name: "Mud Therapy & Mud Bath",
        icon: "ri-landscape-line",
        desc: "Therapeutic mineral-rich earth applications that absorb toxins, reduce inflammation, balance body temperature, and revitalize skin tissues.",
        badge: "Earth Element"
      },
      {
        id: "hydrotherapy",
        category: "naturopathy",
        name: "Hydrotherapy & Aqua Yoga",
        icon: "ri-drop-line",
        desc: "Water healing using temperature contrasts, spinal sprays, hip baths, and buoyant aquatic yoga to stimulate metabolism and circulation.",
        badge: "Water Element"
      },
      {
        id: "shirodhara",
        category: "ayurveda",
        name: "Shirodhara Therapy",
        icon: "ri-water-flash-line",
        desc: "Gentle, rhythmic pouring of warm herbal medicated liquids on the forehead to relieve stress, insomnia, anxiety, and mental fatigue.",
        badge: "Ayurvedic"
      },
      {
        id: "janu-basti",
        category: "ayurveda",
        name: "Janu Basti (Knee Therapy)",
        icon: "ri-footprint-line",
        desc: "Specialized warm herbal oil retention pool over knee joints to soothe osteoarthritic pain, restore synovial lubrication, and improve mobility.",
        badge: "Joint Relief"
      },
      {
        id: "kati-basti",
        category: "ayurveda",
        name: "Kati Basti (Lumbar Therapy)",
        icon: "ri-capsule-line",
        desc: "Targeted localized pool of therapeutic warm oil applied to the lower back to relieve lumbar spondylosis, sciatica, and chronic disc ache.",
        badge: "Spine Care"
      },
      {
        id: "enema",
        category: "naturopathy",
        name: "Naturopathic Enema Therapy",
        icon: "ri-repeat-2-line",
        desc: "Safe, natural colon hydro-cleansing to eliminate toxic fecal stagnation, relieve stubborn constipation, and balance gut microbiota.",
        badge: "Colon Health"
      },
      {
        id: "oncology-diet",
        category: "diet",
        name: "Oncology Nutrition & Care",
        icon: "ri-shield-check-line",
        desc: "Specialized, immune-supportive medical diets to protect healthy cells, maintain weight, combat treatment fatigue, and optimize recovery.",
        badge: "Specialized"
      },
      {
        id: "diet-fasting",
        category: "diet",
        name: "Therapeutic Diet",
        icon: "ri-restaurant-line",
        desc: "Customized elimination diets, intermittent fasting guidance, and alkaline nutrition for diabetes, blood pressure, and metabolic harmony.",
        badge: "Clinical Diet"
      },
      {
        id: "raw-juice",
        category: "diet",
        name: "Raw Juice Therapy",
        icon: "ri-goblet-line",
        desc: "Nutrient-dense, enzymatically active cold-pressed vegetable & wheatgrass juices targeting cellular rejuvenation and blood alkalization.",
        badge: "Vitality"
      },
      {
        id: "kansa-therapy",
        category: "alternative",
        name: "Kansa Therapy",
        icon: "ri-copper-coin-line",
        desc: "Sacred bronze (copper & tin) wand massage drawing out excess acidity and heat (pitta), calming the nervous system, and lifting skin tone.",
        badge: "Holistic"
      },
      {
        id: "acupressure-chinese",
        category: "alternative",
        name: "Acupressure & Chinese Therapy",
        icon: "ri-hand-coin-line",
        desc: "Stimulation of meridian energy pathways to unblock vital life force (Prana/Qi), relieve organ sluggishness, and alleviate acute pain.",
        badge: "Energy Flow"
      },
      {
        id: "color-therapy",
        category: "alternative",
        name: "Chromotherapy (Colour Therapy)",
        icon: "ri-palette-line",
        desc: "Application of specific healing light wavelengths and solarized water to harmonize endocrine glands, emotional state, and cellular frequencies.",
        badge: "Vibrational"
      },
      {
        id: "mechano-therapy",
        category: "alternative",
        name: "Mechano Therapy",
        icon: "ri-body-scan-line",
        desc: "Systematic therapeutic manual manipulation, postural realignment, and kinetic exercises to improve muscular tone and joint kinematics.",
        badge: "Physical Rehab"
      },
      {
        id: "divine-meditation",
        category: "alternative",
        name: "Divine Healing & Meditation",
        icon: "ri-sun-line",
        desc: "Pranayama breathwork, chakra alignment, guided mindfulness, and spiritual healing to release psychosomatic blockages and cultivate peace.",
        badge: "Mind-Body"
      }
    ],

    // Ailments List
    ailments: [
      { name: "Acne & Skin Breakouts", icon: "ri-virus-line" },
      { name: "Arthritis & Joint Pains", icon: "ri-bone-line" },
      { name: "Black Heads & Blemishes", icon: "ri-sparkling-line" },
      { name: "Chronic Constipation", icon: "ri-refresh-line" },
      { name: "Corns & Foot Pain", icon: "ri-footprint-line" },
      { name: "Dandruff & Scalp Issues", icon: "ri-scissors-2-line" },
      { name: "Depression & Mood Swings", icon: "ri-mental-health-line" },
      { name: "Diarrhoea & IBS", icon: "ri-heart-pulse-line" },
      { name: "Hair Fall & Thinning", icon: "ri-user-unfollow-line" },
      { name: "Headaches & Migraine", icon: "ri-thunderstorms-line" },
      { name: "High Blood Pressure", icon: "ri-pulse-line" },
      { name: "Low Blood Pressure", icon: "ri-speed-down-line" },
      { name: "Indigestion & Acidity", icon: "ri-fire-line" },
      { name: "Insomnia & Sleep Apnea", icon: "ri-moon-clear-line" },
      { name: "Kidney Stones & Disorders", icon: "ri-drop-line" },
      { name: "Menstrual Disorders & PCOD", icon: "ri-women-line" },
      { name: "Natural Childbirth Support", icon: "ri-parent-line" },
      { name: "Obesity (Weight Loss/Gain)", icon: "ri-scales-line" },
      { name: "Premature Greying of Hair", icon: "ri-contrast-drop-line" },
      { name: "Sciatica & Lumbar Pain", icon: "ri-walk-line" },
      { name: "Varicose Veins", icon: "ri-git-branch-line" },
      { name: "Chronic Stress & Fatigue", icon: "ri-battery-low-line" },
      { name: "Muscle Cramps & Spasms", icon: "ri-flashlight-line" },
      { name: "Body Pain & Fibromyalgia", icon: "ri-service-line" }
    ],

    // Patient Testimonials
    testimonials: [
      {
        author: "Kavita S. Shah",
        treatment: "Garbh Sanskar & Pre-Natal Yoga",
        text: "Dr. Manasi's Garbh Sanskar sessions were a true blessing during my pregnancy. The daily meditation and yoga gave me deep inner peace and led to a completely normal and peaceful delivery!",
        rating: 5
      },
      {
        author: "Rameshwar Vyas",
        treatment: "Cupping Therapy & Kati Basti",
        text: "I was suffering from severe lower back pain and sciatica for two years. Within 4 sessions of Kati Basti and Cupping Therapy, my pain reduced by 90%. Very humble and highly skilled doctor.",
        rating: 5
      },
      {
        author: "Nehal Patel",
        treatment: "Naturopathy Diet & Detox",
        text: "Under Dr. Manasi's dietary and juice therapy regime, my chronic acidity disappeared and I lost 9 kg naturally in 3 months. No medicines, pure lifestyle healing!",
        rating: 5
      },
      {
        author: "Anita Deshmukh",
        treatment: "Oncology Dietary Guidance",
        text: "During post-chemotherapy recovery, Dr. Manasi’s specialized oncology nutrition guidance restored my mother's energy, digestion, and blood counts. We are eternally grateful.",
        rating: 5
      }
    ]
  };

  // 2. Load Any Saved User Testimonials from localStorage
  const savedTestimonials = localStorage.getItem('manasi_patient_reviews');
  if (savedTestimonials) {
    try {
      const parsed = JSON.parse(savedTestimonials);
      if (Array.isArray(parsed) && parsed.length > 0) {
        profile.testimonials = [...parsed, ...profile.testimonials];
      }
    } catch (e) {
      console.warn("Could not load stored reviews", e);
    }
  }

  // 3. Dynamic QR Code Generator Engine
  const qrCanvasContainer = document.getElementById('qrCanvasContainer');
  let generatedQrCanvas = null;

  function generateQRCode() {
    if (!qrCanvasContainer) return;
    
    // Clear existing
    qrCanvasContainer.innerHTML = '';

    const currentUrl = profile.cardUrl || window.location.href;

    if (window.QRCode && QRCode.toCanvas) {
      const canvas = document.createElement('canvas');
      QRCode.toCanvas(canvas, currentUrl, {
        width: 190,
        margin: 1.5,
        color: {
          dark: '#064e3b',  // Deep therapeutic emerald
          light: '#ffffff'  // Pure crisp white
        },
        errorCorrectionLevel: 'H'
      }, function (error) {
        if (error) {
          console.error("QR Code Error: ", error);
          qrCanvasContainer.innerHTML = `<img src="assets/logo.png" alt="QR Code" class="qr-display-img">`;
        } else {
          generatedQrCanvas = canvas;
          canvas.id = 'generatedQrCanvas';
          qrCanvasContainer.appendChild(canvas);
        }
      });
    } else {
      // Fallback if external script fails
      const fallbackImg = document.createElement('img');
      fallbackImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=064e3b&data=${encodeURIComponent(currentUrl)}`;
      fallbackImg.alt = "Manasi Polyclinic QR Code";
      fallbackImg.className = "qr-display-img";
      qrCanvasContainer.appendChild(fallbackImg);
    }
  }
  generateQRCode();

  // Download QR Code Action
  const btnDownloadQr = document.getElementById('btnDownloadQr');
  if (btnDownloadQr) {
    btnDownloadQr.addEventListener('click', () => {
      const canvas = document.getElementById('generatedQrCanvas');
      if (canvas) {
        const image = canvas.toDataURL("image/png");
        const a = document.createElement('a');
        a.href = image;
        a.download = "Manasi_Polyclinic_NFC_QR.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast("QR Code downloaded successfully!");
      } else {
        const currentUrl = profile.cardUrl || window.location.href;
        window.open(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=064e3b&data=${encodeURIComponent(currentUrl)}`, '_blank');
      }
    });
  }

  // 4. Tab Navigation Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button active state
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panel visibility
      tabPanels.forEach(panel => {
        if (panel.id === `tab-${targetTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      // Smooth scroll if tabs bar is scrolled offscreen
      const tabsNav = document.getElementById('cardTabs');
      if (tabsNav) {
        const rect = tabsNav.getBoundingClientRect();
        if (rect.top < 0) {
          tabsNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 5. Render Treatments Catalog
  const treatmentsContainer = document.getElementById('treatmentsList');
  function renderTreatments(filterCategory = 'all', searchTerm = '') {
    if (!treatmentsContainer) return;

    const term = searchTerm.trim().toLowerCase();
    const filtered = profile.treatments.filter(t => {
      const matchesCategory = filterCategory === 'all' || t.category === filterCategory;
      const matchesSearch = !term || 
        t.name.toLowerCase().includes(term) || 
        t.desc.toLowerCase().includes(term) || 
        t.badge.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      treatmentsContainer.innerHTML = `
        <div style="text-align:center; padding: 24px; color: #64748b; font-size: 13px;">
          <i class="ri-search-eye-line" style="font-size: 32px; color: #10b981; display:block; margin-bottom: 6px;"></i>
          No treatments found matching "${searchTerm}".
        </div>
      `;
      return;
    }

    treatmentsContainer.innerHTML = filtered.map(t => `
      <div class="treatment-card" data-category="${t.category}">
        <div class="treatment-icon-wrap">
          <i class="${t.icon}"></i>
        </div>
        <div class="treatment-info">
          <div class="treatment-title-row">
            <h4 class="treatment-name">${t.name}</h4>
            <span class="treatment-category-badge">${t.badge}</span>
          </div>
          <p class="treatment-desc">${t.desc}</p>
          <a href="https://wa.me/${profile.phoneClean}?text=Hello%20Dr.%20Manasi,%20I%20am%20interested%20in%20consulting%20for%20*${encodeURIComponent(t.name)}*." target="_blank" class="treatment-inquire-link">
            <span>Inquire on WhatsApp</span>
            <i class="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    `).join('');
  }
  renderTreatments();

  // Treatment Category Filter Buttons
  const filterBtns = document.querySelectorAll('#treatmentFilterRow .filter-tag-btn');
  let currentTreatmentCategory = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTreatmentCategory = btn.getAttribute('data-filter');
      const searchInput = document.getElementById('treatmentSearchInput');
      renderTreatments(currentTreatmentCategory, searchInput ? searchInput.value : '');
    });
  });

  // Treatment Search Input
  const treatmentSearchInput = document.getElementById('treatmentSearchInput');
  if (treatmentSearchInput) {
    treatmentSearchInput.addEventListener('input', (e) => {
      renderTreatments(currentTreatmentCategory, e.target.value);
    });
  }

  // 6. Render Ailments Grid
  const ailmentsContainer = document.getElementById('ailmentsGrid');
  function renderAilments(searchTerm = '') {
    if (!ailmentsContainer) return;

    const term = searchTerm.trim().toLowerCase();
    const filtered = profile.ailments.filter(a => {
      return !term || a.name.toLowerCase().includes(term);
    });

    if (filtered.length === 0) {
      ailmentsContainer.innerHTML = `
        <div style="grid-column: span 2; text-align:center; padding: 20px; color: #64748b; font-size: 13px;">
          No ailments matched "${searchTerm}". Please contact us for specialized naturopathic evaluation.
        </div>
      `;
      return;
    }

    ailmentsContainer.innerHTML = filtered.map(a => `
      <div class="ailment-tag" title="${a.name}">
        <i class="${a.icon}"></i>
        <span>${a.name}</span>
      </div>
    `).join('');
  }
  renderAilments();

  // Ailments Search Input
  const ailmentSearchInput = document.getElementById('ailmentSearchInput');
  if (ailmentSearchInput) {
    ailmentSearchInput.addEventListener('input', (e) => {
      renderAilments(e.target.value);
    });
  }

  // 7. Render Testimonials List
  const testimonialsContainer = document.getElementById('testimonialsList');
  function renderTestimonials() {
    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = profile.testimonials.map(t => `
      <div class="review-card">
        <div class="review-card-head">
          <div>
            <h4 class="reviewer-name">${t.author}</h4>
            <span class="reviewer-treatment"><i class="ri-stethoscope-line"></i> ${t.treatment}</span>
          </div>
          <div class="stars">
            ${Array(t.rating).fill('<i class="ri-star-fill"></i>').join('')}
          </div>
        </div>
        <p class="review-card-body">${t.text}</p>
      </div>
    `).join('');
  }
  renderTestimonials();

  // 8. Download VCF (vCard Contact File)
  function downloadVCard() {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Kotak;Manasi;Patani;Dr. N.D.;',
      `FN:Dr. N.D. Manasi Patani Kotak`,
      `ORG:${profile.clinicName}`,
      `TITLE:Naturopath & Yoga Trainer | Garbh Sanskar | Nutrition`,
      `TEL;TYPE=CELL,VOICE,PREF:${profile.phone}`,
      `EMAIL;TYPE=INTERNET,WORK:${profile.email}`,
      `URL;TYPE=WORK:${profile.cardUrl}`,
      `ADR;TYPE=WORK:;;${profile.address};;;;`,
      `NOTE:Manasi Polyclinic - Cleanse | Heal | Nourish | Rejuvenate. Naturopathy, Yogic Science, Cupping Therapy, Garbh Sanskar, Oncology Nutrition. Map: ${profile.googleMapUrl}`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dr_Manasi_Patani_Kotak_Polyclinic.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Contact card downloaded! Tap to save in your phonebook.');
  }

  const btnDownloadVcard = document.getElementById('btnDownloadVcard');
  const bottomSaveBtn = document.getElementById('bottomSaveBtn');
  if (btnDownloadVcard) btnDownloadVcard.addEventListener('click', downloadVCard);
  if (bottomSaveBtn) bottomSaveBtn.addEventListener('click', downloadVCard);

  // 9. Copy Card Link
  const btnCopyCardLink = document.getElementById('btnCopyCardLink');
  function copyCardLink() {
    const shareUrl = profile.cardUrl || window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('Digital Card link copied to clipboard!');
      }).catch(() => fallbackCopy(shareUrl));
    } else {
      fallbackCopy(shareUrl);
    }
  }

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('Digital Card link copied to clipboard!');
  }

  if (btnCopyCardLink) btnCopyCardLink.addEventListener('click', copyCardLink);

  // 10. Native Share Integration
  function triggerShare() {
    const shareUrl = profile.cardUrl || window.location.href;
    const shareData = {
      title: `${profile.clinicName} | Dr. N.D. Manasi Patani Kotak`,
      text: `Connect with Dr. N.D. Manasi Patani Kotak at Manasi Polyclinic (${profile.motto}). Tap to view treatments and save contact:`,
      url: shareUrl
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        if (err.name !== 'AbortError') {
          copyCardLink();
        }
      });
    } else {
      copyCardLink();
    }
  }

  const headerShareBtn = document.getElementById('headerShareBtn');
  const bottomShareBtn = document.getElementById('bottomShareBtn');
  if (headerShareBtn) headerShareBtn.addEventListener('click', triggerShare);
  if (bottomShareBtn) bottomShareBtn.addEventListener('click', triggerShare);

  // 11. WhatsApp Direct Number Sender
  const whatsappShareForm = document.getElementById('whatsappShareForm');
  if (whatsappShareForm) {
    whatsappShareForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const numInput = document.getElementById('targetWhatsAppNumber');
      const cleanNum = numInput.value.replace(/[^0-9]/g, '');

      if (cleanNum.length === 10) {
        const targetNumber = '91' + cleanNum;
        const msg = encodeURIComponent(
          `*🌿 Manasi Polyclinic - Digital Business Card*\n` +
          `*Dr. N.D. Manasi Patani Kotak*\n` +
          `_B.Sc. (Micro) • Dip. Naturopathy & Yogic Science_\n\n` +
          `*CLEANSE | HEAL | NOURISH | REJUVENATE*\n\n` +
          `🌟 *Specialities:*\n` +
          `• Cupping Therapy\n` +
          `• Garbh Sanskar & Pre-Natal Yoga\n` +
          `• Oncology Nutrition & Clinical Diet\n` +
          `• Shirodhara, Mud Bath & Basti\n\n` +
          `📍 *Clinic Location:* I C Colony, Borivali West, Mumbai\n` +
          `📞 *Contact:* ${profile.phone}\n\n` +
          `👉 *Tap link to view full card & save contact:*\n` +
          `${profile.cardUrl}`
        );
        window.open(`https://wa.me/${targetNumber}?text=${msg}`, '_blank');
        numInput.value = '';
      } else {
        alert('Please enter a valid 10-digit mobile number.');
      }
    });
  }

  // 12. Review Modal & Submission with Persistence
  const reviewModal = document.getElementById('reviewModal');
  const btnOpenReviewModal = document.getElementById('btnOpenReviewModal');
  const closeReviewModal = document.getElementById('closeReviewModal');
  const reviewForm = document.getElementById('reviewForm');
  let selectedRating = 5;

  if (btnOpenReviewModal && reviewModal) {
    btnOpenReviewModal.addEventListener('click', () => {
      reviewModal.classList.add('open');
    });
  }

  if (closeReviewModal && reviewModal) {
    closeReviewModal.addEventListener('click', () => {
      reviewModal.classList.remove('open');
    });
  }

  // Close when clicking backdrop
  if (reviewModal) {
    reviewModal.addEventListener('click', (e) => {
      if (e.target === reviewModal) {
        reviewModal.classList.remove('open');
      }
    });
  }

  // Star Rating Interaction
  const starIcons = document.querySelectorAll('#starRatingSelect i');
  starIcons.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-rating'), 10);
      starIcons.forEach(s => {
        const r = parseInt(s.getAttribute('data-rating'), 10);
        if (r <= selectedRating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reviewName').value.trim();
      const treatment = document.getElementById('reviewTreatment').value.trim();
      const feedback = document.getElementById('reviewFeedback').value.trim();

      if (name && feedback) {
        const newReview = {
          author: name,
          treatment: treatment || "Naturopathy Consultation",
          text: feedback,
          rating: selectedRating
        };

        // Add to array
        profile.testimonials.unshift(newReview);
        renderTestimonials();

        // Save in localStorage
        try {
          const currentStored = JSON.parse(localStorage.getItem('manasi_patient_reviews') || '[]');
          currentStored.unshift(newReview);
          localStorage.setItem('manasi_patient_reviews', JSON.stringify(currentStored));
        } catch (e) {
          console.warn("Could not save to localStorage", e);
        }

        reviewForm.reset();
        reviewModal.classList.remove('open');
        showToast('Thank you! Your feedback has been posted.');
      }
    });
  }

  // 13. Toast Notification Helper
  function showToast(message) {
    const toast = document.getElementById('toastNotice');
    const toastMsg = document.getElementById('toastMessage');
    if (toast && toastMsg) {
      toastMsg.innerText = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }
  }
});
