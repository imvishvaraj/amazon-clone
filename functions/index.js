const functions = require('firebase-functions');
const express = require("express"); 
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQdHEC8SGpPYV1LZG3AtV49X5axr2j0ACvYpoTgBXTp2wrx5Ol8zHUm5ZiYU3LmPwkUWwEMe0zT4mKlXV3i27uN00MyJvMzm4');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: "inr",
    });

    // ok - created
    console.log(paymentIntent)
    console.log('client_secret >>> ', paymentIntent.client_secret)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example End Point 
// http://localhost:5001/clone-7261a/us-central1/api
