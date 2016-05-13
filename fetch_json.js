var qhttp = require('q-io/http')

qhttp.read("http://localhost:1337")
  .then(function(response){
    console.log(JSON.parse(response));
  })
  .then(null, console.error)
  .done();
