import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from 'react-js-loader';

import Header from '../../components/Header';
import RenderIf from '../../components/RenderIf';
import MainContainer from '../../containers/MainContainer';

import getPlayerInfo from '../../utils/getPlayerInfo';

import './style.css';
import PlayerInfoList from '../../components/PlayerInfoList';

export default function PlayerPage() {
    const [ playerInfo, setPlayerInfo ] = useState(null);

    const [ queryStrings ] = useSearchParams();

    const loadPlayerInfo = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const info = await getPlayerInfo(apiKey, queryStrings.get('id'));

        setPlayerInfo(info.data[info.data.length - 1]);
    };

    const loadOptionalImage = (e) => {
        e.target.setAttribute('src', 'https://apiv3.apifootball.com/badges/players/100275_gavi.jpg');
    };

    useEffect(() => {
        loadPlayerInfo();
    }, []);

    const teamName = playerInfo?.team_name.toLowerCase()
    .replace(' ', '-').replace('ã', 'a').replace('á', 'a')
    .replace('%20', '-')
    .replace('ç', 'c')
    .replace('é', 'e')
    .replace('í', 'i');

    return (
        <div className="PlayerPage">
            <RenderIf condition={ !playerInfo }>
                <Loader type="spinner-default" bgColor="#000000" size={70} />
            </RenderIf>

            <RenderIf condition={ !!playerInfo }>
                <Header>
                    <div className="player-info">
                        <img onError={ loadOptionalImage } src={playerInfo?.player_image} alt={playerInfo?.player_name} />
                        <h3>
                            {playerInfo?.player_name}
                        </h3>
                    </div>
                    <div className="team-info">
                        <img src={`https://apiv3.apifootball.com/badges/${playerInfo?.team_key}_${teamName}.jpg`} alt="" />
                        <p>{playerInfo?.team_name}</p>
                    </div>
                </Header>

                <MainContainer>
                    <PlayerInfoList playerInfo={playerInfo} />
                </MainContainer>

            </RenderIf>
        </div>
    );
}
