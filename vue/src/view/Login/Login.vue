<template>
    <div class="login">
        <div class="loginBox">
            <div class="headImgArea">
                <div class="nowHeadImg">
                    <img src="" alt="">
                </div>
                <!-- <ul class="otherHeadImg">
                    <li class="imgBox"
                        v-for="(item,index) in headImg"
                        :key="item.imgId+index"
                        @click="chooseHead"
                    >
                    <img :src="item.imgUrl" alt="">
                    </li>
                </ul> -->
            </div>
            <div class="userNameArea">
                <p class="userNameText">用户名</p>
                <input v-model="userName" class="userNameInput" type="text">
            </div>
        </div>
        <button class="joinBtn" @click="loginBtn">进入</button>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data(){
        return {
            headImg: [],
            nowHead: "https://z3.ax1x.com/2021/09/16/4mjZBF.png",
            userName: ''
        }
    },
    methods: {
        chooseHead(e){
            if(this.nowHead){
                this.nowHead.target.style.border = 'none'
            }
            e.target.style.border = '2px solid red'
            this.nowHead = e
        },
        loginBtn(){
            window.localStorage.setItem('headImg',this.nowHead)
            window.localStorage.setItem('userName',this.userName)
            this.$socket.emit('login',{nowHead: this.nowHead,userName: this.userName})
            this.sockets.subscribe('loginFail',data=>{
                console.log('登陆失败',data)
            })
            this.sockets.subscribe('loginSuccess',()=>{
                console.log('登录成功')
            })
            this.sockets.subscribe('ok',(data)=>console.log(data))
        }
    },
    async created(){
        let data = await post('/getHeadImg')
        this.headImg = data.data
    }
}

async function post(api){
    let baseURL = 'https://www.fastmock.site/mock/c368f8a4a8c063d08ec0e443f81a3cc1/webMsg' 
    let response = await fetch(baseURL+api,
        {
            method: 'post'
        }
    )
    return await response.json()
}
</script>

<style lang="scss" scoped>
    .login {
        *{
            box-sizing: border-box;
        }
        height: 100vh;
        width: 100vw;
        background-color: pink;
        .loginBox {
            margin: 0 auto;
            width: 300px;
            display: flex;
            align-content: center;
            align-items: center;
            img {
                width: 100%;
                height: 100%;
            }
            //头像区域
            .headImgArea {
                margin-right: 10px;
                //当前选择的头像
                .nowHeadImg {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                    background-color: red;
                }
            }
            //用户名区域
            .userNameArea {
                display: flex;
                flex-direction: column;
                .userNameText {
                    font-size: 16px;
                    color: white;
                }
                .userNameInput {
                    height: 26px;
                    width: 200px;
                    border-radius: 5px;
                }
            }
            .chooseImgArea {
                width: 260px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                border: 1px solid black;
                .imgBox {
                    height: 36px;
                    width: 36px;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
            .joinBtn {
                width: 260px;
                height: 35px;
            }
        }
    }
</style>