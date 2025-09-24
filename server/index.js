const axios = require('axios');
require('dotenv').config();
const country = "IN";
const year = 2025;
const month = 2;
const API_KEY = process.env.API_KEY
console.log(API_KEY);
async function holidays() {

    try {
        const response = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=${country}&year=2025`)
        const data = response.json();
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }
}

holidays();