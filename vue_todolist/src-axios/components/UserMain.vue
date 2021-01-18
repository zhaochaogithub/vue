<template>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.html_url">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
    data () {
        return {
            users: null
        }
    },
    mounted () {
        const url = `https://api.github.com/search/users?q=`
        PubSub.subscribe('search', (msg, data) => {
            axios.get(url + data).then(resp =>{
                const users = resp.data.items
                this.users = users.map(item => ({
                    name: item.login,
                    avatar_url: item.avatar_url,
                    url: item.html_url
                }))
            }).catch(error => {
                alert(error)
            })
        })
    }
}
</script>

<style>

</style>