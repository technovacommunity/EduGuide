export function parseNotes(texte) {
  const notes = {};
  const paires = texte.split(',');

  for (let paire of paires) {
    const [matiere, note] = paire.split(':').map(el => el.trim());
    const noteNum = parseFloat(note);
    if (matiere &&!isNaN(noteNum)) {
      notes[matiere.toLowerCase()] = noteNum;
}
}

  return notes;
}

export function calculateMoyenne(notes) {
  const valeurs = Object.values(notes);
  if (valeurs.length === 0) return 0;
  const somme = valeurs.reduce((a, b) => a + b, 0);
  return (somme / valeurs.length).toFixed(2);
}


export function filterFormations(userData) {
  let formationsFiltrees = [];
  const niveau = userData.niveau;
  
  if (!formations[niveau]) return formationsFiltrees;

  formationsFiltrees = formations[niveau].filieres.filter(filiere => {
    // Filtre par moyenne
    if (filiere.prerequis.moyenne && userData.moyenne) {
      if (userData.moyenne < filiere.prerequis.moyenne) return false;
    }
    return true;
  });

  return formationsFiltrees;
}

export function generateRecommendations(userData) {
  const recommandations = [];
  
  if (userData.niveau === 'college') {
    recommandations.push({
      type: "filiere",
      titre: "Orientation au lycée",
      contenu: "Tu pourras choisir entre la voie générale, technologique ou professionnelle."
    });
  }
  else if (userData.niveau === 'lycee') {
    recommandations.push({
      type: "etablissement",
      titre: "Établissements recommandés",
      contenu: "Lycée Louis-le-Grand, Lycée Henri-IV, Lycée international de Lyon"
    });
    
    recommandations.push({
      type: "formation",
      titre: "Formations préparatoires",
      contenu: "CPGE (Classes Préparatoires aux Grandes Écoles) si tu vises les grandes écoles"
    });
  }
  else {
    recommandations.push({
      type: "universite",
      titre: "Universités recommandées",
      contenu: "Sorbonne Université, Université Paris-Saclay, Université PSL"
    });
    
    recommandations.push({
      type: "master",
      titre: "Masters spécialisés",
      contenu: "Consulte les masters en lien avec tes centres d'intérêt"
    });
  }
  
  return recommandations;
}
// Mapping complet des spécialités technologiques
export const mappingSpecialitesTechno = {
  "F1": "Génie mécanique",
  "F2": "Génie électrique",
  "F3": "Génie civil",
  "F4": "Génie industriel",
  "G1": "Administration et gestion",
  "G2": "Commerce et vente",
  "G3": "Comptabilité et finance"
};

// Mapping des spécialités générales
export const mappingSpecialitesGenerales = {
  "Mathématiques": "Mathématiques",
  "Physique-Chimie": "Physique-Chimie",
  "SVT": "Sciences de la Vie et de la Terre",
  "Littérature": "Littérature et humanités"
};