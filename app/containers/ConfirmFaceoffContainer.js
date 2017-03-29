const React = require('react')

const ConfirmFaceoff = require('../components/ConfirmFaceoff')
const githubHelpers = require('../utils/githubHelpers')

const ConfirmFaceoffContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    // Once rendered
    componentDidMount: function () {
        const query = this.props.location.query
        // Fetch info from github then update state
        githubHelpers
            .getPlayersInfo([query.playerOne, query.playerTwo])
            .then(players => {
                // Update state
                // ** Note, using arrow function alleviates the need for .bind(this) **
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            })
    },
    render: function () {
        return (
            <ConfirmFaceoff isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
        )
    }
})

module.exports = ConfirmFaceoffContainer