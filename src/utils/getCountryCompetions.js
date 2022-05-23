import axios from 'axios';

const getCountryCompetions = async (apiKey, country_id) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=${apiKey}`)
);
export default getCountryCompetions;
