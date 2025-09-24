const express = require('express');
const path = require('path');
const { getPublicHolidays, getLocation } = require("./controller/apiController")
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.enable('trust proxy');

// Routes
app.get('api/holidays/public/:countryCode/:year', getPublicHolidays);
app.get('api/location', getLocation);

// Start the Server 
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});