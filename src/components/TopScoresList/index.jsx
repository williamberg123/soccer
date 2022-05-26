import PropTypes from 'prop-types';

import TopScore from '../TopScore';

import './style.css';

export default function TopScoresList({ topScores }) {
    const listChildren = topScores.map((topScore) => (
        <TopScore key={topScore.player_key} topScore={topScore} />
    ));

    return (
        <div className="TopScoresList">
            {listChildren}
        </div>
    );
}

TopScoresList.propTypes = {
    topScores: PropTypes.arrayOf(Object).isRequired,
};
