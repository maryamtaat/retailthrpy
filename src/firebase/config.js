import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcfu1I9r0WZ-1PaFLXgzlNQvV9DN4NgYg",
  authDomain: "",
  databaseURL: "",
  projectId: "retailthrpy-515aa",
  storageBucket: "retailthrpy-515aa.appspot.com",
  messagingSenderId: "486056323704",
  appId: "1:486056323704:ios:abf07ff2b1eec093825b8d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
