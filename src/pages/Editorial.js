import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import Header from 'components/Header'
import IconNavLink from 'components/IconNavLink'
import Link from 'components/Link'

import EditIcon from 'static/svg/edit-title.svg'
import { nudistaMedium } from 'constants/styles/fonts'
import { gray, red } from 'constants/styles/colors'
import editorialLinks from 'constants/editorial'


const styles = {
	LinkStyle: {
		...nudistaMedium,
		color: gray,
		fontSize: 18,
		lineHeight: 1,
		textDecoration: 'none',
		paddingBottom: 30,
		'&:hover': {
			color: red,
		},
	},
	icon: {
		width: '30%',
	},
}

const EditorialLinks = () => editorialLinks.map(
	linkObject => <Link href={linkObject.href} text={linkObject.text} />,
)

const Editorial = ({ classes }) => (
	<PageWrapper>
		<IconNavLink src={EditIcon} />
		<ContentBlock>
			<Header>Man Repeller</Header>
			<EditorialLinks />
		</ContentBlock>
	</PageWrapper>
)

export default injectSheet(styles)(Editorial)
