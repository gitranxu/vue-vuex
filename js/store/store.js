import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

//have vuex involved
Vue.use(Vuex);

const state = {
    tableInfo: null, //从后台查询表格后返回的数据,包括result,value等最外层结构
    tableDefaultProps: {
        thHeight: 35,
        tdHeight: 50,
        thWidth: 200,
        tdRender: function(tdObj, displayField) {
            console.log('渲染td的函数');
        },
        trClick: function(rowObj,displayField) {
            console.log('行点击事件');
        }
    },
    queryObj: null //查询表格的查询参数
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});
