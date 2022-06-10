const express = require("express");
const app = express();
const connectDatabase = require('./dbConnection');
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();



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



app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend server is running! at port: ${process.env.PORT}`);
});

