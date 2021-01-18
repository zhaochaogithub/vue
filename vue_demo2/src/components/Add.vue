<template>
    <div class="add">
        <label for="user">
            用户名
            <br>
            <input id="user" type="text" v-model="name" style="width: 180px">
        </label>
        <br>
        <label for="content">
            评论内容
            <br>
            <textarea id="content" style="width: 180px" v-model="text"></textarea>
        </label>
        <br>
        <button @click="add">提交</button>
    </div>
</template>

<script>
    export default {
        props: {
            addContent: {
                type: Function,
                required: true
            }
        },
        data () {
            return {
                name: '',
                text: ''
            }
        },
        methods: {
            add() {
                const name = this.name
                const text = this.text
                console.log(name + text)
                const content = {
                name, 
                text
                }
                this.addContent(content)
                this.name = ''
                this.text = ''
            }
        }
    }
</script>

<style>
    .add {
        display: inline-block;
        width: 200px;
    }
</style>