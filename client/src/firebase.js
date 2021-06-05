// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDKpz7Q-WwLKiDwxdk4NJ-_DH8yPAruNXE",
//     authDomain: "st-ranac.firebaseapp.com",
//     databaseURL: "https://st-ranac.firebaseio.com",
//     projectId: "st-ranac",
//     storageBucket: "st-ranac.appspot.com",
//     messagingSenderId: "895798359907",
//     appId: "1:895798359907:web:510fc11e70dbb2a1e8c556",
// };

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// const newsletters = firestore.collection("newsletters");

// const saveEmail = (email) => {
//     newsletters
//         .doc()
//         .set({ email })
//         .then(() => {
//             console.log("saved");
//         });
// };

// const submitNewsletter = (e) => {
//     e.preventDefault();
//     const email = document.getElementById("news-email").value;
//     saveEmail(email);
//     document.getElementById("news-email").value = "";
// };

// window.addEventListener("load", () => {
//     document
//         .getElementById("newsletter-form")
//         .addEventListener("submit", submitNewsletter);
// });
