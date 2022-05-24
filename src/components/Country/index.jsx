import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.css';

export default function Country({ country_id, country_name, country_logo }) {
    return (
        <Link to={`/soccer/country?id=${country_id}`}>
            <div className="Country">
                <h3>{country_name}</h3>
                <img src={country_logo} alt={country_name} />
            </div>
        </Link>
    );
}

Country.propTypes = {
    country_id: PropTypes.string.isRequired,
    country_name: PropTypes.string.isRequired,
    country_logo: PropTypes.string.isRequired,
};
