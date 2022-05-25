import PropTypes from 'prop-types';
import Player from '../Player';

export default function GoalKeepers({ goalKeepers }) {
    const players = goalKeepers.map((goalKeeper) => <Player key={goalKeeper.player_id} player={goalKeeper} />);

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
