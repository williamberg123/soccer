import { useContext } from 'react';
import CountryPageContext from '../../templates/CountryPage/CountryPageContext';
import Competition from '../Competition';

import './style.css';

export default function CompetitionsList() {
    const { countryCompetitions } = useContext(CountryPageContext);

    const competitionsChildren = countryCompetitions.map((country) => {
        if (country.league_logo.includes('.png')) {
            return (
                <Competition
                    key={country.league_id}
                    {...country}
                />
            );
        }
    });

    return (
        <div className="CompetitionsList">
            {competitionsChildren}
        </div>
    );
}
