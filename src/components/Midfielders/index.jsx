import PropTypes from 'prop-types';
import Player from '../Player';

export default function Midfielders({ midfielders }) {
    const players = midfielders.map((midfielder) => <Player key={midfielder.player_id} player={midfielder} />);

    return (
        <div className="Midfielders">
            <h2>MEIO-CAMPISTAS</h2>
            {players}
        </div>
    );
}

Midfielders.propTypes = {
    midfielders: PropTypes.instanceOf(Array).isRequired,
};
