<template>
    <div class="inputBox">
        <textarea class="inputArea" v-model="inputContent" ></textarea>
        <button class="subBtn" @click="sendMsg">发送</button>
    </div>
</template>

<script>
export default {
    name: 'InputBox',
    props: ['data'],
    data(){
        return{
            inputContent: ''
        }
    },
    methods: {
        sendMsg(){
            this.$props.data.socket.send(this.inputContent)
        }
    },
    watch:{
        inputContent(){
            console.log(this.inputContent)
        }
    }
}
</script>

<style lang="scss" scoped>
    .inputBox {
        width: 100%;
        .inputArea {
            width: 100%;
            height: 100px;
        }
        .subBtn {
            height: 35px;
            width: 140px;
        }
    }
</style>