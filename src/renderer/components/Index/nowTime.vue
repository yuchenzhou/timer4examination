<template>
    <div>
        {{timeStr}}
    </div>
</template>

<script>
    export default {
        name: "now-time",
        data() {
            let time =new Date();
            let hours=time.getHours();
            let minutes=time.getMinutes();
            let seconds=time.getSeconds();
            let timeStr = hours + ':' + minutes + ':' + seconds;
            // console.log(timeStr);
            return {
                timeStr
            }
        }
    }
</script>

<style scoped>

</style>
