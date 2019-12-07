import React from 'react'
import injectSheet from 'react-jss'
import { lightBlue } from 'constants/styles/colors'

import Hearts from 'components/Hearts'

const styles = {
	homePage: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		backgroundColor: lightBlue,
	},
}

const Home = ({ classes }) => (
	<div className={classes.homePage}>
		<Hearts />
	</div>
)

export default injectSheet(styles)(Home)
