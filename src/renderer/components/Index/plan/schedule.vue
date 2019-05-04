<template>
<div>
    <div id="checkbox">
        <label>
            <input type="checkbox" v-model="selected" @change="change">
        </label>
    </div>
    <div id="name">
        <div id="nameText" @click="switchNameEdit" :class="{show:!editNameShow, hidden:editNameShow}">{{name}}</div>
        <label :class="{show:editNameShow, hidden:!editNameShow}">
            <input v-model="name" @change="nameChange" @blur="switchNameEdit">
        </label>
    </div>
    <div id="settingBTN" >
        <div @click="switchSettingfrm">
            <img src="../../../../../static/settingicon.png" height="20" width="20" />
        </div>
        <div id="settingFRM" :class="{show:showSettingfrm, hidden:!showSettingfrm}" @blur="switchSettingfrm">
            <div>
                {{$tc(`scheduleText[${template}]`, 0, {n: Math.abs(schedule.offset)})}}
            </div>
            <div>
                <select id="positionBy" v-model="positionBy" @change="change">
                    <option value="0">{{$t("start")}}</option>
                    <option value="1">{{$t("end")}}</option>
                </select>
                <label>
                    <input type="number" @change="change" v-model="offset" style="width:40px;"/>{{$t('minutes')}}
                </label>
            </div>
            <div>
                <label>
                    <input type="file" ref="myFiles" @change="fileChange">
                </label>
            </div>
            <div id="deleteBTN" @click="deleteSchedule">
                {{$t("delete")}}
            </div>
        </div>
    </div>

    <div style="clear: both;"></div>
    <!---{{$tc(`scheduleText[${template}]`, 0, {n: Math.abs(schedule.offset)})}}-->
</div>
</template>

<script>
    // TODO:edit
    const remote = require('electron').remote;
    const controller = remote.app.controller;
    // controller.getPlan().subjects[0].schedules[0]
    export default {
        name: "schedule",
        props: [
            "schedulep",
            "subjectId"
        ],
        data() {
            return {
                files: "",
                editNameShow: false,
                showSettingfrm: false,
                id: this.schedulep.id,
                name: this.schedulep.name,
                selected: this.schedulep.selected,
                positionBy: this.schedulep.positionBy,
                offset: this.schedulep.offset,
                mediaPath: this.schedulep.mediaPath,
                volume: this.schedulep.volume,
            }
        },
        methods: {
            change() {
                console.log("change");
                controller.editSchedule(this.subjectId, this.schedule);
            },
            fileChange() {
                console.log(this.$refs.myFiles.files[0]);
                this.mediaPath = this.$refs.myFiles.files[0].path;
                this.change();
            },
            switchNameEdit() {
                this.editNameShow = !this.editNameShow;
            },
            nameChange() {
                this.switchNameEdit();
                this.change();
            },
            switchSettingfrm() {
                console.log("clicked");
                this.showSettingfrm = !this.showSettingfrm;
            },
            deleteSchedule() {
                //controller.deleteSchedule(this.subjectId, this.schedule);
                this.$parent.deleteSchedule(this.schedule);
            }
        },
        computed: {
            template: function (){
                return this.schedule.positionBy*2 + (this.schedule.offset>=0?1:0)
            },

            schedule: function () {
                return {
                    id: this.id,
                    name: this.name,
                    selected: this.selected,
                    positionBy: this.positionBy,
                    offset: this.offset,
                    mediaPath: this.mediaPath,
                    volume: this.volume,
                }
            }

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
    #checkbox{
        display: inline;
    }
    #name{
        display: inline;
    }
    #settingBTN{
        display: inline;
        float: right;
        position: relative;
    }
    #settingFRM{
        position: absolute;
        height: 100px;
        width: 180px;
        border: 3px solid #888888;
        box-shadow: 3px 3px 2px #888888;
        top: 20px;
        left: -180px;
        z-index: 999;
        background: azure;
    }
    #deleteBTN{
        border: 1px solid #888888;
        margin: 3px;
        width:fit-content;
    }
</style>
