import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { nudistaMedium } from 'constants/styles/fonts'
import { gray } from 'constants/styles/colors'

const styles = {
	descriptionClass: {
		...nudistaMedium,
		color: gray,
		fontSize: 16,
	},
}

const DescriptionText = ({ children, classes }) => (
	<>
		<div className={classes.descriptionClass}>
			{children}
		</div>
	</>
)

DescriptionText.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(DescriptionText)
