import Header from '../../components/Header';
import MainContainer from '../../containers/MainContainer';
import CountriesContainer from '../../containers/CountriesContainer';
import SearchInput from '../../components/SearchInput';

import './style.css';

export default function Home() {
    return (
        <div className="Home">
            <Header>
                <h1>SOCCER API</h1>
                <SearchInput />
            </Header>
            <MainContainer>
                <h2>PAÍSES</h2>
                <CountriesContainer />
            </MainContainer>
        </div>
    );
}
