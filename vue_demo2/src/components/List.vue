<template>
    <div class="list">
        评论回复：
        <br>
        <p v-show="ok">暂时没有任何评论</p>
        <ul>
            <Item v-for="(content, index) in contents" :key="index" :content="content" 
            :deleteContent="deleteContent" :index="index" :isShow="isShow"/>
        </ul>
    </div>
</template>

<script>
    import Item from './Item'
    export default {
        props: ['contents', 'deleteContent'],
        data () {
            return {
                ok: false
            }
        },
        components: {
            Item
        },
        methods: {
            isShow() {
                const {contents} = this
                if(contents.length === 0) {
                    this.ok = !this.ok
                }
            }
        }
    }
</script>

<style>
    .list {
        display: inline-block;
        width: 200px;
    }
</style>