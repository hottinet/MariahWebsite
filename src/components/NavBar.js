import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { gray, white, red } from 'constants/styles/colors'
import { nudistaMedium, nudistaBold } from 'constants/styles/fonts'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'

const activeLinkStyle = {
	...nudistaBold,
	color: white,
	backgroundColor: gray,
}

const styles = {
	navBarWrapper: {
		display: 'none',
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
	resumeBanner: {
		display: 'none',
	},
	resumeVisible: {
		display: 'block',
		backgroundColor: red,
		color: '#fff',
		...nudistaBold,
		fontSize: 12,
		width: '100%',
		position: 'fixed',
		bottom: 75,
		padding: '10px',
		textAlign: 'center',
	},
	resumeLink: {
		color: '#fff',
	},
	[SM_MIN_STRING]: {
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
		nav95: {
			height: '95%',
		},
		resumeBanner: {
			bottom: 0,
		},
	},
}

const NavBar = ({
	classes, isHome,
}) => (
	<div>
		<div
			className={clsx(
				classes.navBarWrapper,
				{ [classes.nav95]: isHome },
			)}
		>
			<div className={classes.navRow}>
				<NavLink
					className={classes.navLink}
					to="/"
					exact
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
					to="/about"
					activeClassName={classes.activePage}
				>
					About
				</NavLink>
			</div>
		</div>
		<div
			className={clsx(
				classes.resumeBanner,
				{ [classes.resumeVisible]: isHome },
			)}
		>
			download my resume <a className={classes.resumeLink} href="https://caseybradford.club/static/assets/resume.pdf">here</a>
		</div>
	</div>
)

export default injectSheet(styles)(NavBar)

