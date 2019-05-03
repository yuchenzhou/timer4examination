<template>
<div id="plan">
    <subject v-for="subject in subjects" v-bind:subject="subject" :key="subject.name"></subject>
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
            }
        },
        methods: {
            refreshSubjects(){
                // bug here when delete subject
                this.subjects = controller.getPlan().subjects;
                this.$forceUpdate();
                console.log(this.subjects);
            },
            deleteSubject(name){
                console.log("11111");
                for(const i in this.subjects){
                    if(this.subjects[i].name === name)
                    {
                        this.subjects.splice(i,1);
                    }
                }
                this.$forceUpdate();
            }
        },
        mounted() {
            EventBus.$on('planSwitch', (_) => {
                this.refreshSubjects();
            });
            EventBus.$on('refreshPlan', (_) => {
                this.refreshSubjects();
            });
            EventBus.$on('deleteSubject', (name) => {
                this.deleteSubject(name);
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
