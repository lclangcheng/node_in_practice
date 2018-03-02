

var CountStream = require('./countstream');
var countStream = new CountStream('china');
var http = require('http');

http.get('http://english.sina.com/', function(res) {
    res.pipe(countStream);
})


countStream.on('total', function(count) {
    console.log('Total matches:', count);
})
