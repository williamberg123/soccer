import axios from 'axios';

const getPlayerInfo = async (apiKey, player_id) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_players&player_id=${player_id}&APIkey=${apiKey}`)
);
export default getPlayerInfo;
