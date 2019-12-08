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
	[SM_MIN_STRING]: {
		graphicWrapper: {
			transform: 'translateY(0px)',
		},
	},
}

const Home = ({ classes }) => (
	<div className={classes.homePage}>
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
