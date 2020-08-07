import express from 'express'
import bodyParser from "body-parser"
const cors = require('cors')({ origin: true })
const showRoutes = require('./routes/home-page-route')
const watchRoute = require('./routes/watch-router')

const app = express();

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors())

const port = 8004;
// routes and api calls

app.use('/shows', showRoutes);
app.use('/watch',watchRoute)
var route, routes = [];

app._router.stack.forEach(function(middleware){
    if(middleware.route){ // routes registered directly on the app
        routes.push(middleware.route);
    } else if(middleware.name === 'router'){ // router middleware 
        middleware.handle.stack.forEach(function(handler){
            route = handler.route;
            route && routes.push(route);
        });
    }
});

app.listen(port, () => {
  console.log(routes)
  console.log(`HomePage Shows available http://localhost:${port}/shows/home`);
  console.log(`Watch an episode at http://localhost:${port}/shows/watch`)
  console.log("listenting to port: ", port);
});

