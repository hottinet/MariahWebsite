import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	logoWrapperClass: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '50%',
		paddingTop: 140,
	},
}

const LogoBlockWrapper = ({ children, classes }) => (
	<>
		<div className={classes.logoWrapperClass}>
			{children}
		</div>
	</>
)

LogoBlockWrapper.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(LogoBlockWrapper)
