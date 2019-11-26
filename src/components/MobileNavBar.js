import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import { aureaItalic } from 'constants/styles/fonts'
import { gray } from 'constants/styles/colors'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
	mariahLink: {
		...aureaItalic,
		color: gray,
		textDecoration: 'none',
	},
	mobileNavWrapper: {
		backgroundColor: 'white',
		width: '100%',
		height: 75,
		position: 'fixed',
		bottom: 0,
		zIndex: 5,
		display: 'flex',
		justifyContent: 'space-between',
		padding: 20,
		fontSize: 24,
	},
	[SM_MIN_STRING]: {
		mobileNavWrapper: {
			display: 'none',
		},
	},
}

const MobileNavBar = ({
	classes,
}) => (
	<div className={classes.mobileNavWrapper}>
		<NavLink className={classes.mariahLink} to="/" exact> Menu </NavLink>
		<NavLink className={classes.mariahLink} to="/" exact> Mariah </NavLink>
	</div>
)

export default injectSheet(styles)(MobileNavBar)