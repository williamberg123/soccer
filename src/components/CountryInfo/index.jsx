import PropTypes from 'prop-types';

import './style.css';

export default function CountryInfo({ country_logo, country_name }) {
    return (
        <div className="CountryInfo">
            <img src={country_logo} alt={country_name} />
            <h3>{country_name}</h3>
        </div>
    );
}

CountryInfo.propTypes = {
    country_logo: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
};
