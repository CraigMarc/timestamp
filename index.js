// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req, res) => {
 
  

  
  if (!req.params.date) {
     let dt = new Date();
    let unix = Date.parse(dt);
let utc = new Date(dt).toUTCString()
  
  res.json({unix : unix, utc: utc})
  
}

else if (/^(\d{13})?$/.test(req.params.date) == true)  {

  let unix = parseInt(req.params.date)
let utc = new Date(unix).toUTCString()
 res.json({unix : unix, utc: utc})
  
}
  
else if (isNaN(Date.parse(req.params.date))) {
  res.json({ error : "Invalid Date" })
  
}

else {
  let dt = new Date(req.params.date);
  let unix = Date.parse(dt);
let utc = new Date(dt).toUTCString()
  
  res.json({unix : unix, utc: utc})
}


   
  });
 



  


 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
