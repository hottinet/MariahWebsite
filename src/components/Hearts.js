import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

import RedHeart from 'static/projects/home/heart-red.svg'
import BlueHeart from 'static/projects/home/heart-blue.svg'

const heartOffset = 50

const styles = {
	heartsWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'relative',
		width: '100%',
		transform: `translateX(${heartOffset / 2}px)`,
	},
	heartWidth: {
		width: 200,
	},
	backwardsHeart: {
		position: 'absolute',
		transform: `translateX(-${heartOffset}px)`,
	},
}

const Hearts = ({ classes }) => {
	const [mousePosition, setMousePosition] = useState([])
	useEffect(() => {
		const mouseTracking = (e) => {
			setMousePosition([e.x, e.y])
		}
		window.addEventListener('mousemove', mouseTracking)
		return window.removeEventListener('mousemove', mouseTracking)
	}, [])
	return (
		<div className={classes.heartsWrapper}>
			<img src={RedHeart} className={classes.heartWidth} alt="" />
			<img
				src={BlueHeart}
				className={clsx(
					classes.heartWidth,
					classes.backwardsHeart,
				)}
				alt=""
			/>
		</div>
	)
}

export default injectSheet(styles)(Hearts)
