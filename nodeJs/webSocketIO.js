import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServr = createServer((req,res)=>{
    
})
const io = new Server(httpServr)


//用于记录登录了的用户
const users = {}
io.on("connection",socket => {
    
    console.log('有用户连接了',socket.conn.id)
    //监听登录事件
    socket.on("login",data=>{
        console.log(users)
        if(users?.[data.userName]){
            console.log('已经存在的用户')
            socket.emit('loginFail','登录失败，用户名已存在!')
        }else{
            console.log(`用户: ${data.userName},进入聊天`)
            users[data.userName] = socket.conn.id
            socket.emit('loginSuccess')
        }
    })
    socket.on("disconnect",()=>console.log('断开链接？'))
})




httpServr.listen(8911,()=>{
    console.log('服务器开启了 8911')
})