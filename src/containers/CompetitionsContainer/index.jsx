import PropTypes from 'prop-types';
import Loader from 'react-js-loader';

import RenderIf from '../../components/RenderIf';
import CompetitionsList from '../../components/CompetitionsList';

import './style.css';

export default function CompetitionsContainer({ competitions }) {
    return (
        <div className="CompetitionsContainer">
            <RenderIf condition={ !competitions }>
                <Loader type="spinner-default" bgColor="#000000" size={70} />
            </RenderIf>
            <RenderIf condition={ !!competitions }>
                <CompetitionsList />
            </RenderIf>
        </div>
    );
}

CompetitionsContainer.propTypes = {
    competitions: PropTypes.instanceOf(Array),
};
