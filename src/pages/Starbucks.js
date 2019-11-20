import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import PageIconWrapper from 'components/PageIconWrapper'

import CopyWritingIcon from 'static/svg/copy-title.svg'
import StarbucksTweet1 from 'static/projects/starbucks/starbucks-1.png'

const styles = {
	icon: {
		width: '30%',
	},
}

const Starbucks = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<PageIconWrapper>
					<img className={classes.icon} src={CopyWritingIcon} alt="" />
				</PageIconWrapper>
				<Header>Starbucks Doubleshot</Header>
				<DescriptionText>When we began our work with Starbucks Doubleshot, they were looking to revamp their social presence. To do so, we developed the voice behind our *Doubleshot guy* and began concepting, creating, and presenting monthly content that supported that vision. Together with my co-writer, we created about 20 pieces of original content, both paid and organic, across Facebook, Twitter, and Tumblr. </DescriptionText>
				<img src={StarbucksTweet1} alt="" />
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Starbucks)
