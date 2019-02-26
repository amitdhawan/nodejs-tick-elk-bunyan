const express = require('express')
const bunyan = require('bunyan');
const log = bunyan.createLogger(
    {
        name: "nodejs-tick-elk-bunyan",
        streams: [{
            path: './logs.log',
        }],
    }
);


const app = express()
const port = 3000

app.get('/', (req, res) => {
    // log.info("This is sample log");
    log.error(new Error('This is sample error log'));
    res.send('Bingo!!! Monitoring Started.')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))