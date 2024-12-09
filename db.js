const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Ensure the environment variable is correctly accessed
    const dbURI = process.env.Mongodb_APP_API_URL;

    if (!dbURI) {
      throw new Error('MongoDB connection string is not defined in environment variables');
    }

    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

