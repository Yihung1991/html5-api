const WebSocket = require('ws');

const creatWebSocketServer = (server)=>{
    const wsServer = new WebSocket.Server({server});

    const map = new Map();
    wsServer.on('connection',(ws,req)=>{
        map.set(ws,{name:''});
    
        ws.on('message',(message)=>{
            const data = map.get(ws);
            let msg = '';
            if(data.name){
                msg = `${data.name}:${message.toString()}`;
            }else{
                data.name = message.toString();
                msg = `${data.name} 進入聊天室`
            }
            wsServer.clients.forEach(c=>{
                if(c.readyState===WebSocket.OPEN){
                    c.send(msg);
                }
            })
        })
    
    })
}
module.exports = creatWebSocketServer;