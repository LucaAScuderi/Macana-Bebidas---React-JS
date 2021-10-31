import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCgCvyQ2ukaFDU7h0hwgFOFHa4OKxm5i7A",
  authDomain: "macanabebidas.firebaseapp.com",
  projectId: "macanabebidas",
  storageBucket: "macanabebidas.appspot.com",
  messagingSenderId: "1077254058925",
  appId: "1:1077254058925:web:9cec2e8adce9392e996724",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};
