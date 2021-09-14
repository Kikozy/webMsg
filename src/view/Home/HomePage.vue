<template>
    <div class="home">
        <h1>Home</h1>
        <main class="content">
            <div class="leftArea">
                <Control @socketFun="initSocket" :data="{socket,serverState}"></Control>
            </div>
            <div class="rightArea">
                <div class="msgList">
                    <Message-item v-for="(item,index) in msgList" :key="item.time+index" :data="item"></Message-item>
                </div>
                <InputBox :data="{socket: socket}"></InputBox>
            </div>
        </main>
    </div>
</template>

<script>
import Control from './Control.vue'
import InputBox from './InputBox.vue'
import MessageItem from './MessageItem.vue'
export default {
    name: 'Home',
    components: {
        Control,
        InputBox,
        MessageItem
    },
    data(){
        return{
            serverState: '未连接',
            socket: '啥也没有哦',
            msgList: []
        }
    },
    methods: {
        initSocket(data){
            this.socket = data
            this.socket.addEventListener('open',(data)=>{
                console.log('建立连接成功la')
                this.serverState = '连接成功'
            })
            this.socket.addEventListener('message',(data)=>{
                console.log('返回的数据',JSON.parse(data.data))
                this.msgList.push(JSON.parse(data.data))
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .home {
        .content {
            display: flex;
            width: 100vw;
            height: 100vh;
            .leftArea {
                width: 300px;
                min-width: 300px;
                border: 1px solid black;
            }
            .rightArea {
                width: 80%;
                border: 1px solid black;
                display: flex;
                flex-direction: column;
                .msgList {
                    width: 100%;
                    height: 75%;
                }
            }
        }
    }
</style>