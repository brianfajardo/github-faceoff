const React = require('react')
const { PropTypes } = React
const { Link } = require('react-router')

const { transparentBg, spacing } = require('../styles/index')
const UserDetails = require('./UserDetails')
const UserDetailsWrapper = require('./UserDetailsWrapper')
const MainContainer = require('./MainContainer')

// Create a private stateless function to reduce repeating code (DRY)
function StartOver() {
    return (
        <div className="col-sm-12" style={spacing}>
            <Link to='/playerOne'>
                <button type="button" className="btn btn-lg btn-danger">Play again</button>
            </Link>
        </div>
    )
}

function Results(props) {
    const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
    const losingIndex = winningIndex === 0 ? 1 : 0

    // Check if isLoading
    if(props.isLoading === true) {
        return (
            <p>Loading...</p>
        )
    }

    // Check for a tie situation
    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        )
    }

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                     <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
              </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results