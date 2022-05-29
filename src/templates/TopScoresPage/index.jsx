import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from 'react-js-loader';

import Header from '../../components/Header';
import MainContainer from '../../containers/MainContainer';
import RenderIf from '../../components/RenderIf';

import getTopScores from '../../utils/getTopScores';

import './style.css';
import TopScoresList from '../../components/TopScoresList';

export default function TopScoresPage() {
    const [ topScores, setTopScores ] = useState(null);

    const [ searchParams ] = useSearchParams();

    const loadTopScores = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const topScoresData = await getTopScores(apiKey, searchParams.get('id'));

        setTopScores(topScoresData.data);
    };

    useEffect(() => {
        loadTopScores();
    }, []);

    return (
        <div className="TopScoresPage">
            <Header>
                <h1>ARTILHEIROS</h1>
            </Header>
            <MainContainer>
                <RenderIf condition={ !topScores }>
                    <Loader type="spinner-default" bgColor="#000000" size={70} />
                </RenderIf>
                <RenderIf condition={ !!topScores }>
                    <TopScoresList topScores={ topScores } />
                </RenderIf>
            </MainContainer>
        </div>
    );
}
