<template>
<div>
    {{schedule.name}}:
    {{$tc(`scheduleText[${template}]`, 0, {n: Math.abs(schedule.offset)})}}
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
        },
        computed: {
            template: function (){
                return this.schedule.positionBy*2 + (this.schedule.offset>=0?1:0)
            }
        }
    }
</script>

<style scoped>

</style>
