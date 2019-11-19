import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { lightBlue } from 'constants/styles/colors'

const styles = {
	pageWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: 0,
		width: '100%',
		backgroundColor: lightBlue,
	},
}

const PageWrapper = ({ children, classes }) => (
	<div className={classes.pageWrapper}>
		{children}
	</div>
)

PageWrapper.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageWrapper)
