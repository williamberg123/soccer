import { useContext } from 'react';
import Loader from 'react-js-loader';

import AppContext from '../../AppContext';
import CountriesList from '../../components/CountriesList';
import RenderIf from '../../components/RenderIf';

import './style.css';

export default function CountriesContainer() {
    const { allCountries } = useContext(AppContext);

    return (
        <div className="CountriesContainer">
            <RenderIf condition={ !allCountries }>
                <Loader type="spinner-default" bgColor="#000000" size={70} />
            </RenderIf>
            <RenderIf condition={ !!allCountries }>
                <CountriesList />
            </RenderIf>
        </div>
    );
}
