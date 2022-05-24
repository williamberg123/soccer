import { useContext } from 'react';

import Country from '../Country';
import AppContext from '../../AppContext';
import toFilterCountries from '../../utils/toFilterCountries';

import './style.css';

export default function CountriesList() {
    const { allCountries, searchedValue } = useContext(AppContext);

    const filteredCountries = toFilterCountries(allCountries, searchedValue);

    const countries = filteredCountries.map(({ country_id, country_name, country_logo }) => (
        <Country
            key={country_name}
            country_id={country_id}
            country_name={country_name}
            country_logo={country_logo}
        />
    ));

    return (
        <div className="CountriesList">
            {countries}
        </div>
    );
}
