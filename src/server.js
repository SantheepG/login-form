// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Create the MongoDB connection string
const connectionString = `mongodb+srv://gshantheep:cinadoc@cluster0.cz7xwta.mongodb.net/Users?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema and model for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Specifying the collection name
const User = mongoose.model("User", userSchema, "user");

// Enabling CORS
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3001",
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

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
