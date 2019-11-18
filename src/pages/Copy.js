import React from 'react'
import injectSheet from 'react-jss'
import { aurea } from 'constants/styles/fonts'
import { red } from 'constants/styles/colors'

import ContentBlock from 'components/ContentBlock'

const styles = {
	practiceClass: {
		...aurea,
		color: red,
	},
}

const Copy = ({ classes }) => (
	<>
		<ContentBlock>
			<div className={classes.practiceClass}>Copy</div>
			<div>description</div>
		</ContentBlock>
	</>
)

export default injectSheet(styles)(Copy)
