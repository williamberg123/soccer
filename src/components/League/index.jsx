import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default function League({ league_name, league_logo, league_season, league_id }) {
    return (
        <div className="League">
            <img src={league_logo} alt={league_name} />
            <div className="League-info">
                <h3>{league_name}</h3>
                <p>{league_season}</p>
            </div>
            <Link to={`/soccer/league/standing?id=${league_id}`}>
                CLASSIFICAÇÃO
            </Link>
            <Link to={`/soccer/league/topscores?id=${league_id}`}>
                ARTILHEIROS
            </Link>
        </div>
    );
}

League.propTypes = {
    league_name: PropTypes.string.isRequired,
    league_logo: PropTypes.string.isRequired,
    league_season: PropTypes.string.isRequired,
    league_id: PropTypes.string.isRequired,
};
