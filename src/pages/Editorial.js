import React from 'react'
import injectSheet from 'react-jss'

import ContentBlock from 'components/ContentBlock'
import PageWrapper from 'components/PageWrapper'
import PageIconWrapper from 'components/PageIconWrapper'
import Header from 'components/Header'

import EditIcon from 'static/svg/edit-title.svg'
import { nudistaMedium, nudistaBold } from 'constants/styles/fonts'
import { gray, red } from 'constants/styles/colors'

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

const Editorial = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<PageIconWrapper>
					<img className={classes.icon} src={EditIcon} alt="" />
				</PageIconWrapper>
				<Header>Man Repeller</Header>
				<br />
				<a href="https://www.manrepeller.com/2019/08/amazing-good-bad-things.html" className={classes.LinkStyle}>11 Things That Are Amazing When They’re Good, Terrible When They’re Bad</a>

				<a href="https://www.manrepeller.com/2019/07/times-i-thought-i-was-flirting.html" className={classes.LinkStyle}>5 Times I Thought I Was Flirting </a>

				<a href="https://www.manrepeller.com/2019/08/mothers-advice-always-right.html" className={classes.LinkStyle}>Microblading Is Worth It - And Other Times My Mother was Correct </a>

				<a href="https://www.manrepeller.com/2017/09/buyers-remorse.html" className={classes.LinkStyle}>9 Things I Regret Buying, TBH  </a>

				<a href="https://www.manrepeller.com/2017/11/how-to-get-over-a-breakup.html" className={classes.LinkStyle}>How to Get Over a Breakup in 6 Easy Steps  </a>

				<a href="https://www.manrepeller.com/2017/11/beauty-fails.html" className={classes.LinkStyle}>7 Beauty Trends I Regret Trying </a>

				<a href="https://www.manrepeller.com/2018/02/make-friends-online.html" className={classes.LinkStyle}>I Went on Three Blind “Friend Dates” to Cure My Loneliness</a>

				<a href="https://www.manrepeller.com/2018/04/in-defense-of-the-bachelor.html" className={classes.LinkStyle}>I Not Only Love ‘The Bachelor,’ I Believe It</a>

				<a href="https://www.manrepeller.com/2018/04/things-that-leave-me-feeling-intimidated.html" className={classes.LinkStyle}>A List of Things That Intimidate Me - Including My Hairstylist, John </a>

			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Editorial)
