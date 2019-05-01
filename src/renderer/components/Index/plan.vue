<template>
<div>
    <subject v-for="subject in subjects"></subject>
    <add-subject ></add-subject>
</div>
</template>

<script>
    import subject from './plan/subject';
    import addSubject from './plan/addSubject';
    export default {
        name: "plan",
        components: {
            subject,
            addSubject,
        },
        data() {
            // get subjects and return;
            return {
                subjects:[],
            }
        }
    }
</script>

<style scoped>

</style>
