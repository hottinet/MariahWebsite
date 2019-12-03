import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'
import { gray } from 'constants/styles/colors'

const styles = {
	menu: {
		position: 'absolute',
		display: 'none',
		backgroundColor: 'white',
		width: '100%',
		height: '100%',
		color: gray,
	},
	menuVisible: {
		display: 'block',
	},
}

const MobileMenu = ({ isMenuOpen, classes }) => (
	<div
		className={clsx(
			classes.menu,
			{ [classes.menuVisible]: isMenuOpen },
		)}
	>
		Menu open
	</div>
)

export default injectSheet(styles)(MobileMenu)
