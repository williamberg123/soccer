import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TableItem(
    {
        overall_league_position, team_badge, team_name, overall_league_W,
        overall_league_L, overall_league_D, overall_league_PTS, overall_league_GF,
        overall_league_GA, team_id,
    },
) {
    return (
        <tr>
            <td>
                <Link to={`/soccer/team?id=${team_id}`}>
                    {overall_league_position}
                    <img src={team_badge} alt={team_name} />
                    {team_name}
                </Link>
            </td>
            <td>{overall_league_PTS}</td>
            <td>{overall_league_W}</td>
            <td>{overall_league_D}</td>
            <td>{overall_league_L}</td>
            <td>{overall_league_GF}</td>
            <td>{overall_league_GA}</td>
            <td>{overall_league_GF - overall_league_GA}</td>
        </tr>
    );
}

TableItem.propTypes = {
    overall_league_position: PropTypes.string.isRequired,
    team_badge: PropTypes.string.isRequired,
    team_name: PropTypes.string.isRequired,
    overall_league_W: PropTypes.string.isRequired,
    overall_league_L: PropTypes.string.isRequired,
    overall_league_D: PropTypes.string.isRequired,
    overall_league_PTS: PropTypes.string.isRequired,
    overall_league_GF: PropTypes.string.isRequired,
    overall_league_GA: PropTypes.string.isRequired,
    team_id: PropTypes.string.isRequired,
};
