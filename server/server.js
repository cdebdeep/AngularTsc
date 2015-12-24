/**
 * Created by debdeep.chaudhuri on 12/18/2015.
 */


///creaing a server by using node only
/*var http = require('http');
http.createServer(function(req,res){   
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello from Node server');
}).listen(3000,'127.0.0.1');
console.log('server running at http://127.0.0.1:3000'); */

///creating a server by express
//This is a sever created on Node.js & Express.
 var express = require('express');
 var app = express(); 
 var testCases=[
     {testCaseName:'TestCase101',testCaseId:101},
             {testCaseName:'TestCase202',testCaseId:102}
             ];
 app.get('/testCase',function(req,res){
     res.send(
        testCases
         )
 });
 
  app.get('/testCase/:id',function(req,res){
      var  item = testCases.filter(function(v){
          console.log(req.params.id);
           return v.testCaseId===req.param.id;      
        });
         console.log(req.params.id);
     res.send(
         item        
         )
 });
 
 app.listen(3000);
 console.log('server running at http://127.0.0.1:3000');