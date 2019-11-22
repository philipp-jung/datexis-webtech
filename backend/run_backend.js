const express = require('express');
const cors = require('cors');
const app = express();

const allowed_origin = ['http://localhost:3000']
app.use(cors({
      origin: function(origin, callback){
          // allow requests with no origin
          // (like mobile apps or curl requests)
          if(!origin) return callback(null, true);

          if(allowed_origin.indexOf(origin) === -1){
          var msg = 'The CORS policy for this site does not ' +
              'allow access from the specified Origin.';
          return callback(new Error(msg), false);
          }
          return callback(null, true);
      }
}));


app.get('/date/', function (request, response) {
    const now = new Date(Date.now());
    response.send(now);
});

app.listen(5000, function() {
    console.log('Listen at port 5000');
});
