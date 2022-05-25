import PropTypes from 'prop-types';
import Player from '../Player';

import './style.css';

export default function GoalKeepers({ goalKeepers }) {
    const players = goalKeepers.map((goalKeeper) => <Player key={goalKeeper.player_id} goalKeeper={goalKeeper} />);

    return (
        <div className="GoalKeepers">
            <h2>GOLEIROS</h2>
            {players}
        </div>
    );
}

GoalKeepers.propTypes = {
    goalKeepers: PropTypes.instanceOf(Array).isRequired,
};
