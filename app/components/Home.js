const React = require('react')
const { Link } = require('react-router')

const MainContainer = require('./MainContainer')

const Home = React.createClass({
    render: function () {
        return (
            <MainContainer>
                <h1>Github Faceoff</h1>
                <p className='lead'>"Mano e mano."</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>Begin</button>
                </Link>
            </MainContainer >
        )
    }
})

module.exports = Home