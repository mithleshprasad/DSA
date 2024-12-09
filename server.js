// const express = require("express");
// const cors = require("cors");
// const arrayRoutes = require("./routes/arrayRoutes");
// const infoRoutes = require("./routes/infoRoutes");

// const app = express();
// const PORT = 8045;

// // Configure CORS
// app.use(cors({ origin: "*", methods: ["GET", "POST"], allowedHeaders: ["Content-Type"] }));
// app.use(express.json());

// // Routes
// app.use("/array", arrayRoutes);
// app.use("/info", infoRoutes);

// // Root Route
// app.get('/', (req, res) => {
//     res.send("Welcome to the DSA server! 🚀");
// });

// // Handle 404 (Not Found) for any undefined routes
// app.use((req, res) => {
//     res.status(404).send("Oops! Route not found.");
// });

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}. Access it at http://localhost:${PORT}`);
// });



const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const arrayRoutes = require("./routes/arrayRoutes");
const infoRoutes = require("./routes/infoRoutes");

// Environment Configuration
require("dotenv").config(); // To load environment variables from .env file

const app = express();
const PORT = 8045;

// MongoDB Connection
const connectDB = async () => {
  try {
    const dbURI = process.env.Mongodb_APP_API_URL; // Ensure this is defined in your .env file
    if (!dbURI) {
      throw new Error("MongoDB connection string is not defined in environment variables");
    }
    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

// Call the MongoDB connection function
connectDB();

// Middleware
app.use(cors({ origin: "*", methods: ["GET", "POST"], allowedHeaders: ["Content-Type"] }));
app.use(express.json());

// Routes
app.use("/array", arrayRoutes);
app.use("/info", infoRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the DSA server! 🚀");
});

app.use((req, res) => {
  res.status(404).send("Oops! Route not found.");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. Access it at http://localhost:${PORT}`);
});
