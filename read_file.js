// var arg = process.argv[2];
// var fs = require('fs');
// fs.readFile(arg, function (err, data) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('/tmp/test_async.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

// console.log("Program Ended");
// var fs = require("fs");
// var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('/tmp/test_async.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data,'UTF8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//     console.log("Write completed.");
// });

// writerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("Program Ended");