const express = require('express');
const router = express.Router();
const Animals = require('../models/animals')




router.get('/', (req, res) => {
	res.render('index.ejs', {
		animals: Animals
	})
})















module.exports = router