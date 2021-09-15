import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServr = createServer((req,res)=>{
    
})
const io = new Server(httpServr,{})

io.on("connection",socket => {
    // console.log('有用户连接了',socket.sockets[sockets.listen-1])
    console.log('有用户连接了',socket.conn.id)
    io.emit("haha",{miao: 233})
})


httpServr.listen(8911)