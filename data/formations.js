// Fichier contenant toutes les données sur les formations
const formations = {
  college: {
    filieres: [
      {
        id: "college_general",
        nom: "Enseignement Général",
        description: "Parcours général préparant au lycée",
        prerequis: { moyenne: 10 },
        metiers: ["Divers métiers nécessitant un bac+2 minimum"]
      }
    ]
  },
  
  lycee: {
    filieres: [
      {
        id: "lycee_general",
        nom: "Bac Général",
        specialites: ["Mathématiques", "Physique-Chimie", "SVT","Littérature"],
        prerequis: { moyenne: 11 },
        metiers: ["Études supérieures", "Classes préparatoires"]
      },
      {
        id: "lycee_techno",
        nom: "Bac Technologique",
        specialites: ["F1", "F2", "F3", "F4", "G1", "G2", "G3"],
        prerequis: { moyenne: 10 },
        metiers: ["BTS", "DUT", "Écoles spécialisées"]
      },
      {
        id: "lycee_pro",
        nom: "Bac Professionnel",
        specialites: ["Commerce", "Électricité", "Mécanique", "Santé", "Hôtellerie", "Agriculture"],
        prerequis: { moyenne: 9 },
        metiers: ["Entrée directe dans la vie active", "Mention complémentaire"]
      }
    ]
  },
  
  universite: {
    filieres: [
      {
        id: "droit",
        nom: "Droit",
        prerequis: { moyenne: 12, matieres: ["Français", "Histoire"] },
        metiers: ["Avocat", "Juriste", "Notaire", "Juge"]
      },
      {
        id: "eco_gestion",
        nom: "Économie et Gestion",
        prerequis: { moyenne: 13, matieres: ["Mathématiques", "SES"] },
        metiers: ["Économiste", "Comptable", "Responsable financier"]
      },
      {
        id: "sciences",
        nom: "Sciences Fondamentales",
        prerequis: { moyenne: 14, matieres: ["Mathématiques", "Physique"] },
        metiers: ["Chercheur", "Enseignant", "Ingénieur de recherche"]
      },
      {
        id: "informatique",
        nom: "Informatique",
        prerequis: { moyenne: 13, matieres: ["Mathématiques"] },
        metiers: ["Développeur", "Administrateur réseau", "Data scientist"]
      },
      {
        id: "lettres",
        nom: "Lettres et Langues",
        prerequis: { moyenne: 11, matieres: ["Français", "Langues"] },
        metiers: ["Enseignant", "Traducteur", "Éditeur"]
      },
      {
        id: "sante",
        nom: "Santé",
        prerequis: { moyenne: 15, matieres: ["SVT", "Physique"] },
        metiers: ["Médecin", "Pharmacien", "Dentiste"]
      }
    ]
  }
};

export default formations;
