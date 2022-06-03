import PropTypes from 'prop-types';
import Context from './context';

export default function AppContext({ children, value }) {
	return (
		<Context.Provider value={value}>
			{ children }
		</Context.Provider>
	);
}

AppContext.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.instanceOf(Object).isRequired,
};
