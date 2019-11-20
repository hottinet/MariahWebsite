import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { nudistaMedium } from 'constants/styles/fonts'
import { gray, red } from 'constants/styles/colors'

const styles = {
	LinkBlockClass: {
		...nudistaMedium,
		color: gray,
		fontSize: 24,
		lineHeight: 1.5,
		'&:hover': {
			color: red,
		},
	},
}

const LinkBlock = ({ children, classes }) => (
	<>
		<div className={classes.LinkBlockClass}>
			{children}
		</div>
	</>
)

LinkBlock.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(LinkBlock)
