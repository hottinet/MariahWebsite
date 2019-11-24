import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import DescriptionText from 'components/DescriptionText'

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
				<img className={classes.icon} src={AboutIcon} alt="" />
				<Header>About Me</Header>
				<DescriptionText>Mariah Adcox is a writer and MFA candidate in Creative Nonfiction at Columbia University in New York City. </DescriptionText>
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(About)

