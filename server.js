const express = require("express");
const cors = require("cors");
const arrayRoutes = require("./routes/arrayRoutes");
const infoRoutes = require("./routes/infoRoutes");

const app = express();
const PORT = 8045;

// Configure CORS
app.use(cors({ origin: "*", methods: ["GET", "POST"], allowedHeaders: ["Content-Type"] }));
app.use(express.json());

// Routes
app.use("/array", arrayRoutes);
app.use("/info", infoRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send("Welcome to the DSA server! 🚀");
});

// Handle 404 (Not Found) for any undefined routes
app.use((req, res) => {
    res.status(404).send("Oops! Route not found.");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}. Access it at http://localhost:${PORT}`);
});
