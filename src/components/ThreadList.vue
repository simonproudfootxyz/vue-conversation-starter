<template>
    <ul>
        <li v-for="thread in threads" :key="thread.id">
            <Thread :thread="thread" />
        </li>
    </ul>
</template>

<script>
    import Thread from './Thread';
    
    export default {
        name: 'ThreadList',
        components: {
            Thread
        },
        data() {
            return {
                threads: []
            }
        },
        created: function() {
            this.fetchThreads();
        },
        methods: {
            fetchThreads: async function() {
                try {
                    const res = await fetch('https://www.reddit.com/r/AskReddit/top.json?sort=top&t=mont&limit=100');
                    const payload = await res.json();
                    const threads = payload.data.children.map(thread => {
                        return thread.data;
                    });
                    this.threads = threads;
                } catch(e) {
                    alert(e)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>