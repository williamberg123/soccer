import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

export default function Player({ player }) {
    const loadOptionalImage = (e) => {
        e.target.setAttribute('src', 'https://apiv3.apifootball.com/badges/players/100275_gavi.jpg');
    };

    const { player_image, player_name, player_age, player_number, player_id } = player;

    return (
        <div className="Player">
            <Link to={`/soccer/player?id=${player_id}`}>
                <div className="Player-title">
                    <img onError={ loadOptionalImage } src={player_image} alt="sem foto" />
                    <h3>{player_name} <span className="Player-number">{player_number}</span></h3>
                </div>
                <p>{player_age} anos</p>
            </Link>
        </div>
    );
}

Player.propTypes = {
    player: PropTypes.instanceOf(Object).isRequired,
};
