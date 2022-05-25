import axios from 'axios';

const getTeamInfo = (apiKey, team_id) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_teams&team_id=${team_id}&APIkey=${apiKey}`)
);
export default getTeamInfo;
