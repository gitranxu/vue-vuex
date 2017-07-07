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
            id: 1,
            viewNameItemList: [
                {
                    name: '全部数据',
                    id: 1,
                    active: false
                },
                {
                    name: '库存不足',
                    id: 2,
                    active: false
                },
                {
                    name: '口碑不错',
                    id: 3,
                    active: false
                }
            ]
        },
        {
            name: '订单1',
            id: 2,
            viewNameItemList: [
                {
                    name: '全部数据',
                    id: 1,
                    active: false
                },
                {
                    name: '已付款',
                    id: 2,
                    active: false
                },
                {
                    name: '已签收',
                    id: 3,
                    active: false
                }
            ]
        }
    ],
    modalOptionType: '',
    currentTableNameItem: null
};

export default new Vuex.Store({
    state,
    actions,
    mutations
    //getters
    // strict: process.env.NODE_ENV !== 'production'
});
