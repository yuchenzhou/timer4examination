<template>
    <label>
        选择你的方案
        <select v-model="selected" @change="detectiveChange" @click="refresh">
            <option  v-for="plan in plans">{{plan.name}}</option>
        </select>
    </label>
</template>

<script>
    const remote = require('electron').remote;
    const controller = remote.app.controller;
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
                // TODO:debug cause planName in controller doesnt works.

            },
            // an ugly refresh method called when clicked.
            refresh(){
                const plans = controller.getPlans();
                this.$data.plans = plans;
            }
        },
        //mounted: {
        //     listen() {
        //         EventBus.$on('createPlan', ($event)=>{
        //             this.$options.methods.refresh();
        //         });
        //     }
        //}
    }

</script>

<style scoped>

</style>
