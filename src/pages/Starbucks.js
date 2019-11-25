import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import ImageAspectRatio from 'components/ImageAspectRatio'

import CopyWritingIcon from 'static/svg/copy-title.svg'
import StarbucksTweet1 from 'static/projects/starbucks/starbucks-1.png'
import StarbucksTweet2 from 'static/projects/starbucks/starbucks-2.png'
import StarbucksTweet3 from 'static/projects/starbucks/starbucks-3.png'
import StarbucksTweet4 from 'static/projects/starbucks/starbucks-4.png'

const styles = {
	icon: {
	},
	imageWidth: {
		width: '100%',
		paddingBottom: 24,
	},
}

const Starbucks = ({ classes }) => (
	<PageWrapper iconSrc={CopyWritingIcon} navTo="/copy">
		<ContentBlock>
			<Header>Starbucks Doubleshot</Header>
			<DescriptionText>
				When we began our work with Starbucks Doubleshot, they were looking to revamp their social presence. To do so, we developed the voice behind our *Doubleshot guy* and began concepting, creating, and presenting monthly content that supported that vision. Together with my co-writer, we created about 20 pieces of original content, both paid and organic, across Facebook, Twitter, and Tumblr.
			</DescriptionText>
			<ImageAspectRatio>
				<img src={StarbucksTweet1} className={classes.imageWidth} alt="" />
				<img src={StarbucksTweet2} className={classes.imageWidth} alt="" />
				<img src={StarbucksTweet3} className={classes.imageWidth} alt="" />
				<img src={StarbucksTweet4} className={classes.imageWidth} alt="" />
			</ImageAspectRatio>
		</ContentBlock>
	</PageWrapper>
)

export default injectSheet(styles)(Starbucks)
