

function luckyDraw(player) {
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
  };

const promisResult = async () => {
    const players = ['Tina', 'Jorge', 'Julien'];
  
    try {
      const results = await Promise.all(players.map(player => luckyDraw(player)));
      results.forEach(result => {
        console.log(result); 
      });
    } catch (err) {
      console.error(err.message); 
    }
  }
  
  promisResult();