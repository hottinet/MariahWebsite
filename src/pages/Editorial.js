import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import LinkBlock from 'components/LinkBlock'

const styles = {

}

const Editorial = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<Header>Man Repeller</Header>
				<LinkBlock>
					<a href="">Lorem ipsum dolor sit amet,</a>
					<br />
					<a href="">Lorem ipsum dolor sit amet,</a>
					<br />
					<a href="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</a>
				</LinkBlock>
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Editorial)
