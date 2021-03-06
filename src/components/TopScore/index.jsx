import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

export default function TopScore({ topScore }) {
    const { goals, player_key, player_name, player_place, team_name, team_key } = topScore;

    const teamName = team_name.toLowerCase()
    .replace(' ', '-').replace('ã', 'a').replace('á', 'a')
    .replace('%20', '-')
    .replace('ç', 'c')
    .replace('é', 'e')
    .replace('í', 'i');

    return (
        <div className="TopScore">
            <h3>
                {player_place}
                <Link to={`/soccer/player?id=${player_key}`}>
                    {player_name}
                </Link>
            </h3>
            <p>{goals} gols</p>
            <img src={`https://apiv3.apifootball.com/badges/${team_key}_${teamName}.jpg`} alt="img" />
        </div>
    );
}

TopScore.propTypes = {
    topScore: PropTypes.instanceOf(Object).isRequired,
};
