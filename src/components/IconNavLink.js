import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'

const styles = {
	navLinkWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		position: 'fixed',
		zIndex: 5,
	},
	icon: {
		width: '100%',
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
