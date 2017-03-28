const React = require('react')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')


const Main = require('../components/Main')
const Home = require('../components/Home')

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

module.exports = routes