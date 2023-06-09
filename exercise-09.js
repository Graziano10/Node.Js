

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
  };
  
const promiseData = async () => {
    const players = ['Tina', 'Jorge', 'Julien'];
  
    for (const player of players) {
      try {
        const result = await luckyDraw(player);
        console.log(result); 
      } catch (err) {
        console.error(err.message);
      };
    };
  };
  
  promiseData();