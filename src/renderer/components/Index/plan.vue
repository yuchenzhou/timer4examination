<template>
<div id="plan">
    <subject v-for="subject in subjects" v-bind:subjectp="subject" :key="subject.id"></subject>
    <add-subject></add-subject>
</div>
</template>

<script>
    import subject from './plan/subject';
    import addSubject from './plan/addSubject';
    import EventBus from '../../eventBus';
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
                name: controller.getPlan().name,
            }
        },
        methods: {
            refreshSubjects(){
                // bug here when delete subject
                this.subjects = controller.getPlan().subjects;
                this.$forceUpdate();
            },
        },
        mounted() {
            EventBus.$on('planSwitch', (_) => {
                this.refreshSubjects();
            });
            EventBus.$on('refreshPlan', (_) => {
                this.refreshSubjects();
            });
            EventBus.$on('deleteSubject', (name) => {
                this.refreshSubjects();
            });

        }
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
