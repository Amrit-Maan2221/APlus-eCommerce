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

//LOGIN
router.post("/login", async (req, res) => {
	try {
		console.log("Is login request coming");
		console.log(`Email is ${req.body.email}`);

		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			res.status(401).json("Log In Failed");
			return;
		}

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);

		const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

		const inputPassword = req.body.password;
		console.log(`Password is ${req.body.password}`);

		if (originalPassword !== inputPassword) {
			res.status(401).json("Wrong Password");
			return;
		}

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: "3d" }
		);

		const { password, ...others } = user._doc;
		res.status(200).json({ ...others, accessToken });
		return;
	} catch (err) {
		res.status(500).json(err);
	}
});

/**
 * Export the router
 * Part 3 OF USING EXPRESS ROUTER
 */
module.exports = router;
