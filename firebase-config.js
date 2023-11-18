import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
        apiKey: "AIzaSyCJ7v-dM_MMZ5cFyPZvq_nXP6Q9cowARHU",
        authDomain: "todolist-fb8ec.firebaseapp.com",
        databaseURL: "https://todolist-fb8ec-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "todolist-fb8ec",
        storageBucket: "todolist-fb8ec.appspot.com",
        messagingSenderId: "1064224599646",
        appId: "1:1064224599646:web:97732c6ab4435a885b0ecf"
    };

const app = initializeApp(firebaseConfig);

export default app;
    