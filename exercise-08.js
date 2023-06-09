

const luckyDraw = (player) => {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  

  const players = ['Joe', 'Caroline', 'Sabrina'];
  

  players.reduce((promise, player) => {
    return promise.then(() => {
      return luckyDraw(player)
        .then((result) => {
          console.log(result); 
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
  }, Promise.resolve());