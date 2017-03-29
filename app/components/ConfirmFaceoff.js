const React = require('react')

function ConfirmFaceoff({isLoading, playersInfo}) {
    return isLoading === true ? <p>LOADING...</p> : <p>CONFIRM FACEOFF!</p>
}

module.exports = ConfirmFaceoff