<template>
<div class="subject">
{{name}}
</div>
</template>

<script>
    export default {
        name: "subject",
        props: [
            'name',
            'startTime',
            'length',
            'schedules'
        ]
    }
</script>

<style scoped>
    .subject{
        border: 1px solid #888888;
        height: 96%;
        margin: 1%;
        width: 40%;
        display: inline-block;
    }
</style>
