<template>
    <div>
        <div id="top">
            <div id="selectPlan">
                <plan-select></plan-select>
            </div>
            <div id="newPlan">
                <new-plan></new-plan>
            </div>
            <div id="setting">
                <settingBTN></settingBTN>
            </div>
            <div style="clear: both;"></div>
        </div>
        <div class="tmp"></div>
        <div id="plan">
            <plan></plan>
        </div>
        <div class="tmp"></div>
        <div id="footer">
            <div id="time"><nowTime></nowTime></div>
            <div style="clear: both;"></div>
        </div>
    </div>
</template>

<script>
  import PlanSelect from './index/planSelect'
  import NewPlan from './index/newPlan'
  import SettingBTN from './index/settingBTN'
  import Plan from './index/plan'
  import nowTime from './index/nowTime'
  export default {
    name: "Index",
    components: {
        PlanSelect,
        NewPlan,
        SettingBTN,
        Plan,
        nowTime
    }
  }
</script>

<style scoped>

    .tmp {
        height: 70%;
        width: 100%;
        padding-top: 2%
    }
    #plan {
        height: 75vh;
        width: 100%;
        border:1px solid #888888;
        box-shadow: 10px 10px 5px #888888;
    }
    #selectPlan{
        float: left;
    }
    #newPlan {
        float: left;
    }
    #setting {
        float: right;
    }
    #time {
        float: right;
    }



</style>
