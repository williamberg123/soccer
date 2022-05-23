import axios from 'axios';

const getAllCountries = async (apiKey) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`)
);

export default getAllCountries;
