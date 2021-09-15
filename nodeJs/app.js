const ws = require('nodejs-websocket')

let num = 0
const server = ws.createServer(content => {
    num++
    content.userName = 'user'+num
    broadcast({
        userName: content.userName,
        text: `${content.userName}进入了`,
        type: 1,
        time: new Date().toLocaleTimeString()
    })

    content.on('text',data=>{
        broadcast({
            userName: content.userName,
            text: data,
            type: 0,
            time: new Date().toLocaleTimeString()
        })
    })
    content.on('close',()=>{
        broadcast({
            userName: content.userName,
            text: `${content.userName}退出了`,
            type: 2,
            time: new Date().toLocaleTimeString()
        })
    })
    content.on('error',()=>{
        console.log('用户连接异常')
    
    })

    
})

server.listen(8911,()=>{
    console.log('服务器开启成功')
})

const broadcast = (msg)=>{
    server.connections.forEach(item => {
        item.send(JSON.stringify(msg))
    })
}