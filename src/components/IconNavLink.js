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
	link: {
		width: '20%',
	},
}

const ImageWrapper = ({ children, to, classes }) => {
	if (to) {
		return (
			<NavLink className={classes.link} to={to}>
				{children}
			</NavLink>
		)
	}
	return (
		<div className={classes.link}>
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
