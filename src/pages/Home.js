import React from 'react'
import injectSheet from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Hearts from 'components/Hearts'

const styles = {
}

const Home = () => (
	<PageWrapper>
		<ContentBlock>
			<Hearts />
		</ContentBlock>
	</PageWrapper>
)

export default injectSheet(styles)(Home)
