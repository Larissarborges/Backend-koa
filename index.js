const koa = require('koa')
const cors = require('koa2-cors')
const morgan = require('koa-morgan')
const router = require('./src/routes')
const app = new koa()
const bodyParser = require('koa-bodyparser')

var mongoose = require('mongoose');
//m43nOZiixVuSDDaB
// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connect('mongodb+srv://tractian:m43nOZiixVuSDDaB@tractian.wdjri.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true });

app.use(cors({
    origin: function(ctx){
        //return 'http://localhost:3000'
        return 'https://objective-feynman-de99ad.netlify.app'
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
app.listen(process.env.PORT || 3002, () => {
    console.log('Backend running..')
})