
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import App from './App'
import Layout from './layout'
import User from './user'

export default function Index() {
	return (
		<Router>
			<Layout />
			<Switch>
				<Route path='/app'>
					<App />
		    </Route>
				<Route path='/user'>
					<User />
		    </Route>
			</Switch>
		</Router>
	)
}
