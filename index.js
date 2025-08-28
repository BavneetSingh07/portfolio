let ejs = require('ejs');
let express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/projects', (req, res) =>{
  res.render('projects');
});

app.get('/cv', (req, res) => {
  res.render('cv');
});

app.get('/blogs', (req, res) =>{
  res.render('blogs');
});

app.get('/photography', (req, res) => {
  res.render('photography');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});