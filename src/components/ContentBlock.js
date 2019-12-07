import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	contentBlockClass: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		width: '80%',
	},
	[SM_MIN_STRING]: {
		contentBlockClass: {
			width: '50%',
		},
	},
}

const ContentBlock = ({ children, classes }) => (
	<div className={classes.contentBlockClass}>
		{children}
	</div>
)

ContentBlock.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(ContentBlock)
