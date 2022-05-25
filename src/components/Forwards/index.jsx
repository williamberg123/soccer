import PropTypes from 'prop-types';
import Player from '../Player';

export default function Forwards({ forwards }) {
    const players = forwards.map((forward) => <Player key={forward.player_id} player={forward} />);

    return (
        <div className="Forwards">
            <h2>ATACANTES</h2>
            {players}
        </div>
    );
}

Forwards.propTypes = {
    forwards: PropTypes.instanceOf(Array).isRequired,
};
