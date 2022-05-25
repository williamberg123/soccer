import PropTypes from 'prop-types';

import './style.css';

export default function PlayersList({ children }) {
    return (
        <div className="PlayersList">
            {children}
        </div>
    );
}

PlayersList.propTypes = {
    children: PropTypes.node.isRequired,
};
