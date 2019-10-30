var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index', {title: 'Alexander Korvyakov, software engeneer', page: 'index'});
});


['about', 'education', 'experience', 'projects', 'skills'].forEach(function(page) {
  app.get('/' + page, function(request, response) {
    response.render('pages/' + page, 
      {title: 'Alexander Korvyakov, software engeneer - ' + page, page: page});          
  }); 
});

app.get('/agile-ml', function(req, res) {
  res.redirect('https://www.linkedin.com/pulse/why-machine-learning-development-should-always-agile-korvyakov/');
});


app.get('/structuring-ml', function(req, res) {
  res.redirect('https://www.tomtom.com/blog/location-technology/structuring-machine-learning/');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


