<template>
<div class="subject">
    <div id="name">
        {{name}}
        <!--未开始/进行中/已完成--->
    </div>
    <div id="start">
        {{$t('startTime')}}:
        <form>
            <label>
                <input v-model="startTime" type="datetime-local" />
            </label>
        </form>
        <div>
            {{startTime}}
        </div>
    </div>
    <div id="len">
        {{$t('lenOfExam')}}:
        <label>
            <input @change="change" v-model="length"/>
        </label>
    </div>
    <div id="end">
        {{$t('endTime')}}:
        <div>
            {{endTime}}
        </div>
    </div>
    <schedule v-for="schedule in schedules" v-bind:schedule="schedule"></schedule>
    <add-schedule></add-schedule>
    <div @click="deleteSubject">删除</div>
</div>
</template>

<script>
    import Schedule from "./schedule";
    import addSchedule from './addSchedule';
    import moment from 'moment';
    const remote = require('electron').remote;
    const controller = remote.app.controller;
    import EventBus from '../../../eventBus';
    export default {
        name: "subject",
        components: {Schedule, addSchedule},
        props: [
            'subject'
        ],
        data() {
            return {
                name: this.subject.name,
                startTime: this.subject.startTime,
                length: this.subject.length,
                schedules: this.subject.schedules,
                // endTime: startTime + length,
            }
        },
        computed: {
            endTime: function () {
                return moment(this.startTime).add(this.length, 'm').format().slice(0,16);
                // console.log(moment(this.startTime).add(this.length, 'm'));
            }
        },
        methods: {
            change() {
                // TODO: change method
                console.log("changed")
            },
            deleteSubject() {
                controller.deleteSubject(this.name);
                EventBus.$emit("deleteSubject", this.name);
            }
        },
        mounted() {
            console.log(this.name);
        }

    }
</script>

<style scoped>
    .subject{
        border: 1px solid #888888;
        height: 96%;
        margin: 1%;
        width: 210px;
        display: inline-block;
        vertical-align: top;
    }
</style>
