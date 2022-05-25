import PropTypes from 'prop-types';

import './style.css';

export default function Player({ player }) {
    const loadOptionalImage = (e) => {
        e.target.setAttribute('src', 'https://apiv3.apifootball.com/badges/players/100275_gavi.jpg');
    };

    const { player_image, player_name, player_age, player_number } = player;

    return (
        <div className="Player">
            <div className="Player-title">
                <img onError={ loadOptionalImage } src={player_image} alt="sem foto" />
                <h3>{player_name}</h3>
            </div>
            <p>Camisa {player_number}</p>
            <p>{player_age} anos</p>
        </div>
    );
}

Player.propTypes = {
    player: PropTypes.instanceOf(Object).isRequired,
};
