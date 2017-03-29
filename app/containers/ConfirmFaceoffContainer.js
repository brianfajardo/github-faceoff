const React = require('react')

const ConfirmFaceoff = require('../components/ConfirmFaceoff')

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
    },
    render: function () {
        return (
            <ConfirmFaceoff isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}/>
        )
    }
})

module.exports = ConfirmFaceoffContainer