import { useContext } from 'react';

import AppContext from '../../AppContext';
import Country from '../../components/Country';

import './style.css';

export default function CountriesContainer() {
    const { allCountries } = useContext(AppContext);

    const countries = !allCountries
    ? null
    : (
        allCountries.map(({ country_id, country_name, country_logo }) => (
            <Country
                key={country_name}
                country_id={country_id}
                country_name={country_name}
                country_logo={country_logo}
            />
        ))
    );

    return (
        <div className="CountriesContainer">
            {countries}
        </div>
    );
}
