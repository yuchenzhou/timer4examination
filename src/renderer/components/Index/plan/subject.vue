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
    <schedule v-for="schedule in schedules" v-bind:schedule="schedule" :key="schedule.name"></schedule>
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
            'subjectp'
        ],
        data() {
            return {
                name: this.subjectp.name,
                startTime: this.subjectp.startTime,
                length: this.subjectp.length,
                schedules: this.subjectp.schedules,
                id: this.subjectp.id,
                // endTime: startTime + length,
            }
        },
        computed: {
            endTime: function () {
                return moment(this.startTime).add(this.length, 'm').format().slice(0,16);
                // console.log(moment(this.startTime).add(this.length, 'm'));
            },
            subject: function () {
                return {
                    id: this.id,
                    name: this.name,
                    startTime: this.startTime,
                    length: this.length,
                    schedules: this.schedules,
                }

            }
        },
        methods: {
            change() {
                controller.editSubject(this.subject);
                EventBus.$emit("refreshPlan", this.id);
            },
            deleteSubject() {
                controller.deleteSubject(this.id);
                EventBus.$emit("deleteSubject", this.id);
            }
        },
        mounted() {
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
