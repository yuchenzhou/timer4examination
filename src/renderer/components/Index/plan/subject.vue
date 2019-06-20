<template>
<div class="subject">
    <div id="name">
        <div id="nameText" @click="switchNameEdit" :class="{show:!editNameShow, hidden:editNameShow}">{{name}}</div>
        <label :class="{show:editNameShow, hidden:!editNameShow}">
            <input v-model="name" @change="nameChange">
        </label>
        <!---{{name}}-->
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
            <!--{{startTime}}-->
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
    <schedule v-for="schedule in schedules" v-bind:schedulep="schedule" :key="schedule.id" v-bind:subjectId="id"></schedule>
    <div class="subjectOptions">
        <add-schedule v-bind:subject-id="id"></add-schedule>
        <div @click="deleteSubject" id="deleteBTN">删除科目</div>
    </div>
</div>
</template>

<script>
    import Schedule from "./schedule";
    import addSchedule from './addSchedule';
    import moment from 'moment';
    const remote = require('electron').remote;
    const controller = remote.app.controller;
    import EventBus from '../../../eventBus';
    import cuid from 'cuid';
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
                editNameShow: false,
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
                EventBus.$emit("edit successfully", this.id);
            },
            deleteSubject() {
                controller.deleteSubject(this.id);
                EventBus.$emit("deleteSubject", this.id);
            },
            switchNameEdit() {
                this.editNameShow = !this.editNameShow;
            },
            nameChange() {
                this.switchNameEdit();
                this.change();
            },
            addSchedule(schedule) {
                this.schedules.push(schedule);
                this.change();
                // call change
            },
            deleteSchedule(schedule) {
                for(const i in this.schedules){
                    if(this.schedules[i].id===schedule.id){
                        this.schedules.splice(i,1)
                    }
                }
                this.change();

            },
        },
        mounted() {
        }

    }
</script>

<style scoped>
    .show{
        display: inline;
    }
    .hidden{
        display: none;
    }
    #len label input{
        width: 70px;
    }
    .subject{
        border: 1px solid #888888;
        height: 96%;
        margin: 1%;
        width: 210px;
        display: inline-block;
        vertical-align: top;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .subject #nameText{
        font-weight: bold;
        font-size: 20px;
    }
    #deleteBTN{
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        width: 70px;
        margin: 3px;
        text-align: center;
        outline-color: #40a9ff;
        cursor: pointer;
    }
    #deleteBTN:hover{
        border-color: #1890ff;
    }
    input{
        border: 1px solid #ccc;
        outline-color: #1890ff;
    }
    input:hover{
        border-color: #1890ff;
    }
</style>
