const functions = require("firebase-functions");
const firebase = require("firebase");
const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json({ extended: false }));

const firebaseConfig = {
    apiKey: "AIzaSyDKpz7Q-WwLKiDwxdk4NJ-_DH8yPAruNXE",
    authDomain: "st-ranac.firebaseapp.com",
    databaseURL: "https://st-ranac.firebaseio.com",
    projectId: "st-ranac",
    storageBucket: "st-ranac.appspot.com",
    messagingSenderId: "895798359907",
    appId: "1:895798359907:web:510fc11e70dbb2a1e8c556",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//newsletter
const newsLetter = async (req, res) => {
    try {
        await db.collection("newsletters").add({ email: req.body.email });
        return res.json({
            msg: "Thank you for subscribing to our newsletter!",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

//contact form
const contact = async (req, res) => {
    try {
        await db.collection("contactForm").add({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        return res.json({
            msg:
                "Thank you for contacting me. I will respond to you as soon as possible.",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

//order
const order = async (req, res) => {
    try {
        await db.collection("order").add({
            product: req.body.product,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            address: req.body.address,
        });
        return res.json({
            msg:
                "Thank you for ordering our product. We will contact you via email to confirm your order and inform you about shipping details.",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

app.post("/order", order);
app.post("/contact", contact);
app.post("/newsletter", newsLetter);
exports.api = functions.region("europe-west1").https.onRequest(app);
