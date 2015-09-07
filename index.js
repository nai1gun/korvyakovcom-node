var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index', {title: 'Alexander Korvyakov, software engeneer'});
});

app.get('/about', function(request, response) {
  response.render('pages/about', {title: 'Alexander Korvyakov, software engeneer - about'});
});

app.get('/education', function(request, response) {
  response.render('pages/education', {title: 'Alexander Korvyakov, software engeneer - education'});
});

app.get('/experience', function(request, response) {
  response.render('pages/experience', {title: 'Alexander Korvyakov, software engeneer - experience'});
});

app.get('/projects', function(request, response) {
  response.render('pages/projects', {title: 'Alexander Korvyakov, software engeneer - projects'});
});

app.get('/skills', function(request, response) {
  response.render('pages/skills', {title: 'Alexander Korvyakov, software engeneer - skills'});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


