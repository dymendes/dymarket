import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXVoFAbeaFjDezJIYTdac-iIaRS2olY9o",
  authDomain: "dymarket-a48c0.firebaseapp.com",
  databaseURL: "https://dymarket-a48c0-default-rtdb.firebaseio.com",
  projectId: "dymarket-a48c0",
  storageBucket: "dymarket-a48c0.appspot.com",
  messagingSenderId: "1038330194163",
  appId: "1:1038330194163:web:29f4295c4d41765f97ef86",
  measurementId: "G-WC633LCMRQ"
};

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
