import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import ImageAspectRatio from 'components/ImageAspectRatio'

import CopyWritingIcon from 'static/svg/copy-title.svg'
import Uber1 from 'static/projects/chase/uber1.png'
import Uber2 from 'static/projects/chase/uber2.png'
import Uber3 from 'static/projects/chase/uber3.png'
import Quickpay1 from 'static/projects/chase/quickpay1.png'
import Quickpay2 from 'static/projects/chase/quickpay2.png'


const styles = {
	icon: {
	},
	imageWidth: {
		width: '100%',
		paddingBottom: 24,
	},
}

const Chase = ({ classes }) => (
	<PageWrapper iconSrc={CopyWritingIcon} navTo="/copy">
		<ContentBlock>
			<Header>Chase x Uber</Header>
			<DescriptionText>
				Chase and Uber partnered together in an effort to get non-user users to download the app, link it to their Chase credit card, and use Chase's promo code. I wrote copy and helped produce images for content to promote the campaign. Copy spoke to the weather and convienence of traveling via Uber. 
			</DescriptionText>
			<ImageAspectRatio>
				<img src={Uber1} className={classes.imageWidth} alt="" />
				<img src={Uber2} className={classes.imageWidth} alt="" />
				<img src={Uber3} className={classes.imageWidth} alt="" />
			</ImageAspectRatio>
			<Header>Chase QuickPay</Header>
			<DescriptionText>
				Chase partnered with Serena Williams and Steph Curry to deliver a campaign called Battle of the Paddle, wherein Serena and Steph battle it out - this time, on a ping pong table. I created banner ads to support the hero video.
			</DescriptionText>
			<ImageAspectRatio>
				<img src={Quickpay1} className={classes.imageWidth} alt="" />
				<img src={Quickpay2} className={classes.imageWidth} alt="" />
			</ImageAspectRatio>
		</ContentBlock>
	</PageWrapper>
)

export default injectSheet(styles)(Chase)
