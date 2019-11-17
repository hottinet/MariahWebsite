import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import { gray } from 'constants/styles/colors'
import { nudistaMedium } from 'constants/styles/fonts'

const styles = {
	navBarWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		position: 'absolute',
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
			>
				Mariah
			</NavLink>
			<NavLink
				className={classes.navLink}
				to="/"
			>
				Copy Writing
			</NavLink>
		</div>
		<div className={classes.navRow}>
			<NavLink
				className={classes.navLink}
				to="/"
			>
				Editorial
			</NavLink>
			<NavLink
				className={classes.navLink}
				to="/"
			>
				About
			</NavLink>
		</div>
	</div>
)

export default injectSheet(styles)(NavBar)

