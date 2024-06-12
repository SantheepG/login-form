const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // to use environment variables

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection string
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/app";

// Connect to MongoDB
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Create a schema and model for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Specifying the collection name
const User = mongoose.model("User", userSchema, "users");

// Enabling CORS
const corsOptions = {
  origin: "http://localhost:3000", // Update this to match your client's port if different
};

app.use(cors(corsOptions));
// Defining API routes
app.use(express.json());

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Creating a new user object
  const newUser = new User({ name, email, password });

  try {
    // Saving the user to the database
    await newUser.save();
    res.status(200).send("User saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving user to database");
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Finding the user in the database
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).send("Login successful");
    } else {
      res.status(400).send("Invalid email or password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
