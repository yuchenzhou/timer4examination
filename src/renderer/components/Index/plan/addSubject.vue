<template>
<div id="addSubject" >
    <div id="img" @click="switchShow" :class="{show:imgShow, hidden:!imgShow}">
        <img src="../../../../../static/create.png" height="70" width="70"/>
    </div>
    <div id="frame" :class="{show:!imgShow, hidden:imgShow}">
        <div>{{$t('subjectName')}}: <label>
            <input v-model="name" type="text" class="subjectName"/>
        </label></div>
        <div>{{$t('startTime')}}: <p></p><label>
            <input v-model="startTime" type="datetime-local"/>
        </label></div>
        <div>{{$t('lenOfExam')}}: <label>
            <input v-model="length" type="text"  class="lenOfExam"/>
        </label></div>
        <div class="addSubjectOptions">
            <span @click="addSubject"  class="addSubject">
                {{$t('apply')}}
            </span>
            <span @click="switchShow"  class="switchShow">
                {{$t('cancel')}}
            </span>
        </div>
        <div id="showError" class="showErrorBorder">
            <div class="showErrorContent">
                <div class="showError">
                    请填写科目名称
                </div>
            </div>
        </div>
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
                if(this.name === '')
                {
                    alert('请填写科目名称');
                    return;
                }
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
    .subjectName{
        width: 140px;
    }
    .lenOfExam{
        width: 70px;
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
    .addSubjectOptions{
        margin: 5px;
        border: 1px solid #ffffff;
    }
    .addSubject,
    .switchShow{
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        width: 40px;
        margin: 3px;
        text-align: center;
        outline-color: #40a9ff;
        cursor: pointer;
    }
    .addSubject:hover,
    .switchShow:hover{
        border-color: #1890ff;
    }
    input{
        border: 1px solid #ccc;
        outline-color: #1890ff;
    }
    input:hover{
        border-color: #1890ff;
    }
    .showErrorBorder{
        width: 80%;
        border: 1px solid #666;
        border-radius: 5px;
        margin: 10px auto;
        display: none;
    }
    .showErrorContent{
        padding: 20px;
    }
</style>
