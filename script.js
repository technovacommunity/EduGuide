import { formations} from './data/formations.js';
import { questions} from './data/questions.js';
import { parseNotes, calculateMoyenne} from './utils.js';

// Éléments DOM
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// État de la conversation
let conversationState = {
  etape: 0,
  niveau: null,
  userData: {},
  questions: []
};

// Normaliser les réponses (évite les fautes de frappe)
function normalizeResponse(text) {
  if (!text) return '';
  return text.toLowerCase()
.replace(/é|è|ê/g, 'e')
.replace(/\s+/g, ' ')
.trim();
}

// Démarrer le chatbot
function startChat() {
  addMessage("Bonjour! Je suis OrientaBot, ton assistant d'orientation. Pour commencer, quel est ton niveau d'études?", 'bot');
  addMessage("(Collège, Lycée, Université)", 'bot');
  conversationState.etape = 1;
}

// Ajouter un message dans l'historique
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', ${sender}-message);
  messageDiv.textContent = text;
  chatHistory.appendChild(messageDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Traiter la réponse de l'utilisateur
function processAnswer(answer) {
  switch (conversationState.etape) {
    case 1:
      handleNiveau(answer);
      break;
    case 2:
      handleQuestion(answer);
      break;
    case 3:
      handleResults(answer);
      break;
    default:
      console.error('Étape de conversation inconnue:', conversationState.etape);
}
}

// Vérifier et assigner le niveau d'études correctement
function handleNiveau(answer) {
  const normalized = normalizeResponse(answer);
  const niveauxMap = {
    'college': 'collège',
    'lycee': 'lycée',
    'universite': 'université'
};

  const niveauTrouve = Object.keys(niveauxMap).find(key => normalized.includes(key));

  if (niveauTrouve) {
    const niveau = niveauxMap[niveauTrouve];
    conversationState.niveau = niveau;
    conversationState.userData.niveau = niveau;

    if (questions[niveau] && Array.isArray(questions[niveau])) {
      conversationState.questions = [...questions[niveau]];
      conversationState.etape = 2;

      addMessage(Vous: ${answer}, 'user');
      askNextQuestion();
} else {
      addMessage("Désolé, une erreur technique est survenue. Veuillez réessayer plus tard.", 'bot');
}
} else {
    addMessage("Je n'ai pas compris. Choisis entre: Collège, Lycée ou Université", 'bot');
}
}

// Poser la prochaine question
function askNextQuestion() {
  if (conversationState.questions.length> 0) {
    const question = conversationState.questions.shift();
    addMessage(Bot: ${question.texte}, 'bot');

    if (question.options && question.options.length> 0) {
      question.options.forEach(option => {
        addMessage(- ${option}, 'bot');
});
}
} else {
    conversationState.etape = 3;
    showRecommendations();
}
}

// Gestion de l’envoi du message utilisateur
function handleUserSend() {
  const message = userInput.value.trim();
  if (message) {
    addMessage(Vous: ${message}, 'user');
    userInput.value = '';
    setTimeout(() => processAnswer(message), 100);
}
}

// Événements
sendBtn.addEventListener('click', handleUserSend);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleUserSend();
    // Démarrer le chatbot après chargement
  if (document.readyState === 'complete') {
    startChat();
  } else {
    document.addEventListener('DOMContentLoaded', startChat);
  }
