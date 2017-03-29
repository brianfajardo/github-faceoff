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
    handleInitiateFaceoff: function () {
        this.context.router.push({
            pathname: '/results',
            // Pushing playersInfo through to the /results route
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    render: function () {
        return (
            <ConfirmFaceoff
            isLoading={this.state.isLoading}
            onInitiateFaceoff={this.handleInitiateFaceoff}
            playersInfo={this.state.playersInfo} />
        )
    }
})

module.exports = ConfirmFaceoffContainer