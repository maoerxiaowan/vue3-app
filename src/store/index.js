import { createStore } from 'vuex'
import createVuexAlong from 'vuex-along'
import goods from './modules/goods'

export const store = createStore({
    modeles:{
        goods,
    },

    plugin: [
        createVuexAlong({
            name: "hello-vuex-along", // 设置保存的集合名字，避免同站点下的多项目数据冲突
            local: {
              list: ["ma"],
              isFilter: true // 过滤模块 ma 数据， 将其他的存入 localStorage
            },
            session: {
              list: ["count", "ma.a1"] // 保存 count 和模块 ma 中的 a1 到 sessionStorage
            }
            //如果对于sessionstorage不进行任何操作，也可将session设为false
          })
    ]


})