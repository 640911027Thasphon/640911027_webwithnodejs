const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/projects.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
