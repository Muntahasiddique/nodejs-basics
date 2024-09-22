// const userName = 'Muntaha';
// console.log(userName);
// http object 
// const http =require('http');
const express =require('express');
const app=express();
// 1st value is the path and 2nd is the function u want excute
app.get('/currenttimme', function (req , res){
    res.send('<h1>' +new Date().toISOString() + '</h1> ')
}); 
app.get('/', function(req , res ){
res.send('<h1>Hello world</h1> ')
});
app.listen(3000);



// -------------------without expresss-------------------
// function handlefunction( request , response){
//     if( request.url === '/currenttimme'){
//         response.statusCode=200;
//         response.end('<h1>' +new Date().toISOString() + '</h1> ')
//     }
//    else if(request.url === '/'){
//     response.statusCode=200;
//     response.end('<h1>Hello world</h1> ')
//    }
    

// }
// const server =http.createServer(handlefunction);
// server.listen(3000);
// // amazon.com =>send a request a amazon server
// // amzon.com :80
// --------------------------------------------------------------