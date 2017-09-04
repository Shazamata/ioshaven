var express =require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
server.listen(8000)
var Redis = require('ioredis');
var redis = new Redis();
var _ =require('lodash')
const bodyParser  =  require('body-parser')
var nunjucks = require('nunjucks')
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('assets'))
app.use(express.static('favicomatic'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var env = require('./env.json')

app.get('/', home)
app.get('/ipas', apps)
app.get('/signed', apps)
app.get('/apps', apps)
app.get('/betas', betas)
app.get('/jailbreaks', jailbreaks)
app.get('/credits', credits)
app.get('/test', test)
app.get('/help', help)
app.get('/admin', admin)
app.post('/contact', contact)
app.post('/admin', login)


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
  redis.lpush("contactList", JSON.stringify(req.body))
  res.end("delete")
}
function admin(req, res) {
  res.render('admin.html', {
    title: 'Admin - iOS Haven',
    showlogin: true
  })
}
function login(req, res){
  if (req.body.password === env.password ) {
    redis.lrange("contactList", 0, -1)
    .then((results)=>{
      var newArray = []
      _.forEach(results, function(value,key){
        value = JSON.parse(value)
        newArray.push(value)
      })
        res.render('admin.html', {
          title: 'Admin - iOS Haven',
          contactdata: newArray,
          showlogin: false
        })
    })

  }
}
