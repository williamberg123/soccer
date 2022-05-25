import PropTypes from 'prop-types';
import Player from '../Player';

export default function Defenders({ defenders }) {
    const players = defenders.map((defender) => <Player key={defender.player_id} player={defender} />);

    return (
        <div className="Defenders">
            <h2>ZAGUEIROS</h2>
            {players}
        </div>
    );
}

Defenders.propTypes = {
    defenders: PropTypes.instanceOf(Array).isRequired,
};
