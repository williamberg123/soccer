import { useContext } from 'react';

import PlayersList from '../../containers/PlayersList';
import GoalKeepers from '../GoalKeepers';
import Defenders from '../Defenders';
import Midfielders from '../Midfielders';
import Forwards from '../Forwards';

import TeamPageContext from '../../templates/TeamPage/TeamPageContext';

import './style.css';

export default function TeamInfoList() {
    const { teamInfo } = useContext(TeamPageContext);
    const { players } = teamInfo;

    const goalKeepers = players.filter((player) => player.player_type === 'Goalkeepers');
    const defenders = players.filter((player) => player.player_type === 'Defenders');
    const midfielders = players.filter((player) => player.player_type === 'Midfielders');
    const forwards = players.filter((player) => player.player_type === 'Forwards');

    return (
        <div className="TeamInfoList">
            <PlayersList>
                <GoalKeepers goalKeepers={ goalKeepers } />
                <Defenders defenders={ defenders } />
                <Midfielders midfielders={ midfielders } />
                <Forwards forwards={ forwards } />
            </PlayersList>
        </div>
    );
}
