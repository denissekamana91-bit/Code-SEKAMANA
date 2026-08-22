/* =========================================
   SYSTÈME DE TRADUCTION DYNAMIQUE (FR / EN)
   ========================================= */

const translations = {
    fr: {
        // Navigation & Header
        "nav_home": "Accueil",
        "nav_categories": "Catégories",
        "nav_contribute": "Contribuer",
        "nav_about": "À propos",
        "nav_login": "Se connecter",
        "header_welcome": "Bienvenue sur notre plateforme",
        "header_intro_1": "Bienvenue sur le repère des scientifiques de la Série C4 ! 🔬📐 Chers élèves de la 2nde à la Terminale C4, vous êtes au bon endroit.",
        "header_intro_2": "On ne va pas se mentir : la série C4 est un vrai défi. Entre les démonstrations de maths, la mécanique, la chimie et la rigueur qu'on vous demande au quotidien, la montagne peut parfois sembler haute. Mais rappelez-vous d'une chose : personne ne réussit seul, et la méthode fait toute la différence.",
        "search_placeholder": "Rechercher une épreuve, une matière...",
        "btn_explore": "Explorer les épreuves <i class='fas fa-arrow-right'></i>",
        "btn_share": "Partager un document",

        // Matières (Menu)
        "title_subjects": "Matières",
        "subject_math": "<i class='fas fa-square-root-variable'></i> Mathématiques",
        "subject_physique": "<i class='fas fa-atom'></i> Physique",
        "subject_svt": "<i class='fas fa-dna'></i> SVT",
        "subject_francais": "<i class='fas fa-pen-nib'></i> Français",
        "subject_anglais": "<i class='fas fa-language'></i> Anglais",
        "subject_espagnol": "<i class='fas fa-bullhorn'></i> Espagnol",
        "subject_allemand": "<i class='fas fa-comment-dots'></i> Allemand",
        "subject_histoire_geographie": "<i class='fas fa-globe-africa'></i> Histoire-Géo",
        "subject_education_civique": "<i class='fas fa-balance-scale'></i> ECM",
        "subject_philosophie": "<i class='fas fa-brain'></i> Philosophie",
        "subject_musique": "<i class='fas fa-music'></i> Musique",
        "subject_dessin": "<i class='fas fa-palette'></i> Dessin",

        // Ressources & Cartes
        "title_categories": "Ressources & Cartes d'Épreuves",
        "cat_bac": "Examens Officiels (BAC I & II)",
        "cat_bac_desc": "Épreuves de 2000 à 2026",
        "cat_national": "Épreuves Nationales",
        "cat_national_desc": "Togo & Lycée Scientifique de Lomé",
        "cat_school": "Épreuves d'Établissement",
        "cat_school_desc": "Collège et Lycée Notre Dame de la Trinité<br>Collège Saint Joseph",
        "cat_optional": "Matières Facultatives",
        "cat_optional_desc": "Allemand, Musique, etc.",
        "cat_library": "Bibliothèque",
        "cat_library_desc": "Livres et annales de révision",
        "cat_others": "Autres Épreuves",
        "cat_others_desc": "Ressources diverses",

        // Badges et Boutons
        "title_preview": "Aperçu des Épreuves",
        "badge_dev1": "Devoir N°1",
        "badge_dev2": "Devoir N°2",
        "badge_dev3": "Devoir N°3",
        "badge_comp": "Composition",
        "btn_download_pdf": "<i class='fas fa-file-pdf'></i> Télécharger PDF",

        // Épreuves MATHS
        "math_t1": "Mathématiques C4 - Session Normale", "math_d1": "Épreuve complète avec sujet et corrigé détaillé.",
        "math_t2": "Mathématiques - Analyse & Suites", "math_d2": "Lycée Scientifique de Lomé (2024)",
        "math_t3": "Mathématiques Séries C & D", "math_d3": "Épreuve officielle du BAC I Togo.",
        "math_t4": "Mathématiques - Géométrie de l'Espace", "math_d4": "Notre Dame de la Trinité (2023)",
        "math_t5": "Mathématiques C4 - Session Compl.", "math_d5": "Épreuve et barème de correction.",
        
        // Épreuves PHYSIQUE
        "phys_t1": "Physique-Chimie - Mécanique & Cinétique", "phys_d1": "Série C4 - Sujet officiel Togo",
        "phys_t2": "Physique - Électromagnétisme", "phys_d2": "Épreuve d'excellence Scientifique",
        "phys_t3": "Chimie Organique & Acide-Base", "phys_d3": "Lycée Scientifique (2024)",
        "phys_t4": "Physique - Ondes et Radioactivité", "phys_d4": "Sujet de session principale",
        "phys_t5": "Chimie - Solutions Aqueuses", "phys_d5": "Notre Dame de la Trinité",
        
        // Épreuves SVT
        "svt_t1": "SVT - Génétique & Immunologie", "svt_d1": "Épreuve officielle Série D & C",
        "svt_t2": "SVT - Neurophysiologie", "svt_d2": "Épreuve du 1er Semestre 2024",
        "svt_t3": "SVT - Géologie & Tectonique", "svt_d3": "Composition régionale Lomé",
        "svt_t4": "SVT - Biologie Cellulaire", "svt_d4": "Sujet type examen d'État",
        "svt_t5": "SVT - Synthèse des Protéines", "svt_d5": "Notre Dame de la Trinité",

        // Épreuves FRANÇAIS
        "fra_t1": "Français - EAF Dissert. & Commentaire", "fra_d1": "Sujets littéraires officiels",
        "fra_t2": "Français - Contraction de Texte", "fra_d2": "Entraînement 1ère & Terminale",
        "fra_t3": "Français - Littérature Africaine", "fra_d3": "Composition Blanche 2024",
        "fra_t4": "Français - Épreuve de Synthèse", "fra_d4": "Sujet et corrigé officiel",
        "fra_t5": "Français - Étude d'Œuvre Intégrale", "fra_d5": "Lycée Scientifique de Lomé",

        // Épreuves ANGLAIS
        "ang_t1": "English Reading & Written Expression", "ang_d1": "Official Examination Paper",
        "ang_t2": "English Grammar & Vocabulary", "ang_d2": "Terminale C4 / D",
        "ang_t3": "English Mock Exam 2024", "ang_d3": "Lycée Scientifique de Lomé",
        "ang_t4": "English Language Test", "ang_d4": "Official Togolese BAC Paper",
        "ang_t5": "English Essay & Translation", "ang_d5": "Notre Dame de la Trinité",

        // Épreuves HISTOIRE-GÉO
        "hg_t1": "Histoire-Géo - Histoire Contemporaine", "hg_d1": "Sujets de dissertation & carte",
        "hg_t2": "Géographie - L'Économie Togolaise", "hg_d2": "Devoir surveillé Terminale",
        "hg_t3": "Histoire - Les Relations Internationales", "hg_d3": "Composition du 2nd Semestre",
        "hg_t4": "Histoire-Géographie - Examen Officiel", "hg_d4": "Sujets avec croquis guidé",
        "hg_t5": "Géographie - La Mondialisation", "hg_d5": "Lycée Scientifique de Lomé",

        // Épreuves PHILO
        "phi_t1": "Philosophie - Dissert. & Explication", "phi_d1": "Série C4 - Sujet officiel",
        "phi_t2": "Philosophie - Conscience et Inconscient", "phi_d2": "Entraînement méthodique",
        "phi_t3": "Philosophie - La Science et la Technique", "phi_d3": "Composition Blanche 2024",
        "phi_t4": "Philosophie - Épreuve du Baccalauréat", "phi_d4": "Sujets 1, 2 et texte expliqué",
        "phi_t5": "Philosophie - L'État et la Justice", "phi_d5": "Notre Dame de la Trinité",

        // À propos
        "about_badge": "<i class='fas fa-heart'></i> Notre Mission",
        "about_title": "Pourquoi ce site ?",
        "about_text": "J'ai conçu cette plateforme avec une conviction forte : l'accès aux ressources éducatives ne devrait pas être un obstacle. En tant qu'élève, j'ai réalisé la difficulté de rassembler les anciennes épreuves pour s'entraîner. Ce site est né d'un désir d'entraide pour permettre à chacun de viser l'excellence absolue aux examens. <strong>L'excellence est une réussite collective.</strong>",

        // Footer
        "footer_desc": "Plateforme dédiée à l'excellence scientifique. Retrouvez des sujets, annales, devoirs et corrigés pour préparer vos examens avec sérénité.",
        "footer_badge": "<i class='fas fa-graduation-cap'></i> Par un élève, pour les élèves",
        "footer_nav": "Navigation",
        "footer_subjects": "Matières",
        "footer_contact_title": "Contact & Entraide",
        "footer_contact_desc": "Une question, une suggestion ou une contribution ? N'hésitez pas !",
        "footer_whatsapp": "Partagez vos épreuves directement :",
         "footer_whatsapp2":"Et pour plus d’information me contacter sur le :",
        "footer_rights": "&copy; 2026 <strong>Série C4 - Excellence Scientifique</strong>. Tous droits réservés.",
        "footer_made_with": "Fait avec <i class='fas fa-heart'></i> pour l'excellence éducative"
    },
    en: {
        // Navigation & Header
        "nav_home": "Home",
        "nav_categories": "Categories",
        "nav_contribute": "Contribute",
        "nav_about": "About",
        "nav_login": "Login",
        "header_welcome": "Welcome to our platform",
        "header_intro_1": "Welcome to the hub for Series C4 scientists! 🔬📐 Dear students from 10th grade to Senior year C4, you are in the right place.",
        "header_intro_2": "Let's be honest: the C4 series is a real challenge. Between math proofs, mechanics, chemistry, and the rigor expected daily, the mountain can sometimes seem high. But remember one thing: no one succeeds alone, and methodology makes all the difference.",
        "search_placeholder": "Search for an exam, a subject...",
        "btn_explore": "Explore exams <i class='fas fa-arrow-right'></i>",
        "btn_share": "Share a document",

        // Matières
        "title_subjects": "Subjects",
        "subject_math": "<i class='fas fa-square-root-variable'></i> Mathematics",
        "subject_physique": "<i class='fas fa-atom'></i> Physics",
        "subject_svt": "<i class='fas fa-dna'></i> Biology (SVT)",
        "subject_francais": "<i class='fas fa-pen-nib'></i> French",
        "subject_anglais": "<i class='fas fa-language'></i> English",
        "subject_espagnol": "<i class='fas fa-bullhorn'></i> Spanish",
        "subject_allemand": "<i class='fas fa-comment-dots'></i> German",
        "subject_histoire_geographie": "<i class='fas fa-globe-africa'></i> History-Geo",
        "subject_education_civique": "<i class='fas fa-balance-scale'></i> Civics (ECM)",
        "subject_philosophie": "<i class='fas fa-brain'></i> Philosophy",
        "subject_musique": "<i class='fas fa-music'></i> Music",
        "subject_dessin": "<i class='fas fa-palette'></i> Art",

        // Ressources & Cartes
        "title_categories": "Resources & Exam Cards",
        "cat_bac": "Official Exams (BAC I & II)",
        "cat_bac_desc": "Exams from 2000 to 2026",
        "cat_national": "National Exams",
        "cat_national_desc": "Togo & Lycée Scientifique de Lomé",
        "cat_school": "School Exams",
        "cat_school_desc": "Collège et Lycée Notre Dame de la Trinité<br>Collège Saint Joseph",
        "cat_optional": "Optional Subjects",
        "cat_optional_desc": "German, Music, etc.",
        "cat_library": "Library",
        "cat_library_desc": "Revision books and past papers",
        "cat_others": "Other Exams",
        "cat_others_desc": "Miscellaneous resources",

        // Badges et Boutons
        "title_preview": "Exams Overview",
        "badge_dev1": "Assignment 1",
        "badge_dev2": "Assignment 2",
        "badge_dev3": "Assignment 3",
        "badge_comp": "Mock Exam",
        "btn_download_pdf": "<i class='fas fa-file-pdf'></i> Download PDF",

        // Épreuves MATHS
        "math_t1": "Mathematics C4 - Regular Session", "math_d1": "Complete exam with detailed grading.",
        "math_t2": "Mathematics - Calculus & Sequences", "math_d2": "Lycée Scientifique de Lomé (2024)",
        "math_t3": "Mathematics Series C & D", "math_d3": "Official Togo BAC I Exam.",
        "math_t4": "Mathematics - Space Geometry", "math_d4": "Notre Dame de la Trinité (2023)",
        "math_t5": "Mathematics C4 - Makeup Session", "math_d5": "Exam and grading scale.",
        
        // Épreuves PHYSIQUE
        "phys_t1": "Physics-Chemistry - Mechanics & Kinetics", "phys_d1": "Series C4 - Official Togo Subject",
        "phys_t2": "Physics - Electromagnetism", "phys_d2": "Scientific Excellence Exam",
        "phys_t3": "Organic Chemistry & Acid-Base", "phys_d3": "Lycée Scientifique (2024)",
        "phys_t4": "Physics - Waves and Radioactivity", "phys_d4": "Main session subject",
        "phys_t5": "Chemistry - Aqueous Solutions", "phys_d5": "Notre Dame de la Trinité",
        
        // Épreuves SVT
        "svt_t1": "Biology - Genetics & Immunology", "svt_d1": "Official Exam Series D & C",
        "svt_t2": "Biology - Neurophysiology", "svt_d2": "1st Semester Exam 2024",
        "svt_t3": "Biology - Geology & Tectonics", "svt_d3": "Lomé Regional Exam",
        "svt_t4": "Biology - Cell Biology", "svt_d4": "State exam type subject",
        "svt_t5": "Biology - Protein Synthesis", "svt_d5": "Notre Dame de la Trinité",

        // Épreuves FRANÇAIS
        "fra_t1": "French - Essay & Commentary", "fra_d1": "Official literary subjects",
        "fra_t2": "French - Text Summary", "fra_d2": "11th & 12th Grade Practice",
        "fra_t3": "French - African Literature", "fra_d3": "White Exam 2024",
        "fra_t4": "French - Synthesis Exam", "fra_d4": "Official subject and key",
        "fra_t5": "French - Full Book Study", "fra_d5": "Lycée Scientifique de Lomé",

        // Épreuves ANGLAIS
        "ang_t1": "English Reading & Written Expression", "ang_d1": "Official Examination Paper",
        "ang_t2": "English Grammar & Vocabulary", "ang_d2": "Terminale C4 / D",
        "ang_t3": "English Mock Exam 2024", "ang_d3": "Lycée Scientifique de Lomé",
        "ang_t4": "English Language Test", "ang_d4": "Official Togolese BAC Paper",
        "ang_t5": "English Essay & Translation", "ang_d5": "Notre Dame de la Trinité",

        // Épreuves HISTOIRE-GÉO
        "hg_t1": "History-Geo - Contemporary History", "hg_d1": "Essay subjects & map commentary",
        "hg_t2": "Geography - The Togolese Economy", "hg_d2": "12th Grade Proctored Exam",
        "hg_t3": "History - International Relations", "hg_d3": "2nd Semester Exam",
        "hg_t4": "History-Geography - Official Exam", "hg_d4": "Subjects with guided sketching",
        "hg_t5": "Geography - Globalization", "hg_d5": "Lycée Scientifique de Lomé",

        // Épreuves PHILO
        "phi_t1": "Philosophy - Essays & Text Explanation", "phi_d1": "Series C4 - Official subject",
        "phi_t2": "Philosophy - Consciousness & Unconscious", "phi_d2": "Methodical training",
        "phi_t3": "Philosophy - Science and Technique", "phi_d3": "White Exam 2024",
        "phi_t4": "Philosophy - Baccalaureate Exam", "phi_d4": "Subjects 1, 2 and explained text",
        "phi_t5": "Philosophy - The State and Justice", "phi_d5": "Notre Dame de la Trinité",

        // À propos
        "about_badge": "<i class='fas fa-heart'></i> Our Mission",
        "about_title": "Why this site?",
        "about_text": "I designed this platform with a strong conviction: access to educational resources should not be a barrier. As a student, I realized how difficult it is to gather past exams to practice. This site was born from a desire for mutual aid to allow everyone to aim for absolute excellence in exams. <strong>Excellence is a collective success.</strong>",

        // Footer
        "footer_desc": "Platform dedicated to scientific excellence. Find subjects, past papers, assignments, and corrections to prepare for your exams with peace of mind.",
        "footer_badge": "<i class='fas fa-graduation-cap'></i> By a student, for students",
        "footer_nav": "Navigation",
        "footer_subjects": "Subjects",
        "footer_contact_title": "Contact & Community",
        "footer_contact_desc": "A question, suggestion, or contribution? Don't hesitate!",
        "footer_whatsapp": "Share your exams directly:",
         "footer_whatsapp2":"For more information, please contact me at:",
        "footer_rights": "&copy; 2026 <strong>Series C4 - Scientific Excellence</strong>. All rights reserved.",
        "footer_made_with": "Made with <i class='fas fa-heart'></i> for educational excellence"
    }
};

/* --- LOGIQUE DE TRADUCTION & GESTION PROPRE DU MENU CLiquable --- */
document.addEventListener('DOMContentLoaded', () => {
    const langSwitches = document.querySelectorAll('.lang-switch');
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');
    const dropdownBtn = document.getElementById('current-lang-btn');
    const dropdownContainer = document.querySelector('.custom-dropdown');

    // 1. Gestion du clic pour ouvrir/fermer le menu de langue au clic (et non au simple survol)
    if (dropdownBtn && dropdownContainer) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche l'événement de se propager
            dropdownContainer.classList.toggle('show');
        });

        // Fermer le menu si on clique ailleurs sur la page
        document.addEventListener('click', () => {
            dropdownContainer.classList.remove('show');
        });
    }

    let currentLang = localStorage.getItem('site_lang') || 'fr';
    applyLanguage(currentLang);

    langSwitches.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = btn.getAttribute('data-lang');
            applyLanguage(selectedLang);
            if (dropdownContainer) dropdownContainer.classList.remove('show');
        });
    });

    function applyLanguage(lang) {
        localStorage.setItem('site_lang', lang);

        if (lang === 'fr') {
            if (currentFlag) currentFlag.src = 'https://flagcdn.com/w20/fr.png';
            if (currentLangText) currentLangText.textContent = 'FR';
        } else {
            if (currentFlag) currentFlag.src = 'https://flagcdn.com/w20/us.png';
            if (currentLangText) currentLangText.textContent = 'EN';
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }
});

/* =========================================
   GESTION DU THÈME (CLAIR / SOMBRE)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Toujours charger le thème sauvegardé sur TOUTES les pages
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    // 2. Gérer le switch de thème UNIQUEMENT s'il existe sur la page actuelle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.checked = (savedTheme === 'dark');

        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});

/* =========================================
   CARROUSEL HORIZONTAL DES ÉPREUVES
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('subjects-track');
    const slides = Array.from(track ? track.children : []);
    const prevBtn = document.getElementById('prev-subject');
    const nextBtn = document.getElementById('next-subject');
    const activeSubjectName = document.getElementById('active-subject-name');
    const subjectButtons = document.querySelectorAll('.sub-nav .btn-class[data-i18n^="subject_"]');

    if (!track || slides.length === 0) return;
    let currentIndex = 0;

    function updateCarousel(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        const activeSlide = slides[currentIndex];
        const subjectKey = activeSlide.getAttribute('data-subject');
        const matchingBtn = Array.from(subjectButtons).find(btn =>
            btn.getAttribute('data-i18n') === `subject_${subjectKey}`
        );

        if (matchingBtn && activeSubjectName) {
            activeSubjectName.innerHTML = matchingBtn.innerHTML;
        }

        subjectButtons.forEach(btn => btn.classList.remove('active'));
        if (matchingBtn) matchingBtn.classList.add('active');
    }

    if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));

    subjectButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const dataI18n = btn.getAttribute('data-i18n');
            if (!dataI18n) return;
            const subjectKey = dataI18n.replace('subject_', '');
            const targetIndex = slides.findIndex(slide => slide.getAttribute('data-subject') === subjectKey);
            if (targetIndex !== -1) {
                updateCarousel(targetIndex);
            }
        });
    });
    updateCarousel(0);
});

/* =========================================
   APERÇU DES FICHIERS PDF (MODAL)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-iframe');
    const closeBtn = document.querySelector('.close-modal');
    const previewBtns = document.querySelectorAll('.btn-preview');

    // Sécurité : on vérifie que le modal existe sur cette page
    if (!modal || !iframe || !closeBtn) return;

    // 1. Ouvrir le modal au clic sur "Aperçu"
    previewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfUrl = btn.getAttribute('data-pdf-url'); // Récupère le lien du PDF
            if (pdfUrl) {
                iframe.src = pdfUrl; // Charge le PDF dans l'iframe
                modal.classList.add('show'); // Affiche le modal
            }
        });
    });

    // 2. Fonction pour fermer proprement le modal
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            iframe.src = ""; // Vide la source après l'animation pour libérer la mémoire
        }, 300);
    };

    // 3. Fermer au clic sur la croix
    closeBtn.addEventListener('click', closeModal);

    // 4. Fermer en cliquant n'importe où en dehors du document
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// 1. Gestion des menus déroulants au clic
    const langBtn = document.getElementById('current-lang-btn');
    const langMenu = document.getElementById('langMenu');
    
    const settingsBtn = document.getElementById('settings-btn');
    const settingsMenu = document.getElementById('settings-menu');

    // Ouvrir/Fermer le menu Langue
    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            langMenu.classList.toggle('show');
            if (settingsMenu) settingsMenu.classList.remove('show'); // Ferme l'autre menu
        });
    }

    // Ouvrir/Fermer le menu Paramètres
    if (settingsBtn && settingsMenu) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsMenu.classList.toggle('show');
            if (langMenu) langMenu.classList.remove('show'); // Ferme l'autre menu
        });
    }

    // Fermer tous les menus si on clique ailleurs sur la page
    document.addEventListener('click', () => {
        if (langMenu) langMenu.classList.remove('show');
        if (settingsMenu) settingsMenu.classList.remove('show');
    });