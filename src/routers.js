import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './reducersAndStore.js'


import App from './page/App.jsx'

import Home from './page/home.jsx'
import Add from './page/add.jsx'
import Mine from './page/mine.jsx'
import p404 from './page/404.jsx'

export default () => {
    return <Provider store={store}>
        <Router class="app">
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/app" render={props => (
                    <App {...props} routes={[
                        {
                            path: '/app/home',
                            component: Home,
                        },
                        {
                            path: '/app/add',
                            component: Add
                        },
                        {
                            path: '/app/mine',
                            component: Mine
                        }
                    ]}/>
                )}/>

                <Route exact path="/mine" component={Mine}/>
                <Route component={p404}/>
            </Switch>
        </Router>
    </Provider>
}
