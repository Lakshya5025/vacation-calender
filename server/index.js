const express = require('express');
const { getPublicHolidays, getLocation } = require("./controller/apiController")
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.enable('trust proxy');

// Routes
app.get('/api/holidays/public/:countryCode/:year', getPublicHolidays);
app.get('/api/location', getLocation);

// Start the Server 
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});