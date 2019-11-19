import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	LogoBlockClass: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '40%',
	},
}

const LogoBlock = ({ children, classes }) => (
	<>
		<div className={classes.LogoBlockClass}>
			{children}
		</div>
	</>
)

LogoBlock.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(LogoBlock)
