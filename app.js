var express =require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
server.listen(8000)
//var Redis = require('ioredis');
//var redis = new Redis();
var nunjucks =require('nunjucks')
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('assets'))
app.use(express.static('favicomatic'))
app.get('/', home)
app.get('/ipas', apps)
app.get('/signed', apps)
app.get('/apps', apps)
app.get('/betas', betas)
app.get('/jailbreaks', jailbreaks)
app.get('/credits', credits)
app.get('/test', test)
app.get('/help', help)
app.get('/contact', contact)


function home(req, res) {
  res.render('index.html', {title: 'iOS Haven'})
}
function apps(req, res){
  res.render('apps.html', {title: 'Apps - iOS Haven'})
}
function betas(req, res) {
  res.render('betas.html', {title: 'Betas - iOS Haven '})
}
function jailbreaks(req, res) {
  res.render('jailbreaks.html', {title: 'Jailbreaks - iOS Haven'})
}
function credits(req, res) {
  res.render('credits.html', {title: 'Credits - iOS Haven'})
}
function test(req, res) {
  res.render('test.html')
}
function help(req, res) {
  res.render('help.html', {title: 'Help - iOS Haven'})
}
function contact(req,res) {
  res.render('contact.html', {title: 'Contact - iOS Haven'})
}
