<template>
<div id="addPlan" style="height: 30px;display: inline">
    <div id="btn" :class="{show:btnShow, hidden:!btnShow}">
        <div id="plus" @click="switchStatus" >
            <img src="../../../../static/create.png" :alt=$t(create)>
        </div>
    </div>
    <div id="text" :class="{show:textShow, hidden:!textShow}">
        <label>
            <input v-model="newPlanName" :placeholder=$t(newPlanName) style="display: inline">
        </label>
        <span id='okBTN' @click="create" style="display: inline"><!--@keyup.enter.native="create"-->
            <!---img src="../../../../static/ok.jpg" alt="ok"/--->
            {{$t('apply')}}
        </span>
        <span id="cancel" @click="switchStatus" style="display: inline">
            {{$t('cancel')}}
        </span>

    </div>
</div>
</template>

<script>
    import EventBus from '../../eventBus';
    export default {
        name: "newPlan",
        data() {
            return{
                btnShow: true,
                textShow: false,
                newPlanName: "",


            }
        },
        methods: {
            switchStatus(){
                if (this.$data.btnShow) {
                    this.$data.btnShow = false;
                    this.$data.textShow = true;
                } else {
                    this.$data.btnShow = true;
                    this.$data.textShow = false;
                }
            },
            create(){
                const remote = require('electron').remote;
                const controller = remote.app.controller;
                controller.addPlan(this.$data.newPlanName);
                // this.$options.methods.switchStatus();
                this.$data.btnShow = true;
                this.$data.textShow = false;
                EventBus.$emit("createPlan", "createPlan");
                // TODO: check empty & duplicated name
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
    img{
        width: auto;
        height: auto;
        max-width: 30px;
        max-height: 30px;
    }
    #plus{
        width: 30px;
        height: 30px;
        vertical-align: top;
    }
    #okBTN{
        display: inline;
        width: 30px;
        height: 30px;
        vertical-align: top;
    }
    #test{
        vertical-align: top;
    }
</style>
