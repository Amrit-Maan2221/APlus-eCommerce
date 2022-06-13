const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
	if (req.body.password.length < 8) {
		res.status(500).json("Password Length used 8 or more");
	}

	const newUser = new User({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString(),
	});

	try {
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

/**
 * Export the router
 * Part 3 OF USING EXPRESS ROUTER
 */
module.exports = router;
