

const fs = require('fs');

const content = 'This is content';

fs.writeFile('content.txt', content, (err) => {
    if (err) {
        console.error('Error Write File', err);
        return
    }
    console.log('Successfully Written')
} )