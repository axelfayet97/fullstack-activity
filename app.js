const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Thing = require('./modles/Thing');

mongoose.connect('mongodb+srv://axel_fayet:password1234@cluster0.ycqur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(() => console.log('Connexion à MongoDB échouée'));

const app = express();

app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());

// MIDDLEWARE
app.get('/api/products', (req, res, next) => {
    // Retourne produit sous {products : Product[]}
});

app.get('/api/products/:id', (req, res, next) => {
    // Retourne le produit avec le _id fourni sous la forme {products : Product[]}
});

app.post('/api/products', (req, res, next) => {
    // Crée un nouveau product dans la bdd
    // corps de requete sous forme : "name": string, "description": string, "price": number, "inStock": boolean
    // Donc delete ID puis ...
});



module.exports = app;