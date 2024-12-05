import express from "express";
import bodyParser from "body-parser";
import { DBConnect } from "./DBConnect.js";
import { Register, Login } from "./controller/user.controller.js"
import dotenv from "dotenv";
const app = express();
const port = 5000;

dotenv.config();
// Use body-parser to parse JSON data
app.use(bodyParser.json());  

// Connect to the database
DBConnect();

// Define routes for registration and login
app.post("/register", Register);
app.post("/login", Login);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
