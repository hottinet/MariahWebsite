import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import { gray, white } from 'constants/styles/colors'
import { nudistaMedium, nudistaBold } from 'constants/styles/fonts'

const activeLinkStyle = {
	...nudistaBold,
	color: white,
	backgroundColor: gray,
}

const styles = {
	navBarWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		padding: 24,
	},
	navRow: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
	},
	navLink: {
		textTransform: 'uppercase',
		textDecoration: 'none',
		color: gray,
		...nudistaMedium,
		padding: 4,
		'&:hover': {
			...activeLinkStyle,
		},
	},
	activePage: {
		...activeLinkStyle,
	},
}

const NavBar = ({
	classes,
}) => (
	<div className={classes.navBarWrapper} >
		<div className={classes.navRow}>
			<NavLink
				className={classes.navLink}
				to="/"
				activeClassName={classes.activePage}
			>
				Mariah
			</NavLink>
			<NavLink
				className={classes.navLink}
				to="/copy"
				activeClassName={classes.activePage}
			>
				Copy Writing
			</NavLink>
		</div>
		<div className={classes.navRow}>
			<NavLink
				className={classes.navLink}
				to="/editorial"
				activeClassName={classes.activePage}
			>
				Editorial
			</NavLink>
			<NavLink
				className={classes.navLink}
				to="/"
				activeClassName={classes.activePage}
			>
				About
			</NavLink>
		</div>
	</div>
)

export default injectSheet(styles)(NavBar)

