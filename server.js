const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const logger = require("morgan");
const port = 5000 || 3001;
const app = express();

const corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200,
    credentials: true
};

app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(require('./routes'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});