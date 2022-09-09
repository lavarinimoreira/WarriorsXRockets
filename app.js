const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
];

// ***********************************
// REFACTORING THE CODE WITH FUNCTIONS
// ***********************************

const makeChart = (games, targetTeam) =>{
    const ulParent = document.createElement('ul');
    for(let game of games){
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game);
        gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
        ulParent.appendChild(gameLi);
    }
    return ulParent;
};

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
};

const getScoreLine = ({homeTeam, awayTeam}) => {
    const {team: hTeam, points: hPoints} = homeTeam;
    const {team: aTeam, points: aPoints} = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if(aPoints > hPoints){
       scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    }else {
       scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;
};

const chartWarriors = makeChart(warriorsGames, 'Golden State');
const sectionWarriors = document.querySelector('#gs');
sectionWarriors.appendChild(chartWarriors);

const chartHouston = makeChart(warriorsGames, 'Houston');
const sectionHouston = document.querySelector('#hr');
sectionHouston.appendChild(chartHouston);