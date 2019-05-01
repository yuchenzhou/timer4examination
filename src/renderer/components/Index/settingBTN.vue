<template>
    <div id="settingBtn">
        <img src="../../../../static/settingicon.png" @click="onclick" :alt=$t(settings)>
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
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    #settingBtn{
        width: 30px;
        height: 30px;
    }
</style>
