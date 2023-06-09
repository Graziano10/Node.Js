

const figlet = require("figlet");

const text = 'This is a Figlet'

figlet(text, (err, data) => {
    if(err) {
        console.log('Error 404');
        console.dir(err);
        return;
    }
    console.log(data);
});

