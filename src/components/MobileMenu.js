import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { nudistaBold } from 'constants/styles/fonts'
import { gray, red, white } from 'constants/styles/colors'

const activeLinkStyle = {
	color: white,
	backgroundColor: gray,
}

const styles = {
	mobileNavLink: {
		...nudistaBold,
		fontSize: 36,
		marginBottom: 10,
		textDecoration: 'none',
		color: gray,
		'&:hover': {
			color: red,
		},
	},
	menu: {
		position: 'fixed',
		display: 'none',
		backgroundColor: 'white',
		width: '100%',
		height: '100%',
		color: gray,
		zIndex: 6,
		padding: '10%',
	},
	menuVisible: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	activeMobile: {
		...activeLinkStyle,
	},
	xButton: {
		border: 'none',
		cursor: 'pointer',
		fontSize: 36,
		...nudistaBold,
		textAlign: 'left',
		padding: 0,
		margin: 0,
		'&:focus': {
			outline: 'none',
		},
		'&:hover': {
			color: red,
		},
	},
}

const MobileMenu = ({ isMenuOpen, toggleMenu, classes }) => (
	<div
		className={clsx(
			classes.menu,
			{ [classes.menuVisible]: isMenuOpen },
		)}
	>
		<NavLink
			className={classes.mobileNavLink}
			to="/copy"
			exact
			activeClassName={classes.activeMobile}
		>
				Copy Writing
		</NavLink>
		<NavLink
			className={classes.mobileNavLink}
			to="/editorial"
			exact
			activeClassName={classes.activeMobile}
		>
				Editorial
		</NavLink>
		<NavLink
			className={classes.mobileNavLink}
			to="/about"
			exact
			activeClassName={classes.activeMobile}
		>
				About Me
		</NavLink>
		<button className={classes.xButton} onClick={toggleMenu}>
			x
		</button>
	</div>
)

export default injectSheet(styles)(MobileMenu)
