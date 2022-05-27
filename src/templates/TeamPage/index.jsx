import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'react-js-loader';

import Header from '../../components/Header';
import MainContainer from '../../containers/MainContainer';
import TeamInfo from '../../components/TeamInfo';
import RenderIf from '../../components/RenderIf';

import TeamPageContext from './TeamPageContext';

import getTeamInfo from '../../utils/getTeamInfo';
import TeamInfoList from '../../components/TeamInfoList';

import './style.css';

export default function TeamPage() {
    const [ teamInfo, setTeamInfo ] = useState(null);

    const [ queryStrings ] = useSearchParams();

    const loadTeamInfo = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const team = await getTeamInfo(apiKey, queryStrings.get('id'));

        setTeamInfo(team.data[team.data.length - 1]);
    };

    useEffect(() => {
        loadTeamInfo();
    }, []);

    const memoizedTeamPageContext = useMemo(() => ({ teamInfo }), [teamInfo]);

    return (
        <div className="TeamPage">
            <RenderIf condition={ !teamInfo }>
                <Loader type="spinner-default" bgColor="#000000" size={70} />
            </RenderIf>
            <RenderIf condition={ !!teamInfo }>
                <TeamPageContext.Provider value={ memoizedTeamPageContext }>
                    <Header>
                        <TeamInfo />
                    </Header>
                    <MainContainer>
                        <TeamInfoList />
                    </MainContainer>
                </TeamPageContext.Provider>
            </RenderIf>
        </div>
    );
}
