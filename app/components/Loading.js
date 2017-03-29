const React = require('react')
const { PropTypes } = React

const { container, content } = require('../styles/index')

const Loading = React.createClass({
    propTypes: {
        text: PropTypes.string,
        speed: PropTypes.number
    },
    getInitialState: function () {
        // Appears to be an anti-pattern, but React DOCs state...
        // That if you make it clear that the prop is only seed data for the components internally controlled state
        this.originalText = this.props.text
        return {
            text: this.originalText
        }
    },
    getDefaultProps: function() {
        return {
            text: 'Loading',
            speed: 300
        }
    },
    componentDidMount: function () {
        const stopText = `${this.originalText}...`
        this.interval = setInterval(() => {
            if (this.state.text === stopText) {
                this.setState({
                    text: this.originalText
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }, this.props.speed)
    },
    componentWillUnmount: function () {
        clearInterval(this.interval)
    },
    render: function () {
        return (
            <div style={container}>
                <p style={content}>{this.state.text}</p>
            </div>
        )
    }
})

module.exports = Loading