import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';//auth
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBzlEKY9_65bnLM6CkBSyIKGKC8dVskMWc",
    authDomain: "test123-a5336.firebaseapp.com",
    projectId: "test123-a5336",
    storageBucket: "test123-a5336.appspot.com",
    messagingSenderId: "766966769939",
    appId: "1:766966769939:web:d27df69acce740c0df12e6",
    databaseURL: "https://test123-a5336-default-rtdb.firebaseio.com",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getDatabase(app)

  export { auth,db}





