<template>
    <div id="settingBtn">
        <img src="../../../../static/settingicon.png" height="30" width="30"/>
    </div>
</template>

<script>
    export default {
        name: "settingBTN",
        methods: {
            onclick(){
                console.log("clicked setting");
            }
        },
        data() {
            return {
                //settings: this.$t('settings')
            }
        }
    }
</script>

<style scoped>

    img{
        width: 20px;
        height: 20px;
        padding: 5px 0;
    }
    #settingBtn{
        width: 30px;
        height: 30px;
        text-align: center;
        cursor: pointer;
    }
</style>
