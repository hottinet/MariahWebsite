import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'

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
}

const NavBar = ({
	classes,
}) => (
	<div className={classes.navBarWrapper} >
		<div className={classes.navRow}>
			<NavLink
				to="/"
			>
				Mariah
			</NavLink>
			<NavLink
				to="/"
			>
				Copy Writing
			</NavLink>
		</div>
		<div className={classes.navRow}>
			<NavLink
				to="/"
			>
				Editorial
			</NavLink>
			<NavLink
				to="/"
			>
				About
			</NavLink>
		</div>
	</div>
)

export default injectSheet(styles)(NavBar)

