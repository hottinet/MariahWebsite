import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import PageIcon from 'components/PageIcon'

import CopyWritingIcon from 'static/svg/copy-title.svg'

const styles = {

}

const Copy = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<PageIcon>
					<img src={CopyWritingIcon} alt="" />
				</PageIcon>
				<Header>Hello!</Header>
				<DescriptionText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</DescriptionText>
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Copy)
