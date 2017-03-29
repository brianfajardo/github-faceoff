const React = require('react')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')


const Main = require('../components/Main')
const Home = require('../components/Home')
const PromptContainer = require('../containers/PromptContainer')

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
        </Route>
    </Router>
)

module.exports = routes