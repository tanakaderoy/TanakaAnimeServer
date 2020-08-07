const  express = require('express');
import bodyParser from "body-parser"
const trendingRoutes = require('./routes/trending-route')

const app = express();

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8004;
// routes and api calls
app.use('/trendingShows/', trendingRoutes);

app.listen(port, () => {
  console.log(`Trending Shows available http://localhost:${port}/trendingShows/`);
  console.log("listenting to port: ", port);
});

