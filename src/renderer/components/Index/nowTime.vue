<template>
    <div>
        {{timeStr}}
    </div>
</template>

<script>
    const padDate = function (value) {
        return value <10 ? '0' + value:value;
    };
    export default {
        name: "now-time",
        data() {
            let time =new Date();
            let hours=padDate(time.getHours());
            let minutes=padDate(time.getMinutes());
            let seconds=padDate(time.getSeconds());
            let timeStr = hours + ':' + minutes + ':' + seconds;
            // console.log(timeStr);
            return {
                timeStr
            }
        },
        mounted() {
            const _this = this;
            this.timer = setInterval(function(){
                let time =new Date();
                let hours=padDate(time.getHours());
                let minutes=padDate(time.getMinutes());
                let seconds=padDate(time.getSeconds());
                _this.$data.timeStr = hours + ':' + minutes + ':' + seconds;
            },1000)
            }
    }
</script>

<style scoped>

</style>
