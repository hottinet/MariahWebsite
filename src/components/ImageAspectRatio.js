import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
	imageRatio: {
		width: '100%',
		resizeMode: 'contain',
	},
}

const ImageAspectRatio = ({ children, classes }) => (
	<>
		<div className={classes.imageRatio}>
			{children}
		</div>
	</>
)

ImageAspectRatio.propTypes = {
	children: PropTypes.node,
}

export default injectSheet(styles)(ImageAspectRatio)
