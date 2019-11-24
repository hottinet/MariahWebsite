import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { aurea } from 'constants/styles/fonts'
import { gray } from 'constants/styles/colors'

const styles = {
	headerClass: {
		...aurea,
		alignSelf: 'flex-start',
		color: gray,
		fontSize: 56,
	},
}

const Header = ({ children, classes }) => (
	<>
		<div className={classes.headerClass}>
			{children}
		</div>
	</>
)

Header.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(Header)
