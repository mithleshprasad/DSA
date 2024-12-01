const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8045;

// Configure CORS
const corsOptions = {
    origin: "*", // Allows all origins
    methods: ["GET", "POST"], // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Specify allowed headers
};
app.use(cors(corsOptions)); // Use the CORS middleware
app.use(express.json()); // Parse JSON bodies

// Root Route
app.get('/', (req, res) => {
    res.send("Welcome to the DSA server! 🚀");
});

// Info Route
app.get("/info", (req, res) => {
    res.json({
        status: true,
        message: "JSON server run successful!",
        server: "Express",
    });
});

// Array Route
app.get("/array", (req, res) => {
    const arr = [1, 2, 3, 4, 5, 6];
    const reversedArr = [...arr].reverse(); // Avoid mutating the original array
    res.json({
        status: true,
        array: `Originally array ${arr} <br> Reversed array: ${reversedArr}`,
    });
});

// Handle 404 (Not Found) for any undefined routes
app.use((req, res) => {
    res.status(404).send("Oops! Route not found.");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}. Access it at http://localhost:${PORT}`);
});
