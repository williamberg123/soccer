import axios from 'axios';

const getStanding = (apiKey, league_id) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=${league_id}&APIkey=${apiKey}`)
);
export default getStanding;
