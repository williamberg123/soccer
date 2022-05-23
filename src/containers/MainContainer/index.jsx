import PropTypes from 'prop-types';

import './style.css';

export default function MainContainer({ children }) {
    return (
        <main className="MainContainer">
            { children }
        </main>
    );
}

MainContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
