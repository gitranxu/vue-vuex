import Vue from 'vue';
import Vuex from 'vuex';

//import getters from './getters';
 import actions from './actions';
 import mutations from './mutations';

//have vuex involved
Vue.use(Vuex);

const state = {
    tableNameItemList: [
        {
            name: '商品',
            viewNameItemList: [
                {
                    name: '全部数据',
                    active: false
                },
                {
                    name: '库存不足',
                    active: false
                },
                {
                    name: '口碑不错',
                    active: false
                }
            ]
        },
        {
            name: '订单1',
            viewNameItemList: [
                {
                    name: '全部数据',
                    active: false
                },
                {
                    name: '已付款',
                    active: false
                },
                {
                    name: '已签收',
                    active: false
                }
            ]
        }
    ],
    modalOptionType: ''
};

export default new Vuex.Store({
    state,
    actions,
    mutations
    //getters
    // strict: process.env.NODE_ENV !== 'production'
});
