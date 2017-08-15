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

function home(req, res) {
  res.render('index.html')
}
function ipas(req, res) {
  res.render('ipas.html')
}
function signed(req, res) {
  res.render('signed.html')
}
