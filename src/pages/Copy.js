import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'

import LogoBlock from 'components/LogoBlock'
import LogoBlockWrapper from 'components/LogoBlockWrapper'
import PageWrapper from 'components/PageWrapper'

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
	icon: {
		width: '30%',
	},
}

const Copy = ({ classes }) => (
	<>
		<PageWrapper>
			<img src={CopyWritingIcon} className={classes.icon} alt="" />
			<LogoBlockWrapper>
				<LogoBlock>
					<NavLink to="/Starbucks">
						<img className={classes.imageSvg} src={Starbucks} alt="" />
					</NavLink>
					<img className={classes.imageSvg} src={Fox} alt="" />
					<img className={classes.imageSvg} src={Chase} alt="" />
					<img className={classes.imageSvg} src={CPC} alt="" />
					<img className={classes.imageSvg} src={Uber} alt="" />
				</LogoBlock>
			</LogoBlockWrapper>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Copy)
