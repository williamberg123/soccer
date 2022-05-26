import axios from 'axios';

const getTopScores = async (apiKey, league_id) => (
    axios.get(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${league_id}&APIkey=${apiKey}`)
);
export default getTopScores;
