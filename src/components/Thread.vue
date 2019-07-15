<template>
    <div>
        {{ thread.title }}
    </div>
</template>

<script>
    export default {
        name: 'Thread',
        props: ['thread'],
        data() {
            return {
                // Defaults for the component go in here
            }
        },
        created: function () {
            // This acts as a constructor of sorts, basically what to do as the component is being created
            this.fetchThread();
        },
        methods: {
            // Methods that your component can run
            fetchThread() {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>