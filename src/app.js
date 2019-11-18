import React from 'react'
import injectSheet from 'react-jss'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Home from 'pages/Home'
import Copy from 'pages/Copy'
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
	// Create global effects or state here
	// with access to router location

	return (
		<div className={classes.wholePage}>
			<div className={classes.appContainer}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/" exact component={Copy} />
				</Switch>
				<NavBar />
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
