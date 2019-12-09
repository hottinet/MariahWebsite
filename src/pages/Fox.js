import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import ImageAspectRatio from 'components/ImageAspectRatio'

import CopyWritingIcon from 'static/svg/copy-title.svg'
import Fox1 from 'static/projects/fox/fox-1.png'
import Fox2 from 'static/projects/fox/fox-2.png'
import Fox3 from 'static/projects/fox/fox-3.png'
import Fox4 from 'static/projects/fox/fox-4.png'

const styles = {
	icon: {
	},
	imageWidth: {
		width: '100%',
		paddingBottom: 24,
	},
}

const Fox = ({ classes }) => (
	<PageWrapper iconSrc={CopyWritingIcon} navTo="/copy">
		<ContentBlock>
			<Header>Fox Television</Header>
			<DescriptionText>
				For FOX Television, content creation existed across all shows, including Bones, Empire, Sleep Hollow, New Girl, The Mindy Project, The Simpsons, and others. Using assets provided by the FOX team, my team and I crafted copy for up to five posts a day across Facebook, Twitter, Tumblr, Pinterest, and Google Plus. In order to meet the client's objectives, all copy maintained the "voice" of the show, speaking in a way that engaged the dedicated audiences of each program. 
			</DescriptionText>
			<ImageAspectRatio>
				<img src={Fox1} className={classes.imageWidth} alt="" />
				<img src={Fox2} className={classes.imageWidth} alt="" />
				<img src={Fox3} className={classes.imageWidth} alt="" />
				<img src={Fox4} className={classes.imageWidth} alt="" />
			</ImageAspectRatio>
		</ContentBlock>
	</PageWrapper>
)

export default injectSheet(styles)(Fox)
