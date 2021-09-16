<template>
    <div class="login">
        <main class="loginBox">
            <div class="userNameArea">
                <p class="userNameText">用户名</p>
                <input v-model="userName" type="text">
            </div>
            <ul class="chooseImgArea">
                <li class="imgBox"
                    v-for="(item,index) in headImg"
                    :key="item.imgId+index"
                    @click="chooseHead"
                >
                    <img :src="item.imgUrl" alt="">
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
async function post(api){
    let baseURL = 'https://www.fastmock.site/mock/c368f8a4a8c063d08ec0e443f81a3cc1/webMsg' 
    let response = await fetch(baseURL+api,
        {
            method: 'post'
        }
    )
    return await response.json()
}
export default {
    name: 'Login',
    data(){
        return {
            headImg: [],
            nowHead: null,
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
            window.localStorage.setItem('headImg',e.target.src)
        }
    },
    watch: {
        userName(newValue,oldValue){
            window.localStorage.setItem('userName',newValue)
        }
    },
    async created(){
        
        let data = await post('/getHeadImg')
        this.headImg = data.data
    }
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
            .chooseImgArea {
                width: 260px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                border: 1px solid black;
                .imgBox {
                    height: 64px;
                    width: 64px;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }

            }
        }
    }
</style>