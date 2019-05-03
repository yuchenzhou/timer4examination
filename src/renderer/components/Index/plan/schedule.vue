<template>
<div>
    {{schedule.name}}
    {{schedule.positionBy}}
    {{schedule.offset}}
</div>
</template>

<script>
    export default {
        name: "schedule",
        props: [
            "schedule",
        ],
        methods: {
            switch(){

            },
            edit(){

            }
        }
    }
</script>

<style scoped>

</style>
