import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	HeartsClass: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'relative',
		width: '100%',
		backgroundColor: '#000',
	},
}

const Hearts = ({ children, classes }) => (
	<>
		<div className={classes.HeartsClass}>
			{children}
		</div>
	</>
)

Hearts.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(Hearts)
