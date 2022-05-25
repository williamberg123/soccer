import PropTypes from 'prop-types';
import TableItem from '../TableItem';

import './style.css';

export default function StandingTable({ teams }) {
    const tableChildren = teams.map((team) => (
        <TableItem
            key={team.team_name}
            {...team}
        />
    ));

    return (
        <table className="StandingTable">
            <thead>
                <tr>
                    <th>CLASSIFICAÇÃO</th>
                    <th>P</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GM</th>
                    <th>GS</th>
                    <th>SG</th>
                </tr>
            </thead>
            <tbody>
                {tableChildren}
            </tbody>
        </table>
    );
}

StandingTable.propTypes = {
    teams: PropTypes.instanceOf(Array).isRequired,
};
