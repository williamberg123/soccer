import PropTypes from 'prop-types';
import Loader from 'react-js-loader';

import RenderIf from '../../components/RenderIf';
import LeaguesList from '../../components/LeaguesList';

import './style.css';

export default function LeaguesContainer({ leagues }) {
    return (
        <div className="LeaguesContainer">
            <RenderIf condition={ !leagues }>
                <Loader type="spinner-default" bgColor="#000000" size={70} />
            </RenderIf>
            <RenderIf condition={ !!leagues }>
                <LeaguesList />
            </RenderIf>
        </div>
    );
}

LeaguesContainer.propTypes = {
    leagues: PropTypes.instanceOf(Array),
};
