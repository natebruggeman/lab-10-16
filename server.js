const express = require('express');
const PORT = 3000;
const app = express();




const animalController = require('./controllers/animals')



app.use('/animals', animalController);



app.listen(PORT, (req, res) => {
	console.log("it's the " + PORT);
})