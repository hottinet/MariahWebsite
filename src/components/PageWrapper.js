import React from 'react'
import { withRouter } from 'react-router-dom'
import injectSheet from 'react-jss'
import IconNavLink from 'components/IconNavLink'
import routeColorMap from 'constants/styles/routeColorMap'

const styles = {
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		minHeight: '100%',
		paddingBottom: 50,
	},
	childWrapper: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		marginTop: 24,
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
