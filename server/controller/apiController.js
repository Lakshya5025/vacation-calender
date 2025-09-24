
const axios = require('axios');
const getPublicHolidays = async (req, res) => {
    console.log("request made to getpublic  holidays")
    const { countryCode, year } = req.params;
    const API_KEY = process.env.API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ message: 'API key is missing.' });
    }
    const url = `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=${countryCode}&year=${year}`;
    try {
        const response = await axios.get(url);
        res.json(response.data.response.holidays);
    } catch (error) {
        console.error('Error fetching public holidays:', error.message);
        res.status(500).json({ message: 'Failed to fetch public holidays.' });
    }
};


const getLocation = async (req, res) => {
    console.log("request made to get location")

    try {
        const { data } = await axios.get('http://ip-api.com/json/');

        if (data.status === 'success') {
            res.json({ countryCode: data.countryCode });
        } else {
            res.status(500).json({ countryCode: 'IN' });
        }
    } catch (error) {
        console.error('Error fetching location:', error.message);
        res.status(500).json({ countryCode: 'IN' });
    }
};

module.exports = {
    getPublicHolidays,
    getLocation,
};