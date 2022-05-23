import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getCountryCompetions from '../../utils/getCountryCompetions';

export default function CountryPage() {
    const [ countryCompetitions, setCountryCompetitions ] = useState(null);

    const params = useParams('/soccer/country/:countryId');

    const loadCountryCompetions = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const competitions = await getCountryCompetions(apiKey, params.countryId);

        setCountryCompetitions(competitions.data);
    };

    useEffect(() => {
        loadCountryCompetions();
    }, []);

    return (
        <div className="CountryPage">
            <h1>country</h1>
        </div>
    );
}
