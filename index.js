const express = require("express");
const app = express();
const connectDatabase = require("./dbConnection");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

/**
 * Import the Routes
 * Part 4 OF USING EXPRESS ROUTER
 * Part 1, 2 and 3 available in ./routes/auth
 */
const authRoute = require("./routes/auth");

//connecting to database
connectDatabase.connectDatabase();

//Using Middleware express.json() to recongnize incoming request as a JSON Object
app.use(express.json());

app.use(cors());

// *********************************************************test data************************************************
app.get("/api/test", (req, res) => {
	res.send("This is a test that our express is working fine");
	console.log("This is a test that our express is working fine");
});

/**
 * Use the Routes
 * Part 5 OF USING EXPRESS ROUTER
 * Part 1, 2 and 3 available in ./routes/auth
 */
app.use("/api/auth", authRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
	console.log(`Backend server is running! at port: ${process.env.PORT}`);
});
