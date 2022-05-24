import { useContext } from 'react';
import CountryPageContext from '../../templates/CountryPage/CountryPageContext';
import Competition from '../Competition';

import './style.css';

export default function CompetitionsList() {
    const { countryCompetitions } = useContext(CountryPageContext);

    const competitionsChildren = countryCompetitions.map(({ league_id, ...rest }) => {
        if (rest.league_logo.includes('.png')) {
            return (
                <Competition
                    key={league_id}
                    {...rest}
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
