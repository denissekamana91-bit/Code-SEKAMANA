# --- 1. IMPORTS ---
import datetime
import json
import os

# --- 2. FONCTIONS DE LECTURE MODIFIÉES ---
def obtenir_toutes_epreuves():
    return lire_donnees_json()

def obtenir_epreuves_par_filtre(filtre):
    """Recherche les épreuves par matière ou par catégorie."""
    filtre = filtre.lower()
    donnees = lire_donnees_json()
    return [
        e for e in donnees 
        if e.get('matiere', '').lower() == filtre or e.get('categorie', '').lower() == filtre
    ]

def obtenir_epreuves_par_niveau(niveau):
    """Recherche les épreuves par niveau/classe."""
    niveau = niveau.lower()
    donnees = lire_donnees_json()
    return [
        e for e in donnees 
        if e.get('niveau', '').lower() == niveau
    ]

# --- 3. FONCTION D'AJOUT MODIFIÉE ---
def ajouter_epreuve(titre, description, matiere, categorie, badge, annee, niveau="tle_c4", fichier_pdf=""):
    donnees = lire_donnees_json()
    nouvel_id = len(donnees) + 1
    
    # Gestion sécurisée de l'année optionnelle
    annee_value = "N/A"
    if annee and str(annee).strip():
        try:
            annee_value = int(annee)
        except ValueError:
            annee_value = str(annee).strip()
            
    nouvelle_epreuve = {
        "id": nouvel_id,
        "titre": titre,
        "description": description,
        "matiere": matiere,
        "categorie": categorie,
        "badge": badge,
        "annee": annee_value,
        "niveau": niveau,
        "fichier_pdf": fichier_pdf
    }
    
    donnees.append(nouvelle_epreuve)
    sauvegarder_donnees_json(donnees)
    return nouvelle_epreuve

# --- 4. LE MOTEUR JSON (NOUVEAU) ---
FICHIER_JSON = 'epreuves.json'

def lire_donnees_json():
    if not os.path.exists(FICHIER_JSON):
        return []
    try:
        with open(FICHIER_JSON, 'r', encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError:
        return []

def sauvegarder_donnees_json(donnees):
    with open(FICHIER_JSON, 'w', encoding='utf-8') as f:
        json.dump(donnees, f, indent=4, ensure_ascii=False)
def supprimer_epreuve(id_epreuve):
    """Supprime une épreuve du fichier JSON grâce à son ID."""
    donnees = lire_donnees_json()
    # On recrée la liste en gardant toutes les épreuves SAUF celle qui correspond à l'ID
    donnees_restantes = [ep for ep in donnees      if ep.get('id') != id_epreuve]
    sauvegarder_donnees_json(donnees_restantes)

