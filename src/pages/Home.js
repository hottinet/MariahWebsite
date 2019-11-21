import React from 'react'
import injectSheet from 'react-jss'

import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import Hearts from 'components/Hearts'
import RedHeart from 'static/projects/home/heart-red.svg'
import BlueHeart from 'static/projects/home/heart-blue.svg'

const styles = {
	heartWidth: {
		width: 200,
	},
	backwardsHeart: {
		transform: 'translateX(-12vw)',
	},
}

const Home = ({ classes }) => (
	<>
		<PageWrapper>
			<ContentBlock>
				<Hearts>
					<img src={RedHeart} className={classes.heartWidth} alt="" />
					<div className={classes.backwardsHeart}>
						<img src={BlueHeart} className={classes.heartWidth} alt="" />
					</div>
				</Hearts>
			</ContentBlock>
		</PageWrapper>
	</>
)

export default injectSheet(styles)(Home)