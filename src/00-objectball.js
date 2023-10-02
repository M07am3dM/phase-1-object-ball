const gameObject = () => {
  return {
    home: {
      teamName: "Brooklyn Nets",
      color: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      color: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};

console.log(gameObject());

const gameData = gameObject();
const players = gameData[teamKey].Players;

const numPointsScored = (playerName) => {
    for (let teamKey in gameData) {
        if (players.hasOwnProperty(playerName)) {
            return players[playerName].points;
                                
        }
    }
    return -1;
};

console.log(numPointsScored(playerName));

const shoeSize = (playerName) => {
    for (const teamKey in gameData) {
        if (players.hasOwnProperty(playerName)) {
            return players[playerName].shoe;
        }
    }
    return -1;
};

console.log(shoeSize(playerName));

const teamColors = (teamNames) => {
    const team = gameData.home.teamName === teamName ? gameData.home : gameData.away;
    if (team) {
        return team.color;
    }else {
        return [];
    }
};

console.log(teamColors(teamName));

// const teamColors = (teamName) => {
//     if (gameData.home.teamName === teamName) {
//         return gameData.home.color;
//     }else if (gameData.away.teamName === teamName) {
//         return gameData.away.color;
//     }else {
//         return [];
//     }
// };

// console.log(teamColors(teamName));

const teamNames = () => [gameData.home.teamName, gameData.away.teamName];

console.log(teamNames());


const playerNumbers = (teamName) => {
    const team = gameData.home.teamName === teamName ? gameData.home : gameData.away;
    if (team) {
        return Object.values(team.players).map(player => player.number);
    }else {
        return [];
    }
};

console.log(playerNumbers(teamName));

const playerStats = (playerName) => {
    for (teamKey in gameData) {
        if (players.hasOwnProperty[teamKey].Players);
        return players[playerName];
    }
    return null;
};

console.log(playerStats(playerName));

const bigShoeRebounds = () => {
    const allPlayers = Object.values(gameData.home.players).concat(Object.values(gameData.away.players));
    const largestShoeSizePlayer = allPlayers.reduce((maxPlayer, currentPlayer) => currentPlayer.shoe > maxPlayer.shoe ? currentPlayer : maxPlayer);
    return largestShoeSizePlayer;
};

const bigShoeRebounds = () => {
  const gameData = gameObject()
  let largestShoeSize = 0;
  let playerName = '';
  let teamName = '';
  for (const team in gameData){
      for (const player in gameData[team].players){
          const shoeSize = gameData[team].players[player].shoe
          if (shoeSize > largestShoeSize){
              largestShoeSize = shoeSize
              playerName = player
              teamName = team
          }
      }}
  return gameData[teamName].players[playerName].rebounds


}

console.log(bigShoeRebounds());

//***BONUS***

const mostPointsScored = () => {
  const gameData = gameObject()
  let playerName = ''
  let mostPoints = 0
  for (const team in gameData){
      for (const player in gameData[team].players){
          const pointsScored = gameData[team].players[player].points
          if (pointsScored > mostPoints){
              mostPoints = pointsScored
              playerName = player
          }
      }}
      return playerName
}

console.log(mostPointsScored());

const winningTeam = () => {
  const gameData = gameObject()
  let homeTeamScore = 0
  let awayTeamScore = 0

  for (player in gameData.home.players) {homeTeamScore = homeTeamScore + gameData.home.players[player].points}
  for (player in gameData.away.players) {awayTeamScore = awayTeamScore + gameData.away.players[player].points}

  return homeTeamScore>awayTeamScore ? "HOME team is the winner" :"AWAY team is the winner" 

}


console.log(winningTeam());

const playerWithLongestName = () => {
  const gameData = gameObject()
  let playerName = ''
  for (const team in gameData){
      for (const player in gameData[team].players){
          if ( player.length> playerName.length){
  
              playerName = player
          }
      }}
      return playerName
}

console.log(playerWithLongestName());


//***Super BONUS***


const doesLongNameStealATon = () => {
  const gameData = gameObject()
  let playerName = ''
  let mostSteals = 0
  for (const team in gameData){
      for (const player in gameData[team].players){
          const stealsMade = gameData[team].players[player].steals
          if (stealsMade > mostSteals){
              mostSteals = stealsMade
              playerName = player
          }
      }}
      return playerName == playerWithLongestName()
}

console.log(doesLongNameStealATon());