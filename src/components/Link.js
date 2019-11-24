import React from 'react'
import injectSheet from 'react-jss'
import { nudistaMedium } from 'constants/styles/fonts'
import { gray, red } from 'constants/styles/colors'

const styles = {
	linkClass: {
		...nudistaMedium,
		color: gray,
		fontSize: 18,
		lineHeight: 1,
		textDecoration: 'none',
		paddingBottom: 30,
		'&:hover': {
			color: red,
		},
	},
}

const Link = ({ href, alt = '', text, classes }) => (
	<a
		href={href}
		alt={alt}
		className={classes.linkClass}
		target="_blank"
		rel="noopener noreferrer"
	>
		{text}
	</a>
)

export default injectSheet(styles)(Link)

