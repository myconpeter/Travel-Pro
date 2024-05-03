

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const mongoose= require('mongoose');

const methodOverride = require("method-override");


const dotenv = require('dotenv')



dotenv.config()
const PORT  = process.env.PORT;

const indexRoutes = require("./routes/indexRoute");
const search = require('./routes/search')




//EJS
app.set('view engine','ejs');
//app.use(expressEjsLayout);


app.use(bodyParser.urlencoded({extended: true}));

 app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    currentAdmin = req.user;
    next();
});

app.use(methodOverride("_method"));

// routes
app.use(indexRoutes);
app.use(search)


let mongoURL = ''

if (process.env.NODE_ENV === 'production') {
    mongoURL = process.env.MONGO_URI_PROD
    console.log('Running in Production environment');
} else if (process.env.NODE_ENV === 'local') {
    mongoURL = process.env.MONGO_URI_LOCAL
    console.log('Running in local environment');
    
} else {
    console.log('ENVIRONMENT NOT SET CORRECTLY, PLEASE CHECK')

}

// MONGOOSE CONNECTION
mongoose.connect(mongoURL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`connected to port: ${PORT} and dataBase ${mongoURL}`)
        })

    })
    .catch(err => console.log('err'))

