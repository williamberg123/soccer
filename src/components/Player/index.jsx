import PropTypes from 'prop-types';

import './style.css';

export default function Player({ goalKeeper }) {
    const { player_image, player_name, player_age, player_number } = goalKeeper;

    return (
        <div className="Player">
            <div className="Player-title">
                <img src={player_image} alt="sem foto" />
                <h3>{player_name}</h3>
            </div>
            <p>Camisa {player_number}</p>
            <p>{player_age} anos</p>
        </div>
    );
}

Player.propTypes = {
    goalKeeper: PropTypes.instanceOf(Object).isRequired,
};
