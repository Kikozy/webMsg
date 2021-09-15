<template>
    <div class="control">
        <div class="server">
            <p class="serverState">服务器状态 {{data.serverState}}</p>
            <div class="btnList">
                <button class="serverBtn" @click="conServe">连接</button>
                <button class="serverBtn" @click="disServer">断开</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Control',
    props: ['data'],
    data(){
        return{
        }
    },
    created(){
        console.log(this.$props)
    },
    methods: {
        conServe(){
            this.$emit('socketFun',new WebSocket("ws://localhost:8911"))
            console.log(this.$props)
        },
        disServer(){
            console.log('断开服务器连接')
        }
    }
}
</script>

<style lang="scss" scoped>
    .control {
        padding: 10px;
        button {
            outline: none;
            background-color: transparent;
            border: none;
        }
        .server {
            display: flex;
            flex-direction: column;
            .serverState {
                background-color: pink;
            }
            .btnList {
                display: flex;
                justify-content: space-between;
                .serverBtn {
                    height: 30px;
                    width: 100px;
                    border: 1px solid black;
                }
            }
        }
    }
</style>