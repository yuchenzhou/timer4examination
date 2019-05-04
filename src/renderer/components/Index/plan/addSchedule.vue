<template>
<div id="BTN" @click="add">
    {{$t('addSchedule')}}
</div>
</template>

<script>
    const remote = require('electron').remote;
    const controller = remote.app.controller;
    import cuid from 'cuid';
    export default {
        name: "addSchedule",
        props: ["subjectId"],
        methods: {
            add() {
                const schedule = {
                    id: cuid(),
                    name: "新项目",
                    selected: false,
                    positionBy: 0,
                    offset: -15,
                    mediaPath: "",
                    volume: 100
                };
                // controller.addSchedule(this.subjectId, schedule);
                this.$parent.addSchedule(schedule);
                // EventBus.$emit("refreshPlan", "createSchedule");
            }
        }
    }
</script>

<style scoped>
    #BTN{
        border: 1px solid #888888;
        margin: 3px;
        width:fit-content;
    }
</style>
