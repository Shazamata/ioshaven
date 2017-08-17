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
app.get('/', home)
app.get('/ipas', ipas)
app.get('/signed', signed)
app.get('/betas', betas)
app.get('/jailbreaks', jailbreaks)
app.get('/upload', upload)
app.get('/credits', credits)
app.get('/cydia', cydia)
app.get('/test', test)

function home(req, res) {
  res.render('index.html', {title: 'iOS Haven'})
}
function ipas(req, res) {
  res.render('ipas.html', {title: 'IPA Library - iOS Haven'})
}
function signed(req, res) {
  res.render('signed.html', {title: 'Signed IPAs - iOS Haven'})
}
function betas(req, res) {
  res.render('betas.html', {title: 'Beta Downloads - iOS Haven '})
}
function jailbreaks(req, res) {
  res.render('jailbreaks.html', {title: 'iOS Jailbreaks - iOS Haven'})
}
function upload(req, res) {
  res.render('upload.html', {title: 'Upload an IPA - iOS Haven'})
}
function credits(req, res) {
  res.render('credits.html', {title: 'Credits - iOS Haven'})
}
function cydia(req, res) {
  res.render('cydia.html', {title: 'Cydia Impactor - iOS Haven'})
}
function test(req, res) {
  res.render('test.html')
}
