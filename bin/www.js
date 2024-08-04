var app=require("../app") 
var debug=require('debug')('todos:server') 
var http=require('http')


var port=normalizePort(process.env.PORT || '3000')
app.set('port',port)

//crate http server
var server=http.createServer(app)

//listen on provided port, on all network interfaces

server.listen(port,()=>{
    console.log("server is up on 3000");
})
server.on('error',onError)
server.on("listening",onListening)

//Normalize a port into a number, string , or false

function normalizePort(val){
    if(isNaN(port)){
        //named pipe
        return port
    }
    if(port >=0){
        //"port number"
        return port
    }
    return false
}

//event listener for HTTP server "error" event

function onError(error){
    if(error.syscall !=='listen'){
        throw error
    }

    var bind=typeof port==='string'? 'Pipe '+port : 'Port '+port

    //handle specific listen errrors with friendly messages
    switch(error.code){
        case "EACCES":
            console.log(bind+ ' requires elevated privileges');
            process.exit(1)
            break;
        default:
            throw error
    }
}

//event listener for HTTP server "listening " event

function onListening(){
    var addr=server.address()
    var bind=typeof addr==="string" ? 'pipe '+addr:'port '+addr.port
    debug('Listening on '+bind)
}