const React = require('react')
const { PropTypes } = React
const { Link } = require('react-router')

const { transparentBg, spacing } = require('../styles/index')
const UserDetails = require('./UserDetails')
const UserDetailsWrapper = require('./UserDetailsWrapper')

function show(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmFaceoff(props) {
    return props.isLoading === true
        ?   <p>LOADING...</p>
        :   <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>Confirm Github Users</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Challenger 1">
                        <UserDetails info={props.playersInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Challenger 2">
                        <UserDetails info={props.playersInfo[1]} />
                    </UserDetailsWrapper>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12">
                        <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateFaceoff} style={spacing}>
                            Battle
                        </button>
                </div>
                <div className="col-sm-12">
                    <Link to="/playerOne">
                        <button type="button" className="btn btn-lg btn-danger" style={spacing}>
                            Reselect Players
                        </button>
                    </Link>
                </div>
            </div>
        </div>                  
}

    ConfirmFaceoff.propTypes = {
        isLoading: PropTypes.bool.isRequired,
        onInitiateFaceoff: PropTypes.func.isRequired,
        playersInfo: PropTypes.array.isRequired
    }

    module.exports = ConfirmFaceoff