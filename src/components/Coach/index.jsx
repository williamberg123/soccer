import PropTypes from 'prop-types';

import './style.css';

export default function Coach({ coach }) {
    const { coach_name } = coach;

    return (
        <div className="Coach">
            Técnico: <span>{coach_name}</span>
        </div>
    );
}

Coach.propTypes = {
    coach: PropTypes.instanceOf(Object).isRequired,
};
