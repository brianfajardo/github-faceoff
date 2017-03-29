const React = require('react')

function showShit(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmFaceoff(props) {
    return props.isLoading === true ? <p>LOADING...</p> : <div>VERSUS! <pre>{JSON.stringify(props, null, ' ')}</pre></div>
}

module.exports = ConfirmFaceoff