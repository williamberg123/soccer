import axios from 'axios';

const getTeams = (apiKey, league_id) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_teams&league_id=${league_id}&APIkey=${apiKey}`)
);
export default getTeams;
