import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CompetitionsContainer from '../../containers/CompetitionsContainer';
import MainContainer from '../../containers/MainContainer';

import CountryPageContext from './CountryPageContext';
import getCountryCompetions from '../../utils/getCountryCompetions';

import './style.css';
import Header from '../../components/Header';
import CountryInfo from '../../components/CountryInfo';
import RenderIf from '../../components/RenderIf';

export default function CountryPage() {
    const [ countryCompetitions, setCountryCompetitions ] = useState(null);
    const [ countryInfo, setCountryInfo ] = useState(null);

    const [ searchParams ] = useSearchParams();

    const loadCountryCompetions = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const competitions = await getCountryCompetions(apiKey, searchParams.get('id'));
        console.log(competitions);

        const { country_logo, country_name } = competitions.data[0];

        setCountryCompetitions(competitions.data);
        setCountryInfo({ country_logo, country_name });
    };

    useEffect(() => {
        loadCountryCompetions();
    }, []);

    const memoizedCountryPageContext = useMemo(
        () => ({
            countryCompetitions,
        }),
        [countryCompetitions],
    );

    return (
        <div className="CountryPage">
            <CountryPageContext.Provider value={ memoizedCountryPageContext }>
                <Header>
                    <RenderIf condition={ !!countryInfo }>
                        <CountryInfo
                            {...countryInfo}
                        />
                    </RenderIf>
                    <h1>SOCCER API</h1>
                </Header>
                <MainContainer>
                    <CompetitionsContainer
                        competitions={countryCompetitions}
                    />
                </MainContainer>
            </CountryPageContext.Provider>
        </div>
    );
}
