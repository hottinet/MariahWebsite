import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Home from 'pages/Home'
import Copy from 'pages/Copy'
import Editorial from 'pages/Editorial'
import About from 'pages/About'
import Starbucks from 'pages/Starbucks'
import NavBar from 'components/NavBar'

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
	useEffect(() => {
		// setIsMenuOpen(false)
		window.scrollTo(0, 0)
	}, [location])
	return (
		<div className={classes.wholePage}>
			<div className={classes.appContainer}>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/copy" exact component={Copy} />
					<Route path="/editorial" exact component={Editorial} />
					<Route path="/about" exact component={About} />
					<Route path="/starbucks" exact component={Starbucks} />
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
