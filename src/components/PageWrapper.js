import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import IconNavLink from 'components/IconNavLink'
import { lightBlue } from 'constants/styles/colors'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'
import { mdIconHeight, smIconHeight } from 'constants/styles/iconHeight'

const styles = {
	pageWrapper: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		backgroundColor: lightBlue,
	},
	childWrapper: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		marginTop: smIconHeight + 16,
	},
	[SM_MIN_STRING]: {
		childWrapper: {
			marginTop: mdIconHeight + 16,
		},
	},
}

const PageWrapper = ({ children, iconSrc, navTo, classes }) => (
	<div className={classes.pageWrapper}>
		<IconNavLink src={iconSrc} to={navTo} />
		<div className={classes.childWrapper}>{children}</div>
	</div>
)

PageWrapper.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(PageWrapper)
