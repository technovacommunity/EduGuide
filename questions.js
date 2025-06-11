// Questions adaptées à chaque niveau d'études
const questions = {
  college: [
    {
      id: "niveau",
      texte: "Dans quelle classe es-tu actuellement ?",
      options: ["6ème", "5ème", "4ème", "3ème"],
      type: "choix_simple"
    },
    {
      id: "notes",
      texte: "Quelles sont tes moyennes principales cette année ? (Format: Mathématiques:13, Français:12, etc.)",
      type: "champs_texte"
    },
    {
      id: "metiers",
      texte: "Quels métiers t'intéressent ? (Sépare par des virgules)",
      type: "champs_texte"
    },
    {
      id: "passions",
      texte: "Quelles sont tes passions ou centres d'intérêt ?",
      type: "champs_texte"
    }
  ],
  
  lycee: [
    {
      id: "niveau",
      texte: "Dans quelle classe es-tu actuellement ?",
      options: ["Seconde", "Première", "Terminale"],
      type: "choix_simple"
    },
    {
      id: "serie",
      texte: "Quelle série suis-tu ?",
      options: ["Générale", "Technologique", "Professionnelle"],
      type: "choix_simple"
    },
    {
      id: "notes",
      texte: "Quelles sont tes moyennes principales cette année ? (Format: Mathématiques:14, Physique:13, etc.)",
      type: "champs_texte"
    },
    {
      id: "specialites",
      texte: "Quelles spécialités as-tu choisies ?",
      type: "champs_texte"
    },
    {
      id: "metiers",
      texte: "Quels métiers t'intéressent ? (Sépare par des virgules)",
      type: "champs_texte"
    }
  ],
  
  universite: [
    {
      id: "niveau",
      texte: "Quel est ton niveau d'études actuel ?",
      options: ["Licence 1", "Licence 2", "Licence 3", "Master 1", "Master 2", "Doctorat"],
      type: "choix_simple"
    },
    {
      id: "filiere",
      texte: "Dans quelle filière es-tu actuellement ?",
      type: "champs_texte"
    },
    {
      id: "notes",
      texte: "Quelles sont tes moyennes principales ? (Format: Matière1:14, Matière2:13, etc.)",
      type: "champs_texte"
    },
    {
      id: "metiers",
      texte: "Vers quels métiers souhaites-tu t'orienter ? (Sépare par des virgules)",
      type: "champs_texte"
    },
    {
      id: "experiences",
      texte: "As-tu des expériences professionnelles ou stages ? Décris-les brièvement.",
      type: "champs_texte"
    }
  ]
};

export default questions;