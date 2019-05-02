<template>
<div id="plan">
    <subject v-for="subject in subjects" v-bind:name="subject.name" v-bind:start-time="subject.startTime" v-bind:length="subject.length" v-bind:schedules="subject.schedules"></subject>
    <add-subject></add-subject>
</div>
</template>

<script>
    import subject from './plan/subject';
    import addSubject from './plan/addSubject';
    const remote = require('electron').remote;
    const controller = remote.app.controller;
    const subjects = controller.getPlan().subjects;
    export default {
        name: "plan",
        components: {
            subject,
            addSubject,
        },
        data() {
            // get subjects and return;
            return {
                subjects,
            }
        },
        methods: {
            refreshSubjects(){
                this.$data.subjects = controller.getPlan().subjects;
            }
        },
    }
</script>

<style scoped>
    #plan{
        height: 100%;
        width: 100%;
        overflow-x: scroll;
        white-space:nowrap;
    }
</style>
