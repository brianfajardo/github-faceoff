const axios = require('axios')

function getUserInfo(username) {
    // Returns an array of promises
    // Chainable
    return axios.get(`https://api.github.com/users/${username}`)
}

// gets total repositories of user
function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`)
}

// loop over repos and totals # of stars
function getTotalStars (repos) {
    return repos.data.reduce((prev, current) => {
        // repos.data[i].stargazers_count = # of stars on repo
        return prev + current.stargazers_count
    }, 0)
}

function getPlayersData (player) {
    // returns a Promise
    return   getRepos(player.login)
            .then(getTotalStars)
            .then(totalStars => {
                return {
                    // player.followers contained in ResultsContainer router query
                    followers: player.followers,
                    // totalStars calculated from repos
                    totalStars: totalStars
                }
            })
}

// Simple scoring algorithm
function calculateScores (players) {
    return [
        // A follow is worth 3x points
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
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
    },
    battle: function (players) {
        const playerOneData = getPlayersData(players[0])
        const playerTwoData = getPlayersData(players[1])

        // Do something with Promises
        // Looks like...
        // calculateScores([{followers: 10, totalStars: 12}, {followers: 15, totalStars: 20}])
        // outputs: [42, 65]
        return axios.all([playerOneData, playerTwoData])
                    .then(calculateScores)
                    .catch(err => console.warn('Error in getPlayersInfo:', err))
    }
}

module.exports = githubHelpers