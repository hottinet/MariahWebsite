import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { SM_MIN_VALUE } from 'constants/styles/breakpoints.js'

import Home from 'pages/Home'
import Copy from 'pages/Copy'
import Editorial from 'pages/Editorial'
import About from 'pages/About'
import Starbucks from 'pages/Starbucks'
import Fox from 'pages/Fox'
import NavBar from 'components/NavBar'
import MobileNavBar from 'components/MobileNavBar'


const styles = {
	wholePage: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	appContainer: {
		maxWidth: 1366,
		width: '100%',
		height: '100%',
		position: 'relative',
	},
}

const App = ({ location, classes }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const isHome = location.pathname === '/'
	console.log(location)
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
	useEffect(() => {
		setIsMenuOpen(false)
		window.scrollTo(0, 0)
	}, [location])
	useEffect(() => {
		if (isMenuOpen && window.innerWidth < SM_MIN_VALUE) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'initial'
		}
	}, [isMenuOpen])
	return (
		<div className={classes.wholePage}>
			<div className={classes.appContainer}>
				<NavBar isHome={isHome} />
				<MobileNavBar isHome={isHome} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/copy" exact component={Copy} />
					<Route path="/editorial" exact component={Editorial} />
					<Route path="/about" exact component={About} />
					<Route path="/starbucks" exact component={Starbucks} />
					<Route path="/Fox" exact component={Fox} />
				</Switch>
			</div>
		</div>
	)
}


const RouterApp = injectSheet(styles)(withRouter(props => <App {...props} />))

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)
