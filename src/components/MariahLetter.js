import React, { useState } from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'
import { gray } from 'constants/styles/colors'

const styles = {
	letterGray: {
		color: gray,
	},
	letterWhite: {
		color: '#fff',
	},
}

const MariahLetter = ({ children, classes }) => {
	const [mariahColor, setMariahColor] = useState(gray)
	const setColorGray = () => setMariahColor(gray)
	const setColorWhite = () => setMariahColor('#fff')
	const colorFunction = mariahColor === gray ? setColorWhite : setColorGray
	return (
		<span
			className={clsx(
				{
					[classes.letterGray]: mariahColor === gray,
					[classes.letterWhite]: mariahColor === '#fff',
				},
			)}
			onMouseEnter={colorFunction}
		>
			{ children }
		</span>
	)
}

export default injectSheet(styles)(MariahLetter)
