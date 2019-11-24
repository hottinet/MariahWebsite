import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'

import PageWrapper from 'components/PageWrapper'
import IconNavLink from 'components/IconNavLink'

import CopyWritingIcon from 'static/svg/copy-title.svg'
import Starbucks from 'static/svg/Logos/starbucks.svg'
import Fox from 'static/svg/Logos/fox.svg'
import Chase from 'static/svg/Logos/chase.svg'
import CPC from 'static/svg/Logos/CPC.svg'
import Uber from 'static/svg/Logos/uber.svg'

const styles = {
	imageSvg: {
		width: '100%',
		paddingBottom: 50,
	},
	logoWrapper:{
		display: 'flex',
		flexDirection: 'column',
	}
}

const Copy = ({ classes }) => (
	<>
		<PageWrapper>
			<IconNavLink src={CopyWritingIcon} />
			<div className={classes.logoWrapper}>
				<NavLink to="/Starbucks">
					<img className={classes.imageSvg} src={Starbucks} alt="" />
				</NavLink>
				<img className={classes.imageSvg} src={Fox} alt="" />
				<img className={classes.imageSvg} src={Chase} alt="" />
				<img className={classes.imageSvg} src={CPC} alt="" />
				<img className={classes.imageSvg} src={Uber} alt="" />
			</div>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Copy)
