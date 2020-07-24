import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import boss from "@/pages/boss.vue"
import one from "@/pages/one.vue"
import two from "@/pages/two.vue"
import three from "@/pages/three.vue"
import four from "@/pages/four.vue"
import nan from "@/pages/nan.vue"
import nv from "@/pages/nv.vue"
import ying from "@/pages/ying.vue"
import yun from "@/pages/yun.vue"
import tong from "@/pages/tong.vue"
import inputs from "@/pages/inputs.vue"

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/boss/one"
    },
    {
      path: "/inputs",
      component: inputs
    },
    {
      path: "/nan",
      component: nan
    },
    {
      path: "/nv",
      component: nv
    },
    {
      path: "/tong",
      component: tong
    },
    {
      path: "/ying",
      component: ying
    },
    {
      path: "/yun",
      component: yun
    },
    {
      path: "/boss",
      component: boss,
      children: [{
          path: "one",
          component: one
        },
        {
          path: "two",
          component: two
        },
        {
          path: "three",
          component: three
        },
        {
          path: "four",
          component: four
        },
      ]
    }
  ]
})
