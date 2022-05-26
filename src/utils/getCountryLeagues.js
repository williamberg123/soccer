import axios from 'axios';

const getCountryLeagues = async (apiKey, country_id) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=${apiKey}`)
);
export default getCountryLeagues;
