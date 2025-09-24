
const axios = require('axios');
const getPublicHolidays = async (req, res) => {
    const { countryCode, year } = req.params;
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
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
    console.log("getlocattioni route")
    try {
        let ip = req.ip;
        if (ip === '::1' || ip === '127.0.0.1') {
            const { data } = await axios.get('http://ip-api.com/json/8.8.8.8');
            return res.json({ countryCode: data.countryCode });
        }

        const { data } = await axios.get(`http://ip-api.com/json/${ip}`);
        res.json({ countryCode: data.countryCode });
    } catch (error) {
        console.error('Error fetching location:', error.message);
        res.status(500).json({ countryCode: 'US' });
    }
};

module.exports = {
    getPublicHolidays,
    getLocation,
};