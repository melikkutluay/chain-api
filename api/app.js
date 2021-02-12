const express = require('express')
const app = express()
const route = require('./routes/index')
const port = 5000
const cors = require('cors');
app.use(cors());

app.use(route);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})