import React from 'react'
import injectSheet from 'react-jss'
import { lightBlue } from 'constants/styles/colors'
import { aureaItalic } from 'constants/styles/fonts'

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
	},
	mariahName: {
		position: 'absolute',
		zIndex: 2,
		padding: 0,
		margin: 0,
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
