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
        {{$t('lenOfExam')}}: {{length}}
    </div>
    <div id="end">
        {{$t('endTime')}}: {{}}
    </div>
    <schedule v-for="schedule in schedules" v-bind:schedule="schedule"></schedule>
    <add-schedule></add-schedule>
</div>
</template>

<script>
    import Schedule from "./schedule";
    import addSchedule from './addSchedule';
    export default {
        name: "subject",
        components: {Schedule, addSchedule},
        props: [
            'name',
            'startTimep',
            'length',
            'schedules'
        ],
        data() {
            return {
                // TODO: calculate endTime
                startTime: this.startTimep,
                // endTime: startTime + length,
            }
        },

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
