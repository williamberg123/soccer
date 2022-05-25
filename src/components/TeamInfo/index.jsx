import { useContext } from 'react';

import TeamPageContext from '../../templates/TeamPage/TeamPageContext';

import './style.css';

export default function TeamInfo() {
    const { teamInfo } = useContext(TeamPageContext);
    const { team_name, team_badge } = teamInfo;

    return (
        <div className="TeamInfo">
            <img src={team_badge} alt={team_name} />
            <h2>{team_name.toUpperCase()}</h2>
        </div>
    );
}
