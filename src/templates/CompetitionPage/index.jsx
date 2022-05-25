import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'react-js-loader';

import MainContainer from '../../containers/MainContainer';
import StandingTable from '../../components/StandingTable';
import RenderIf from '../../components/RenderIf';

import getStanding from '../../utils/getStanding';

export default function CompetitionPage() {
    const [ allTeams, setAllTeams ] = useState(null);
    const [ searchParams ] = useSearchParams();

    const loadTeams = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const teams = await getStanding(apiKey, searchParams.get('id'));
        console.log(teams);

        setAllTeams(teams.data);
    };

    useEffect(() => {
        loadTeams();
    }, []);

    return (
        <div className="CompetitionPage">
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
