import React from 'react'
import { withRouter } from 'react-router-dom'
import injectSheet from 'react-jss'
import IconNavLink from 'components/IconNavLink'
import routeColorMap from 'constants/styles/routeColorMap'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'
import { mdIconHeight, smIconHeight } from 'constants/styles/iconHeight'

const styles = {
	pageWrapper: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		minHeight: '100%',
		paddingBottom: 200,
	},
	childWrapper: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		marginTop: smIconHeight + 24,
	},
	[SM_MIN_STRING]: {
		childWrapper: {
			marginTop: mdIconHeight + 24,
		},
	},
}

const PageWrapper = ({ children, iconSrc, navTo, location, classes }) => (
	<div
		style={{ backgroundColor: routeColorMap[location.pathname] }}
		className={classes.pageWrapper}
	>
		<IconNavLink src={iconSrc} to={navTo} />
		<div className={classes.childWrapper}>{children}</div>
	</div>
)

export default injectSheet(styles)(withRouter(PageWrapper))
