import React from 'react'
import injectSheet from 'react-jss'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Home from 'pages/Home'

const styles = {
	wholePage: {
		display: 'flex',
		justifyContent: 'center',
	},
	appContainer: {
		maxWidth: 1366,
		width: '100%',
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
				</Switch>
				{/* NavBar?? */}
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
