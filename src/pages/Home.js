import React from 'react'
import injectSheet from 'react-jss'
import { lightBlue, red } from 'constants/styles/colors'
import { aureaItalic, nudistaBold } from 'constants/styles/fonts'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'

import Hearts from 'components/Hearts'
import MariahLetter from 'components/MariahLetter'

const styles = {
	homePage: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		backgroundColor: lightBlue,
	},
	graphicWrapper: {
		position: 'relative',
		...aureaItalic,
		fontSize: 88,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		transform: 'translateY(-50px)',
	},
	mariahName: {
		position: 'absolute',
		zIndex: 2,
		padding: 0,
		margin: 0,
	},
	resumeBanner: {
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
		resumeBanner: {
			bottom: 0,
		},
		graphicWrapper: {
			transform: 'translateY(0px)',
		},
	},
}

const Home = ({ classes }) => (
	<div className={classes.homePage}>
		<div className={classes.resumeBanner}>
			download my resume <a className={classes.resumeLink} href="caseybradford.club">here</a>
		</div>
		<div className={classes.graphicWrapper}>
			<p className={classes.mariahName}>
				<MariahLetter>M</MariahLetter>
				<MariahLetter>a</MariahLetter>
				<MariahLetter>r</MariahLetter>
				<MariahLetter>i</MariahLetter>
				<MariahLetter>a</MariahLetter>
				<MariahLetter>h</MariahLetter>
			</p>
			<Hearts />
		</div>
	</div>
)

export default injectSheet(styles)(Home)
