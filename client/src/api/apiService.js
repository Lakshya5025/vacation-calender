import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


export const fetchLocation = async () => {
    try {
        const response = await axios.get(`${API_URL}/location`);
        return response.data;
    } catch (error) {
        console.error("Could not fetch location, defaulting to 'US'", error);
        return { countryCode: 'IN' };
    }
};

export const fetchPublicHolidays = async (countryCode, year) => {
    try {
        const response = await axios.get(`${API_URL}/holidays/public/${countryCode}/${year}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching public holidays:', error);
        return [];
    }
};