const express = require('express');
const router = express.Router();
const Animals = require('../models/animals')



console.log("we are inside animalsController")
router.get('/', (req, res) => {
	res.render('index.ejs', {
		animals: Animals
	})
})


router.post('/', (req, res) => {
	// Animals.push(req.body);
	res.redirect('/animals')
})


// router.put('/:index', (req, res) => {
	
// 	Animals[req.params.index] = req.body;

// 	res.redirect('/animals')

// })



router.delete('/:index', (req, res) => {
	Animals.splice(req.params.index, 1);
	console.log("hitting delete route")
	res.redirect('/animals');

})














module.exports = router