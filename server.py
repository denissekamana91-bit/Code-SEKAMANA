import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from werkzeug.utils import secure_filename
from stock import obtenir_toutes_epreuves, obtenir_epreuves_par_filtre, ajouter_epreuve

app = Flask(__name__)

# Dossier d'upload des fichiers PDF
UPLOAD_FOLDER = os.path.join('static', 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Dictionnaire des noms lisibles pour les matières
MATIERES_NOMS = {
    "math": "Mathématiques",
    "physique": "Physique - Chimie",
    "svt": "SVT",
    "francais": "Français",
    "anglais": "Anglais",
    "espagnol": "Espagnol",
    "allemand": "Allemand",
    "histoire_geographie": "Histoire - Géographie",
    "education_civique": "Éducation Civique",
    "philosophie": "Philosophie",
    "musique": "Musique",
    "dessin": "Dessin"
}

# 1. Page d'accueil
@app.route('/')
def home():
    toutes_epreuves = obtenir_toutes_epreuves()
    epreuves_par_matiere = {cle: [] for cle in MATIERES_NOMS.keys()}
    for epreuve in toutes_epreuves:
        mat = epreuve.get('matiere', '').lower().strip()
        if mat in epreuves_par_matiere:
            epreuves_par_matiere[mat].append(epreuve)

    return render_template('base.html', epreuves_par_matiere=epreuves_par_matiere)

# 2. NOUVEAU : Page "Explorer toutes les épreuves" (Ranger par matières)
@app.route('/explorer')
def explorer():
    toutes_epreuves = obtenir_toutes_epreuves()
    
    # Organisation par matière
    epreuves_par_matiere = {cle: [] for cle in MATIERES_NOMS.keys()}
    for epreuve in toutes_epreuves:
        mat = epreuve.get('matiere', '').lower().strip()
        if mat in epreuves_par_matiere:
            epreuves_par_matiere[mat].append(epreuve)
        else:
            if mat not in epreuves_par_matiere:
                epreuves_par_matiere[mat] = []
            epreuves_par_matiere[mat].append(epreuve)

    return render_template('explorer.html', epreuves_par_matiere=epreuves_par_matiere, matieres_noms=MATIERES_NOMS)

# 3. NOUVEAU : Route de recherche dans le stock
@app.route('/recherche')
def recherche():
    query = request.args.get('q', '').strip()
    if not query:
        return redirect(url_for('home'))
    
    toutes = obtenir_toutes_epreuves()
    q_lower = query.lower()
    
    # Recherche dans le titre, la description, la matière, le badge et l'année
    resultats = []
    for ep in toutes:
        titre = str(ep.get('titre', '')).lower()
        desc = str(ep.get('description', '')).lower()
        mat = str(ep.get('matiere', '')).lower()
        badge = str(ep.get('badge', '')).lower()
        annee = str(ep.get('annee', ''))
        
        if q_lower in titre or q_lower in desc or q_lower in mat or q_lower in badge or q_lower in annee:
            resultats.append(ep)

    return render_template('recherche.html', query=query, resultats=resultats)

# 4. Formulaire d'ajout
@app.route('/ajouter', methods=['GET'])
def ajouter_page():
    return render_template('ajouter.html')

# 5. Envoi du document (POST)
@app.route('/ajouter', methods=['POST'])
def ajouter():
    titre = request.form.get('titre', '')
    description = request.form.get('description', '')
    matiere = request.form.get('matiere', '')
    categorie = request.form.get('categorie', '')
    badge = request.form.get('badge', '')
    annee = request.form.get('annee', '')
    
    filename = ""
    if 'fichier_pdf' in request.files:
        file = request.files['fichier_pdf']
        if file and file.filename != '':
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    ajouter_epreuve(titre, description, matiere, categorie, badge, annee, filename)
    return redirect(url_for('home'))

# 6. Affichage d'un domaine / catégorie
@app.route('/domaine/<nom>')
def voir_domaine(nom):
    epreuves_filtres = obtenir_epreuves_par_filtre(nom)
    return render_template('categorie.html', nom_categorie=nom, epreuves=epreuves_filtres)

# 7. Téléchargement direct
@app.route('/telecharger/<nom_fichier>')
def telecharger_fichier(nom_fichier):
    return send_from_directory(app.config['UPLOAD_FOLDER'], nom_fichier, as_attachment=True)

if __name__ == '__main__':
    print("🚀 Serveur actif sur http://localhost:5500")
    app.run(debug=True, port=5500)