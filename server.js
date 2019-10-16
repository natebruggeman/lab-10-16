const express = require('express');
const PORT = 3000;
const app = express();
const methodOverride = require('method-override')


app.use(methodOverride('_method'));



const animalController = require('./controllers/animals')



app.use('/animals', animalController);



app.listen(PORT, (req, res) => {
	console.log("it's the " + PORT);
})