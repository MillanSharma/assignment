import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC4nlCpU3HW239eo9R_9mx_rcyUC1sECrw",
  authDomain: "assignment-project-87b4a.firebaseapp.com",
  projectId: "assignment-project-87b4a",
  storageBucket: "assignment-project-87b4a.appspot.com",
  messagingSenderId: "778891228103",
  appId: "1:778891228103:web:6ba6bd8290f245521fdfe2"
});

export const auth = app.auth();
export default app;
