<template>
    <label>
        选择你的方案
        <select v-model="selected" @change="detectiveChange">
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
                console.log(this.$data.selected)

            }
        }

    }

</script>

<style scoped>

</style>
