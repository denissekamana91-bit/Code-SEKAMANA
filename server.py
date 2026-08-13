import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from werkzeug.utils import secure_filename
from stock import obtenir_toutes_epreuves, obtenir_epreuves_par_filtre, ajouter_epreuve

app = Flask(__name__)

# Configuration du dossier d'upload des fichiers PDF
UPLOAD_FOLDER = os.path.join('static', 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# 1. Page d'accueil (Carrousel dynamique)
@app.route('/')
def home():
    toutes_epreuves = obtenir_toutes_epreuves()
    matieres_cles = [
        "math", "physique", "svt", "francais", "anglais", "espagnol", 
        "allemand", "histoire_geographie", "education_civique", 
        "philosophie", "musique", "dessin"
    ]
    
    epreuves_par_matiere = {cle: [] for cle in matieres_cles}
    for epreuve in toutes_epreuves:
        mat = epreuve.get('matiere')
        if mat in epreuves_par_matiere:
            epreuves_par_matiere[mat].append(epreuve)

    return render_template('base.html', epreuves_par_matiere=epreuves_par_matiere)

# 2. Page pour ajouter une épreuve
@app.route('/ajouter', methods=['GET'])
def ajouter_page():
    return render_template('ajouter.html')

# 3. Traitement du formulaire d'ajout
@app.route('/ajouter', methods=['POST'])
def ajouter():
    titre = request.form.get('titre')
    description = request.form.get('description')
    matiere = request.form.get('matiere')
    categorie = request.form.get('categorie')
    badge = request.form.get('badge')
    annee = request.form.get('annee')
    
    filename = ""
    if 'fichier_pdf' in request.files:
        file = request.files['fichier_pdf']
        if file and file.filename != '':
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    ajouter_epreuve(titre, description, matiere, categorie, badge, annee, filename)
    return redirect(url_for('voir_domaine', nom=matiere))

# 4. Page d'une catégorie ou d'une matière spécifique
@app.route('/domaine/<nom>')
def voir_domaine(nom):
    epreuves_filtres = obtenir_epreuves_par_filtre(nom)
    return render_template('categorie.html', nom_categorie=nom, epreuves=epreuves_filtres)

# 5. NOUVEAU : Route pour forcer le téléchargement du PDF
@app.route('/telecharger/<nom_fichier>')
def telecharger_fichier(nom_fichier):
    # send_from_directory avec as_attachment=True force le navigateur à télécharger
    return send_from_directory(app.config['UPLOAD_FOLDER'], nom_fichier, as_attachment=True)

if __name__ == '__main__':
    print("🚀 Serveur Flask en ligne sur http://localhost:5500")
    app.run(debug=True, port=5500)