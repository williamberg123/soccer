import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from 'react-js-loader';

import MainContainer from '../../containers/MainContainer';

import CountryPageContext from './CountryPageContext';
import getCountryLeagues from '../../utils/getCountryLeagues';

import './style.css';
import Header from '../../components/Header';
import CountryInfo from '../../components/CountryInfo';
import RenderIf from '../../components/RenderIf';
import LeaguesList from '../../components/LeaguesList';

export default function CountryPage() {
    const [ countryLeagues, setCountryLeagues ] = useState(null);
    const [ countryInfo, setCountryInfo ] = useState(null);

    const [ searchParams ] = useSearchParams();

    const loadCountryCompetions = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const leagues = await getCountryLeagues(apiKey, searchParams.get('id'));

        const { country_logo, country_name } = leagues.data[0];

        setCountryLeagues(leagues.data);
        setCountryInfo({ country_logo, country_name });
    };

    useEffect(() => {
        loadCountryCompetions();
    }, []);

    const memoizedCountryPageContext = useMemo(
        () => ({
            countryLeagues,
        }),
        [countryLeagues],
    );

    return (
        <div className="CountryPage">
            <CountryPageContext.Provider value={ memoizedCountryPageContext }>
                <Header>
                    <RenderIf condition={ !!countryInfo }>
                        <CountryInfo
                            {...countryInfo}
                        />
                        <h1>SOCCER API</h1>
                    </RenderIf>
                </Header>
                <MainContainer>
                    <RenderIf condition={ !countryLeagues }>
                        <Loader type="spinner-default" bgColor="#000000" size={70} />
                    </RenderIf>
                    <RenderIf condition={ !!countryLeagues }>
                        <LeaguesList />
                    </RenderIf>
                </MainContainer>
            </CountryPageContext.Provider>
        </div>
    );
}
