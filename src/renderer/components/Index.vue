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
            <div class="audioPlay">
                <audio controls loop controlsList="nodownload">
<!--                    TODO: src变量需要v-model引入-->
<!--                    <source src="../../../static/horse.mp3" >-->
                </audio>
            </div>
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
        border:1px solid #bbb;
        border-radius: 3px;
        box-shadow: -5px 10px 5px #888;
    }
    #selectPlan{
        float: left;
        line-height: 30px;
        height: 100%;
    }
    #top{
        height: 30px;
    }
    #newPlan {
        float: left;
    }
    #setting {
        float: right;
    }
    #footer{
        margin-top: 7px;
    }
    #time {
        float: right;
        height: 32px;
        text-align: center;
        line-height: 32px;
    }
    #plan::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }
    #plan::-webkit-scrollbar-track{
        background-color: #eee;
        border-radius: 3px;
    }
    #plan::-webkit-scrollbar-thumb {
        border-radius: 7px;
        background-color: #aaa;
    }
    #plan::-webkit-scrollbar-corner {
        background:#eee;
    }
    .audioPlay{
        display: inline-block;
    }
</style>
