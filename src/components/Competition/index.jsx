import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default function Competition({ league_name, league_logo, league_season, league_id }) {
    return (
        <Link to={`/soccer/competition?id=${league_id}`}>
            <div className="Competition">
                <img src={league_logo} alt={league_name} />
                <div className="Competition-info">
                    <h3>{league_name}</h3>
                    <p>{league_season}</p>
                </div>
            </div>
        </Link>
    );
}

Competition.propTypes = {
    league_name: PropTypes.string.isRequired,
    league_logo: PropTypes.string.isRequired,
    league_season: PropTypes.string.isRequired,
    league_id: PropTypes.string.isRequired,
};
