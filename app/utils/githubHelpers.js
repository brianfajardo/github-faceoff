const axios = require('axios')

function getUserInfo(username) {
    // Returns an array of promises
    // Chainable
    return axios.get(`https://api.github.com/users/${username}`)
}

const githubHelpers = {
    getPlayersInfo: function (players) {
        // Fires 2 request to github api (player one and player two)
        // .all --> When all Promises are done resolving `.then`...
        return axios
            .all(players.map(username => getUserInfo(username)))
            // use .map just to get data object from response
            .then(info => info.map((user) => user.data))
            .catch(err => console.warn('Error in getPlayersInfo', err))
    }
}

module.exports = githubHelpers