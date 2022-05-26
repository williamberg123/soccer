import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'react-js-loader';

import MainContainer from '../../containers/MainContainer';
import StandingTable from '../../components/StandingTable';
import RenderIf from '../../components/RenderIf';

import getStanding from '../../utils/getStanding';
import Header from '../../components/Header';

import './style.css';

export default function StandingPage() {
    const [ allTeams, setAllTeams ] = useState(null);
    const [ leagueInfo, setLeagueInfo ] = useState(null);
    const [ searchParams ] = useSearchParams();

    const loadTeams = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const teams = await getStanding(apiKey, searchParams.get('id'));
        console.log(teams);

        if (teams.data.error) {
            window.location.href = '/soccer/error';
        }

        const { league_name, country_name } = teams.data[0];

        setAllTeams(teams.data);
        setLeagueInfo({ league_name, country_name });
    };

    useEffect(() => {
        loadTeams();
    }, []);

    return (
        <div className="StandingPage">
            <Header>
                <h1>{leagueInfo?.country_name}</h1>
                <h2>{leagueInfo?.league_name}</h2>
            </Header>
            <MainContainer>
                <RenderIf condition={!allTeams}>
                    <Loader type="spinner-default" bgColor="#000000" size={70} />
                </RenderIf>
                <RenderIf condition={ !!allTeams }>
                    <StandingTable
                        teams={allTeams}
                    />
                </RenderIf>
            </MainContainer>
        </div>
    );
}
