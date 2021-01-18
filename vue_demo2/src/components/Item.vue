<template>
    <li>
        {{content.name}} 回复说：
        <br>
        <textarea style="width: 180px" readonly v-model="content.text"></textarea>
        <button @click="deleted" >刪除</button>
    </li>
</template>

<script>
    export default {
        props: ['content', 'deleteContent', 'index', 'isShow'],
        methods: {
            deleted() {
                const {deleteContent, index, isShow} = this
                if(window.confirm("确认要删除吗？")) {
                    deleteContent(index)
                    isShow()
                }
            }
        }
    }
</script>

<style>

</style>