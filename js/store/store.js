import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
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
    viewDataInfoList: [
        {
            viewId: 1,//视图id
            type:[  //表格类型
                {
                    thHeight: 20,
                    tdHeight: 20
                },
                {
                    thHeight: 30,
                    tdHeight: 30
                },
                {
                    thHeight: 40,
                    tdHeight: 40
                }
            ],
            selectedType: 1, //选择了第二种类型的表格
            displayFields:[
                {
                    fieldName: '商机',
                    columnName: 'shangji',
                    fieldId: 1,
                    orderType: 1,
                    isGroup: 1,
                    width: 100,
                    type: 'text'
                },
                {
                    fieldName: '客户名称',
                    columnName: 'username',
                    fieldId: 2,
                    orderType: 1,
                    isGroup: 0,
                    width: 200,
                    type: 'number'
                },
                {
                    fieldName: '完成时间',
                    columnName: 'finishtime',
                    fieldId: 3,
                    orderType: 1,
                    isGroup: 0,
                    width: 300,
                    type: 'date'
                }
            ],
            dataSet: [
                {
                    shangji: '商机1',
                    username: 'sho3',
                    finishtime: '2015-7-10 4:34'
                },
                {
                    shangji: '商机2',
                    username: 'ssd3',
                    finishtime: '2015-5-4 14:24'
                },
                {
                    shangji: '商机1',
                    username: 'sho3',
                    finishtime: '2015-7-10 4:34'
                },
                {
                    shangji: '商机2',
                    username: 'ssd3',
                    finishtime: '2015-5-4 14:24'
                }
            ]
        },
        {
            viewId: 2,//视图id
            type:[  //表格类型
                {
                    thHeight: 20,
                    tdHeight: 20
                },
                {
                    thHeight: 30,
                    tdHeight: 30
                },
                {
                    thHeight: 40,
                    tdHeight: 40
                }
            ],
            selectedType: 2, //选择了第一种类型的表格
            displayFields:[
                {
                    fieldName: '商机',
                    columnName: 'shangji',
                    fieldId: 1,
                    orderType: 1,
                    isGroup: 1,
                    width: 300,
                    type: 'text'
                },
                {
                    fieldName: '客户名称',
                    columnName: 'username',
                    fieldId: 2,
                    orderType: 1,
                    isGroup: 0,
                    width: 100,
                    type: 'number'
                },
                {
                    fieldName: '完成时间',
                    columnName: 'finishtime',
                    fieldId: 3,
                    orderType: 1,
                    isGroup: 0,
                    width: 200,
                    type: 'date'
                }
            ],
            dataSet: [
                {
                    shangji: '商机1',
                    username: 'sho3',
                    finishtime: '2017-7-10 4:34'
                },
                {
                    shangji: '商机2',
                    username: 'ssd3',
                    finishtime: '2016-5-4 14:24'
                },
                {
                    shangji: '商机1',
                    username: 'sho3',
                    finishtime: '2017-7-10 4:34'
                },
                {
                    shangji: '商机2',
                    username: 'ssd3',
                    finishtime: '2016-5-4 14:24'
                }
            ]
        }
    ],//所有的表格信息列表
    modalOptionType: '',
    currentTableNameItem: null,
    currentViewNameItem: null, //当前用户点击的视图
    modalLessDialogInfo:{ //全局只有一个
        top: 0,
        left: 0,
        display: 'none'
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
    // strict: process.env.NODE_ENV !== 'production'
});
