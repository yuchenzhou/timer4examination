<template>
<div id="addSubject" >
    <div id="img" @click="switchShow" :class="{show:imgShow, hidden:!imgShow}">
        <img src="../../../../../static/create.png" height="70" width="70"/>
    </div>
    <div id="frame" :class="{show:!imgShow, hidden:imgShow}">
        <div>{{$t('subjectName')}}: <label>
            <input v-model="name" type="text"/>
        </label></div>
        <div>{{$t('startTime')}}: <p></p><label>
            <input v-model="startTime" type="datetime-local"/>
        </label></div>
        <div>{{$t('lenOfExam')}}: <label>
            <input v-model="length" type="text"/>
        </label></div>
        <span @click="addSubject">
            {{$t('apply')}}
        </span>
        <span @click="switchShow">
            {{$t('cancel')}}
        </span>
    </div>
</div>
</template>

<script>
    const moment = require('moment');
    const remote = require('electron').remote;
    const controller = remote.app.controller;
    const startTime = moment().format().slice(0,16);
    import EventBus from '../../../eventBus';
    import cuid from 'cuid';
    export default {
        name: "addSubject",
        methods: {
            addSubject() {
                // TODO: check duplicated name
                controller.addSubject({
                    name: this.name,
                    startTime: this.startTime,
                    length: this.length,
                    schedules: [],
                    id: cuid(),
                });
                this.switchShow();
                EventBus.$emit("refreshPlan", "createPlan");

            },
            switchShow() {
                this.imgShow = !this.imgShow;
            },

        },
        data() {
            return {
                name: "",
                startTime,
                length: 120,
                imgShow: true,
            }
        }
    }
</script>

<style scoped>
    .show{
        display: block;
    }
    .hidden{
        display: none;
    }
    #addSubject{
        border: 1px solid #888888;
        height: 96%;
        margin: 1%;
        width: 210px;
        display: inline-block;
        vertical-align: top;
    }
    #img{
        margin-top: 50%;
        margin-left: 35%;
    }
    #frame{

    }
</style>
