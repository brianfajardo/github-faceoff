const React = require('react')
const { PropTypes } = React

function show (obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results(props) {
    return (
        <div>Results: {show(props)}</div>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results