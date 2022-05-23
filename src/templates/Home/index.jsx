import { useContext } from 'react';

import Header from '../../components/Header';
import MainContainer from '../../containers/MainContainer';
import CountriesContainer from '../../containers/CountriesContainer';

import AppContext from '../../AppContext';

import './style.css';

export default function Home() {
    const { allCountries } = useContext(AppContext);

    return (
        <div className="Home">
            <Header numberOfCountries={allCountries} />
            <MainContainer>
                <CountriesContainer />
            </MainContainer>
        </div>
    );
}
