
const axios = require('axios');


const country = "IN";
const year = 2025;
const month = 2;

async function holidays() {

    const response = await axios.get(`https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=${country}`)
    const data = JSON.parse(response);
    console.log(data);
}

holidays();