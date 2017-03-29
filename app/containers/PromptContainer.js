const React = require('react')

const Prompt = require('../components/Prompt')

const PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            username: ''
        }
    },
    handleUpdateUser: function (event) {
        this.setState({
            username: event.target.value
        })
    },
    handleSubmitUser: function (event) {
        event.preventDefault()
        const username = this.state.username
        this.setState({
            username: ''
        })
        console.log(this.props)
        if (this.props.routeParams.playerOne) {
            // Go to /faceoff
            // Passing data along to /faceoff through this.props.location.query
            this.context.router.push({
                pathname: '/faceoff',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        } else {
            // Go to /playerTwo
            this.context.router.push(`/playerTwo/${this.state.username}`)
        }
    },
    render: function () {
        return (
            <Prompt 
            onSubmitUser={this.handleSubmitUser}
            onUpdateUser={this.handleUpdateUser}
            header={this.props.route.header}
            username={this.state.username} />
        )
    }
})

module.exports = PromptContainer