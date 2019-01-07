import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './containers/Layout/Layout'
import Landing from './containers/Landing/Landing'
import About from './containers/About/About'
import Menu from './containers/Menu/Menu'
import Events from './containers/Events/Events'
import Contact from './containers/Contact/Contact'
import Catering from './containers/Catering/Catering'
import Jobs from './containers/Jobs/Jobs'


class App extends Component {
  render() {
    return (
		    <div>
			    <Layout>
			    	<Switch>
					    <Route path="/" exact component={Landing} />
				    	<Route path="/about" component={About} />
				    	<Route path="/menu" component={Menu} />
				    	<Route path="/events" component={Events} />
				    	<Route path="/contact" component={Contact} />
				    	<Route path="/catering" component={Catering} />
				    	<Route path="/jobs" component={Jobs} />
				    </Switch>
			    </Layout>
			</div>
    );
  }
}

export default App;
