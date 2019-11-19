import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'
import PageIconWrapper from 'components/PageIconWrapper'

import AboutIcon from 'static/svg/about-title.svg'

const styles = {
	icon: {
		width: '30%',
	},
}

const About = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<PageIconWrapper>
					<img className={classes.icon} src={AboutIcon} alt="" />
				</PageIconWrapper>
				<Header>About Me</Header>
				<DescriptionText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</DescriptionText>
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(About)

