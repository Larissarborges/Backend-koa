const koa = require('koa')
const cors = require('koa2-cors')
const morgan = require('koa-morgan')
const router = require('./routes')
const app = new koa()
const bodyParser = require('koa-bodyparser')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true,  useUnifiedTopology: true });

app.use(cors({
    origin: function(ctx){
        return 'http://localhost:3000'
    },
    credentials: true
}))
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(morgan('[:date[clf]] :method :url status::status length::res[content-length] - :response-time ms'));
app.use(async ctx => {
  ctx.body = `BACKEND - ${process.env.NODE_ENV}`;
});
app.listen(3002, () => {
    console.log('Backend running..')
})