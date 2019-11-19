import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import PageIconWrapper from 'components/PageIconWrapper'
import Header from 'components/Header'

import EditIcon from 'static/svg/edit-title.svg'
import { nudistaBold } from 'constants/styles/fonts'
import { gray, red } from 'constants/styles/colors'

const styles = {
	LinkStyle: {
		...nudistaBold,
		color: gray,
		fontSize: 24,
		lineHeight: 1.5,
		textDecoration: 'none',
		'&:hover': {
			color: red,
		},
	},
	icon: {
		width: '30%',
	},
}

const Editorial = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<PageIconWrapper>
					<img className={classes.icon} src={EditIcon} alt="" />
				</PageIconWrapper>
				<Header>Man Repeller</Header>
				<a href="https://www.google.com" className={classes.LinkStyle}>Lorem ipsum dolor sit amet,</a>
				<br />
				<a href="">Lorem ipsum dolor sit amet,</a>
				<br />
				<a href="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</a>
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Editorial)
