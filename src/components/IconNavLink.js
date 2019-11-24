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

const IconNavLink = ({ to, src, alt, classes }) => (
	<div className={classes.navLinkWrapper}>
		<NavLink className={classes.link} to={to}>
			<img className={classes.icon} src={src} alt={alt} />
		</NavLink>
	</div>
)

export default injectSheet(styles)(IconNavLink)
