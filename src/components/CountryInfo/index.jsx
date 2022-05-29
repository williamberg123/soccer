import PropTypes from 'prop-types';

import './style.css';

export default function CountryInfo({ country_logo, country_name }) {
    const loadOptionalImage = (e) => {
        e.target.setAttribute('src', 'https://apiv3.apifootball.com/badges/logo_country/133_world.png');
    };

    const addOptionalClass = (e) => {
        if (e.target.getAttribute('src').includes('world.png')) {
            e.target.setAttribute('class', 'optional-image');
        }
    };

    return (
        <div className="CountryInfo">
            <img onLoad={ addOptionalClass } onError={ loadOptionalImage } src={country_logo} alt={country_name} />
            <h3>{country_name}</h3>
        </div>
    );
}

CountryInfo.propTypes = {
    country_logo: PropTypes.string,
    country_name: PropTypes.string,
};
