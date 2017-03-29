const React = require('react')
const { transparentBg } = require('../styles/index')
const { Link } = require('react-router')

const Home = React.createClass({
    render: function () {
        return (
            <div className='jumbotron col-sm-12 text-center' style={transparentBg} >
                <h1>Github Faceoff</h1>
                <p className='lead'>Some fancy motto</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>Begin!</button>
                </Link>
            </div >
        )
    }
})

module.exports = Home