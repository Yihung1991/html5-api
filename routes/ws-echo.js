const WebSocket = require('ws');

const creatWebSocketServer = (server)=>{
    const wsServer = new WebSocket.Server({server});

    wsServer.on('connection',(ws,req)=>{
        console.log('連線數', wsServer.clients.size);
        ws.send('連線了');
        ws.on('message',(message)=>{
            ws.send(message.toString());
        });
    });
};

module.exports = creatWebSocketServer;