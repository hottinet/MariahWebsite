import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	contentBlockClass: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'start-flex',
		height: 3000,
		width: '50%',
		paddingTop: 140,
	},
}

const ContentBlock = ({ children, classes }) => (
	<>
		<div className={classes.contentBlockClass}>
			{children}
		</div>
	</>
)

ContentBlock.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(ContentBlock)
