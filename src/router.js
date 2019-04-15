import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Routers from './config/routerMap'
import App from './App'
import Admin from './admin'
import NoMatch from './pages/nomatch'

export default class IRouter extends React.Component {
    render() {
        return(
            <Router>
                <App>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                {Routers.map((item, index) => {
                                    return <Route key={index} path={item.path} exact render = { props =>
                                        !item.auth ? (<item.component {...props} />) : <Redirect to={{pathname: '/admin/form/login'}} />
                                    }/>
                                })}
                                <Route component={NoMatch} /> 
                            </Switch>
                        </Admin>
                    } />
                </App>
            </Router>
        );
    }
}