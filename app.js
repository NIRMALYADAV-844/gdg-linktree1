const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('pages/home', { title: 'GDG Dr.AITD', page: 'home' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'GDG Dr.AITD', page: 'about' });
});


app.get('/organisers', (req, res) => {
  res.render('pages/organisers', { title: 'GDG Dr.AITD', page: 'organisers' });
});



app.listen(8080, () => {
  console.log("Listening on port 8080");
});

module.exports = app;