import { useContext } from 'react';
import CountryPageContext from '../../templates/CountryPage/CountryPageContext';
import League from '../League';

import './style.css';

export default function LeaguesList() {
    const { countryLeagues } = useContext(CountryPageContext);

    const competitionsChildren = countryLeagues.map((country) => {
        if (country.league_logo.includes('.png')) {
            return (
                <League
                    key={country.league_id}
                    {...country}
                />
            );
        }
    });

    return (
        <div className="LeaguesList">
            {competitionsChildren}
        </div>
    );
}
