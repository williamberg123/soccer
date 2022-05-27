import PropTypes from 'prop-types';

import './style.css';

export default function PlayerInfoList({ playerInfo }) {
    const {
        player_age, player_goals, player_assists, player_number, player_red_cards,
        player_yellow_cards, player_type, player_injured,
    } = playerInfo;

    const playerType = () => {
        if (player_type === 'Goalkeepers') return 'Goleiro';
        if (player_type === 'Defenders') return 'Zagueiro';
        if (player_type === 'Midfielders') return 'Meio-campo';
        if (player_type === 'Forwards') return 'Atacante';
    };

    return (
        <div className="PlayerInfoList">
            <p>{playerType()}</p>
            <p>{player_age} anos</p>
            <p>Camisa {player_number}</p>
            <p>{player_goals} gols na temporada</p>
            <p>{player_assists} assistências na temporada</p>
            <p>{player_red_cards} cartões vermelhos na temporada</p>
            <p>{player_yellow_cards} cartões amarelos na temporada</p>
            <p>
                {
                    player_injured === 'Yes'
                    ? 'Jogador lesionado'
                    : 'Não lesionado'
                }
            </p>
        </div>
    );
}

PlayerInfoList.propTypes = {
    playerInfo: PropTypes.instanceOf(Object).isRequired,
};
