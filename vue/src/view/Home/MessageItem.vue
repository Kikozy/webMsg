<template>
    <div class="msgItem" :style="{color: showColor}">
        <p>{{data.userName}}-{{data.time}}</p>
        <p>{{data.text}}</p>
    </div>
</template>

<script>
export default {
    name: 'msgItem',
    props: ['data'],
    data(){
        return{
            showColor: 'black'
        }
    },
    created(){
        switch(this.$props.data.type){
            case 0:
                this.showColor = 'black'
                break
            case 1:
                this.showColor = 'green'
                break
            case 2:
                this.showColor = 'red'
        }
        
    }
}
</script>

<style lang="scss" scoped>

</style>