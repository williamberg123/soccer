import { useContext } from 'react';

import PlayersList from '../../containers/PlayersList';
import Coach from '../Coach';
import GoalKeepers from '../GoalKeepers';

import TeamPageContext from '../../templates/TeamPage/TeamPageContext';

import './style.css';

export default function TeamInfoList() {
    const { teamInfo } = useContext(TeamPageContext);
    const { coaches, players } = teamInfo;

    const goalKeepers = players.filter((player) => player.player_type === 'Goalkeepers');

    return (
        <div className="TeamInfoList">
            <Coach coach={coaches[0]} />
            <PlayersList>
                <GoalKeepers goalKeepers={goalKeepers} />
            </PlayersList>
        </div>
    );
}
