const React = require('react')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')


const Main = require('../components/Main')
const Home = require('../components/Home')
const PromptContainer = require('../containers/PromptContainer')
const ConfirmFaceoffContainer = require('../containers/ConfirmFaceoffContainer')
const ResultsContainer = require('../containers/ResultsContainer')

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='faceoff' component={ConfirmFaceoffContainer} />
            <Route path='results' component={ResultsContainer} />
        </Route>
    </Router>
)

module.exports = routes 