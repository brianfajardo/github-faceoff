const React = require('react')

const { transparentBg } = require('../styles/index')

function MainContainer(props) {
    return (
        <div className="jumbotron col -sm-12 text-center" style={transparentBg}>
            {props.children}
        </div>
    )
}

module.exports = MainContainer