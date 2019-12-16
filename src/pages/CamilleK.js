import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import ImageAspectRatio from 'components/ImageAspectRatio'

import CopyWritingIcon from 'static/svg/copy-title.svg'
import CamilleK1 from 'static/projects/camillek/camillek1.png'
import CamilleK2 from 'static/projects/camillek/camillek2.png'
import CamilleK3 from 'static/projects/camillek/camillek3.png'

const styles = {
	icon: {
	},
	imageWidth: {
		width: '100%',
		paddingBottom: 24,
	},
}

const CamilleK = ({ classes }) => (
	<PageWrapper iconSrc={CopyWritingIcon} navTo="/copy">
		<ContentBlock>
			<Header>Camille K</Header>
			<DescriptionText>
				The jewelry company Camille K had not yet set up their social presence when I joined the team. I developed a voice for them on social, and then I concepted, created, and presented content on a daily basis across Facebook and Instagram. In order to speak to the stylish Camille K customer, I ensured that each piece conveyed the correct sense of style and spoke to the effect of wearing Camille K jewelry.
			</DescriptionText>
			<ImageAspectRatio>
				<img src={CamilleK1} className={classes.imageWidth} alt="" />
				<img src={CamilleK2} className={classes.imageWidth} alt="" />
				<img src={CamilleK3} className={classes.imageWidth} alt="" />
			</ImageAspectRatio>
		</ContentBlock>
	</PageWrapper>
)

export default injectSheet(styles)(CamilleK)
