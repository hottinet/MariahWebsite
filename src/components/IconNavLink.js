import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'

import { SM_MIN_STRING } from 'constants/styles/breakpoints'
import { mdIconHeight, smIconHeight } from 'constants/styles/iconHeight'

const styles = {
	navLinkWrapper: {
		zIndex: 5,
		paddingTop: 8,
	},
	icon: {
		height: smIconHeight,
	},
	[SM_MIN_STRING]: {
		icon: {
			height: mdIconHeight,
		},
	},
}

const ImageWrapper = ({ children, to }) => {
	if (to) {
		return (
			<NavLink to={to}>
				{children}
			</NavLink>
		)
	}
	return (
		<div>
			{children}
		</div>
	)
}

const IconNavLink = ({ to, src, alt, classes }) => (
	<div className={classes.navLinkWrapper}>
		<ImageWrapper to={to} classes={classes}>
			<img className={classes.icon} src={src} alt={alt} />
		</ImageWrapper>
	</div>
)

export default injectSheet(styles)(IconNavLink)
