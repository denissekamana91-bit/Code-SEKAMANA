import datetime

# --- BASE DE DONNÉES EN MÉMOIRE DE SÉRIE C4 ---
epreuves_db = [
    {
        "id": 1,
        "titre": "Mathématiques C4 - Session Normale",
        "description": "Épreuve complète avec sujet et corrigé détaillé.",
        "matiere": "math",
        "categorie": "bac",
        "badge": "BAC II",
        "annee": 2024,
        "fichier_pdf": "math_2024_normal.pdf"
    },
    {
        "id": 2,
        "titre": "Physique-Chimie - Mécanique & Cinétique",
        "description": "Série C4 - Sujet officiel Togo avec barème.",
        "matiere": "physique",
        "categorie": "national",
        "badge": "Devoir N°1",
        "annee": 2025,
        "fichier_pdf": "physique_meca_2025.pdf"
    }
]

def obtenir_toutes_epreuves():
    return epreuves_db

def obtenir_epreuves_par_filtre(filtre):
    """Recherche les épreuves par matière ou par catégorie."""
    filtre = filtre.lower()
    return [
        e for e in epreuves_db 
        if e['matiere'].lower() == filtre or e['categorie'].lower() == filtre
    ]

def ajouter_epreuve(titre, description, matiere, categorie, badge, annee, fichier_pdf=""):
    nouvel_id = len(epreuves_db) + 1
    nouvelle_epreuve = {
        "id": nouvel_id,
        "titre": titre,
        "description": description,
        "matiere": matiere,
        "categorie": categorie,
        "badge": badge,
        "annee": int(annee),
        "fichier_pdf": fichier_pdf
    }
    epreuves_db.append(nouvelle_epreuve)
    return nouvelle_epreuve