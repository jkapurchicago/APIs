var request = require("request");
request("http://www.google.com", function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(body); //show the HTMl for the google homepage
  }
});
var request = require("request");
request('http://www.google.com', function() {error, response, body;
    if(error){ 
        console.log("Something went Wrong!"); 
        console.log(error); 

    } else { );
