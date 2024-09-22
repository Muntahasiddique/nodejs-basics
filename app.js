// const userName = 'Muntaha';
// console.log(userName);
// http object 
// const http =require('http');
const express =require('express');
// to handel all kind of requests
const app=express();
// app.use() adds middleware to your app, which can manipulate the request/response
//urlencoded() to parse data it  is a form translate to js
//Using extended: false limits the parsing to simple,
app.use(express.urlencoded({extended : false}));
// 1st value is the path and 2nd is the function u want excute
app.get('/currenttimme', function (req , res){
    res.send('<h1>' +new Date().toISOString() + '</h1> ')
}); 
app.get('/', function(req , res ){
    // path = action ,post data should be stored in server 
res.send('<form action="/store-user" method="POST" ><label>Your name </label><input type="text " name="username"><button> submit </button></form> ')
});

// handler to post
app.post('/store-user' ,function(req ,res){
    const userName = req.body.username;
    console.log(userName);
    res.send('<h1>UserName Stored!</h1>')
   // reqbody to ecess data attached to the request

})

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