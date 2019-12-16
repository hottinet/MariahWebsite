import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'

import PageWrapper from 'components/PageWrapper'

import CopyWritingIcon from 'static/svg/copy-title.svg'
import Starbucks from 'static/svg/Logos/starbucks.svg'
import Fox from 'static/svg/Logos/fox.svg'
import Chase from 'static/svg/Logos/chase.svg'


const styles = {
	imageSvg: {
		width: '100%',
		paddingBottom: 50,
	},
	logoWrapper: {
		display: 'flex',
		flexDirection: 'column',
		zIndex: 4,
	},
}

const Copy = ({ classes }) => (
	<PageWrapper iconSrc={CopyWritingIcon}>
		<div className={classes.logoWrapper}>
			<NavLink to="/starbucks">
				<img className={classes.imageSvg} src={Starbucks} alt="" />
			</NavLink>
			<NavLink to="/Fox">
				<img className={classes.imageSvg} src={Fox} alt="" />
			</NavLink>
			<NavLink to="/Chase">
				<img className={classes.imageSvg} src={Chase} alt="" />
			</NavLink>
		</div>
	</PageWrapper>
)

export default injectSheet(styles)(Copy)
