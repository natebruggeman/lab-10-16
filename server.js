const express = require('express');
const PORT = 3000;
const app = express();
const methodOverride = require('method-override')
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));



const animalController = require('./controllers/animals')


console.log("about to use animalsController");
app.use('/animals', animalController);



app.listen(PORT, (req, res) => {
	console.log("it's the " + PORT);
})