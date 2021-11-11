const express = require('express');

const documents = require('./routes/documents');
const static = require('./routes/static');

const app = express();
const port = 3000;

// middleware
app.set('view engine', 'ejs');
app.set('views', './views');

// route middleware
app.use('/', documents);
app.use('/static', static);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
