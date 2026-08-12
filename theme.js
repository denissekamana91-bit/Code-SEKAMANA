/* =========================================
   GESTION DU THÈME (SWITCH iOS)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // On cible désormais l'input checkbox à l'intérieur du label
    const themeToggle = document.getElementById('theme-toggle');

    if (!themeToggle) return;

    // 1. Charger le thème enregistré dans le navigateur
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true; // On "pousse" le switch iOS vers la droite
    } else {
        themeToggle.checked = false;
    }

    // 2. Écouter le glissement du switch
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            // Le switch est activé -> Mode Sombre
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // Le switch est désactivé -> Mode Clair
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});