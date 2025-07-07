
const express = require('express');
const app = express();
const comments = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { comments });
});

app.post('/comment', (req, res) => {
  comments.push({ text: req.body.comment, likes: 0 });
  res.redirect('/');
});

app.post('/like/:index', (req, res) => {
  const i = req.params.index;
  comments[i].likes += 1;
  res.redirect('/');
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
