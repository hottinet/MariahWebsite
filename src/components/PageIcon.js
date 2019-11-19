import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	pageIconClass: {
		position: 'fixed',
		top: 0,
		width: '20%',
	},
}

const PageIcon = ({ children, classes }) => (
	<>
		<div className={classes.pageIconClass}>
			{children}
		</div>
	</>
)

PageIcon.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageIcon)
