const React = require('react')

const Results = require('../components/Results')
const githubHelpers = require('../utils/githubHelpers')

const ResultsContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function () {
        // ConfirmFaceoffContainer passes playersInfo on mount/render
        // playersInfo includes # of followers used in battle() helper function
        githubHelpers
            .battle(this.props.location.state.playersInfo)
            .then(scores => {
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            })
    },
    render: function () {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />
        )
    }
})

module.exports = ResultsContainer