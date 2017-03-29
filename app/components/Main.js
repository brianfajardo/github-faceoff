const React = require('react')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

// Can load this like a JavaScript module is because of webpack, need to configure WebpackConfig first
require('../main.css')


const Main = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {/* this.props.children needs a key because ReactCSSTransitionGroup needs its child element to have a key */}
                    {/* so we use React.cloneElement in order to attach a key prop to it */}
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
})

module.exports = Main