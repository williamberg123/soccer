import { memo } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.css';

function Country({ country_id, country_name, country_logo }) {
    const loadOptionalImage = (e) => {
        e.target.setAttribute('src', 'https://apiv3.apifootball.com/badges/logo_country/2_intl.png');
    };

    return (
        <Link to={`/soccer/country?id=${country_id}`}>
            <div className="Country">
                <h3>{country_name}</h3>
                <img onError={ loadOptionalImage } src={country_logo} alt={country_name} />
            </div>
        </Link>
    );
}

Country.propTypes = {
    country_id: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
    country_logo: PropTypes.string.isRequired,
};

export default memo(Country);
