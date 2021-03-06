import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import AboutIcon from 'static/svg/about-title.svg'
import Headshot from 'static/projects/about/headshot.jpg'
import ImageAspectRatio from 'components/ImageAspectRatio'

const styles = {
	icon: {
		width: '30%',
	},
	imageWidth: {
		width: '100%',
		paddingBottom: 24,
	},
}

const About = ({ classes }) => (
	<PageWrapper iconSrc={AboutIcon}>
		<ContentBlock>
			<Header>About Me</Header>
			<DescriptionText>
				I am a writer and MFA candidate in Creative Nonfiction at Columbia University in New York City.
				<br /><br />
				Brooklyn, New York
			</DescriptionText>
			<ImageAspectRatio>
				<img src={Headshot} className={classes.imageWidth} alt="" />
			</ImageAspectRatio>
		</ContentBlock>
	</PageWrapper>
)

export default injectSheet(styles)(About)

