import React, { useState } from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { aureaItalic } from 'constants/styles/fonts'
import { gray } from 'constants/styles/colors'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'
import MobileMenu from 'components/MobileMenu'

const styles = {
	menu: {
		display: 'none',
	},
	mariahLink: {
		...aureaItalic,
		color: gray,
		textDecoration: 'none',
	},
	button: {
		border: 'none',
		fontSize: 24,
		paddingTop: 0,
		margin: 0,
		'&:focus': {
			outline: 'none',
		},
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


const MobileNavBar = ({ classes }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
	return (
		<div>
			<MobileMenu isMenuOpen={isMenuOpen} />
			<div className={classes.mobileNavWrapper}>
				<button
					className={clsx(
						classes.mariahLink,
						classes.button,
					)}
					onClick={toggleMenu}
				>
					Menu
				</button>
				<NavLink className={classes.mariahLink} to="/" exact> Mariah </NavLink>
			</div>
		</div>
	)
}

export default injectSheet(styles)(MobileNavBar)
