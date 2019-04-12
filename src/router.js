import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Routers from './config/routerMap'
import App from './App'
// import Login from './pages/login'
// import NoMatch from './pages/nomatch'
import Admin from './admin'

const NoMatch = lazy(() => import('./pages/nomatch'));

export default class IRouter extends React.Component {
    fallback = () =>{
        return (
            <div>Loading...</div>
        );
    }
    render() {
        return(
            <Router>
                <Suspense fallback={this.fallback()}>
                    <App>
                        {/* <Route path="/login" component={Login} /> */}
                        {/* <Route  component={NoMatch} /> */}

                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                        {Routers.map((item, index) => {
                                            return <Route key={index} path={item.path} exact render = { props =>
                                                !item.auth ? (<item.component {...props} />) : <Redirect to={{pathname: '/admin/form/login'}} />
                                            }/>
                                        })}

                                    {/* <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loadings} />
                                    <Route path="/admin/ui/notification" component={Notification} />
                                    <Route path="/admin/ui/messages" component={Messages} />
                                    <Route path="/admin/ui/tabs" component={Tabs} />
                                    <Route path="/admin/ui/gallery" component={Gallery} />
                                    <Route path="/admin/ui/carousel" component={Carousel} />
                                    <Route path="/admin/form/login" component={FormLogin} />
                                    <Route path="/admin/form/register" component={FormRegister} />
                                    <Route path="/admin/table/basic" component={BasicTable} /> */}
                                    {/* <Route path="/admin/order" component={FormRegister} /> */}
                                    {/* <Route component={NoMatch} /> */}
                                    <NoMatch/>
                                </Switch>
                            </Admin>
                        } />
                    </App>
                </Suspense>
            </Router>
        );
    }
}