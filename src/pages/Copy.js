import React from 'react'
import injectSheet from 'react-jss'
import { aurea } from 'constants/styles/fonts'
import { red } from 'constants/styles/colors'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'

const styles = {
	practiceClass: {
		...aurea,
		color: red,
	},
}

const Copy = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<div className={classes.practiceClass}>Copy</div>
				<div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</div>
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Copy)
