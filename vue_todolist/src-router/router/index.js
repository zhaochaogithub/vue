import Vue from "vue"
import VueRouter from "vue-router"
import About from "../views/About.vue"
import Home from "../views/Home.vue"
import News from "../views/home/News.vue"
import Message from "../views/home/Message.vue"
import MessageDetail from "../views/home/MessageDetail.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/news",
          component: News
        },
        {
          path: "/home/message",
          component: Message,
          children: [
            {
              path: "/home/message/detail/:id",
              component: MessageDetail
            }
          ]
        },
        {
          path: "",
          component: News
        }
      ]
    },
    {
      path: "/",
      redirect: "/about"
    }
  ]
})
