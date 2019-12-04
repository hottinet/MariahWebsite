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
		position: 'absolute',
		display: 'none',
		backgroundColor: 'white',
		width: '100%',
		height: '100%',
		color: gray,
		zIndex: 4,
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
			onClick={toggleMenu}
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
	</div>
)

export default injectSheet(styles)(MobileMenu)
