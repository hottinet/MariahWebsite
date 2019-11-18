import React from 'react'
import injectSheet from 'react-jss'
import { aurea } from 'constants/styles/fonts'
import { pink, red } from 'constants/styles/colors'

const styles = {
	practiceClass: {
		...aurea,
		backgroundColor: pink,
		color: red,
	},
}

const Copy = ({ classes }) => (
	<>
		<div className={classes.practiceClass}>Copy</div>
	</>
)

export default injectSheet(styles)(Copy)
