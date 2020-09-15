## Introduction
This practice tutorial done under [5 Days React JavaScript Challenge](https://www.cleverprogrammer.com/5-day-react-javascript-challenge).

To view video tutorial by Sonny & Quzi, Please do visit - [Clever Progammer](https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ)

## Demo - [Amazon Clone](https://clone-7261a.web.app/)

![Demo Amazon Clone](https://github.com/imvishvaraj/amazon-clone/raw/master/screenshots/amazon-clone%20live%20application%20firebase.png)


-----
## Agenda:
- Full User Interface with React JS
- Basket page/functionality with React Context API
- Deployment to Firebase
- Complete checkout screen functionaliy with ReactJS
- Full Login Functionality with Google Firebase Authentication
- Connect Front End to Firestore DB
- Checkout and Payment page with Stripe frontend
- Deploy Cloud functions to process Payments
- Stored orders for logged in user
- Orders history

---
### Deployment on Firebase:
1. install `npm i -g firebase-tools`
2. If you have not logged to firebase command-line tools then `firebase login`
3. Initialize your firebase projcet `firebase init`
   1. choose _hosting_ by using space bar key to select it and then hit enter.
   2. then select existing project and hit enter
   3. It will ask about which directory to use, then provide `build` 
   4. Provide index.html as Single Page Application (SPA) YES 
4. Then we need to build ReactJS app - `npm run build`
5. ready to deploy - `firebase deploy`

---
### Notes -
##### Create React APP
`npx create-readt-app amazon-clone`

##### Install Material UI and Icons
`npm install @material-ui/core` and `npm install @material-ui/icon`

##### Install React Router (path/Link)
`npm install react-router-dom`

##### Install Stripe (Payment) for ReactJS 
`npm install 'strip/strip-js'` and `npm install '@stripe/react-stripe-js'`

##### Install Moment (for date formating)
`npm install moment`

##### Back-end Required Libraries
`npm install express`
`npm install cors`
`npm install stripe`

##### Build App for Deployment
`firebase deploy --only hosting`
`firebase deploy --only functions`

##### DO NOT USE `firebase deploy` DIRECTLY, IT WILL DEPLOY APPS DIRECTLY.