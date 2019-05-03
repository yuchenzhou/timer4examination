<template>
    <label>
        选择你的方案
        <select v-model="selected" @change="detectiveChange" @click="refresh">
            <option  v-for="plan in plans">{{plan.name}}</option>
        </select>
    </label>
</template>

<script>
    // TODO: call refresh when create plan instead of refreshing everytime.
    const remote = require('electron').remote;
    const controller = remote.app.controller;
    import EventBus from '../../eventBus';
    export default {
        name: "plan-select",
        data() {
            const plans = controller.getPlans();
            return {
                plans,
                selected: plans[0].name,
            }
        },
        methods: {
            detectiveChange(){
                controller.switchPlan(this.$data.selected);
                EventBus.$emit('planSwitch', "")
                // TODO:debug cause planName in controller doesnt works.

            },
            // an ugly refresh method called when clicked.
            refresh(){
                const plans = controller.getPlans();
                this.plans = plans;
            }
        },
        mounted() {
                 EventBus.$on('createPlan', ($event)=>{
                     console.log("get createPlan");
                     this.$options.methods.refresh();
                 });
        }
    }

</script>

<style scoped>

</style>
