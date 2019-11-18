import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { lightBlue } from 'constants/styles/colors'

const styles = {
	contentBlockClass: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: lightBlue,
		width: '60%',
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