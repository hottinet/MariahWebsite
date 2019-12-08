import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

import RedHeart from 'static/projects/home/heart-red.svg'
import BlueHeart from 'static/projects/home/heart-blue.svg'

const heartOffset = 50

const styles = {
	heartsWrapper: {
		position: 'relative',
		transform: `translateX(${heartOffset / 2}px)`,
	},
	heartWidth: {
		width: 200,
	},
	backwardsHeart: {
		position: 'absolute',
		left: 0,
		transform: `translateX(-${heartOffset}px)`,
	},
}


const Hearts = ({ classes }) => {
	const [mouseXPosition, setMouseXPosition] = useState()
	const [mouseYPosition, setMouseYPosition] = useState()
	useEffect(() => {
		const mouseTracking = (e) => {
			setMouseXPosition(e.x)
			setMouseYPosition(e.y)
		}
		window.addEventListener('mousemove', mouseTracking)
		return () => window.removeEventListener('mousemove', mouseTracking)
	}, [])

	const midX = window.innerWidth / 2
	const midY = window.innerHeight / 2
	const xOffset = mouseXPosition - midX
	const yOffset = mouseYPosition - midY
	return (
		<div className={classes.heartsWrapper}>
			<img
				src={RedHeart}
				style={{ transform: `translate(${xOffset / 10}px, ${yOffset / 10}px)`}}
				className={classes.heartWidth}
				alt=""
			/>
			<img
				src={BlueHeart}
				style={{ transform: `translate(${(xOffset / 15) - heartOffset}px, ${yOffset / 15}px)` }}
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
