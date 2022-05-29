import { useContext } from 'react';

import Loader from 'react-js-loader';

import Header from '../../components/Header';
import MainContainer from '../../containers/MainContainer';
import SearchInput from '../../components/SearchInput';
import RenderIf from '../../components/RenderIf';
import CountriesList from '../../components/CountriesList';

import AppContext from '../../AppContext';

import './style.css';

export default function Home() {
    const { allCountries } = useContext(AppContext);

    return (
        <div className="Home">
            <Header>
                <h1>SOCCER API</h1>
                <SearchInput />
            </Header>
            <MainContainer>
                <h2>PAÍSES</h2>
                <RenderIf condition={ !allCountries }>
                    <Loader type="spinner-default" bgColor="#000000" size={70} />
                </RenderIf>
                <RenderIf condition={ !!allCountries }>
                    <CountriesList />
                </RenderIf>
            </MainContainer>
        </div>
    );
}
