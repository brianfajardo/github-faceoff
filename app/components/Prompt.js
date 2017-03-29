const React = require('react')
const { PropTypes } = React

const { transparentBg } = require('../styles/index')

function Prompt({header, onSubmitUser, onUpdateUser, username}) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{header}</h1>
            <div className="col-sm-12">
                <form onSubmit={onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Github username"
                            onChange={onUpdateUser}
                            value={username}
                            type="text" />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success" type="submit">
                            Next
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

module.exports = Prompt