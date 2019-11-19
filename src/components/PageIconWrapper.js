import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	pageIconWrapperClass: {
		position: 'fixed',
		top: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '50%',
		zIndex: 5,
	},
}

const PageIconWrapper = ({ children, classes }) => (
	<>
		<div className={classes.pageIconWrapperClass}>
			{children}
		</div>
	</>
)

PageIconWrapper.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageIconWrapper)
