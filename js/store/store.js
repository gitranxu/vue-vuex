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
                    type: 'text',
                    textAlign: 'left'
                },
                {
                    fieldName: '客户名称',
                    columnName: 'username',
                    fieldId: 2,
                    orderType: 1,
                    isGroup: 0,
                    width: 200,
                    type: 'number',
                    textAlign: 'right'
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
                    shangji: {
                        value: '商机1'
                    },
                    username: {
                        value: 'sho1'
                    },
                    finishtime: {
                        value: '2015-7-10 4:34'
                    }
                },
                {
                    shangji: {
                        value: '商机2'
                    },
                    username: {
                        value: 'sho2'
                    },
                    finishtime: {
                        value: '2015-5-4 14:24'
                    }
                },
                {
                    shangji: {
                        value: '商机3'
                    },
                    username: {
                        value: 'sho3'
                    },
                    finishtime: {
                        value: '2015-5-4 14:24'
                    }
                },
                {
                    shangji: {
                        value: '商机4'
                    },
                    username: {
                        value: 'sho4'
                    },
                    finishtime: {
                        value: '2015-5-4 14:24'
                    }
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
                    shangji: {
                        value: '商机x'
                    },
                    username: {
                        value: 'sho1a'
                    },
                    finishtime: {
                        value: '2017-7-10 4:34'
                    }
                },
                {
                    shangji: {
                        value: '商机y'
                    },
                    username: {
                        value: 'sho2b'
                    },
                    finishtime: {
                        value: '2017-5-4 14:24'
                    }
                },
                {
                    shangji: {
                        value: '商机z'
                    },
                    username: {
                        value: 'shxdfo3'
                    },
                    finishtime: {
                        value: '2017-5-4 14:24'
                    }
                },
                {
                    shangji: {
                        value: '商机b'
                    },
                    username: {
                        value: 'fdsho4a'
                    },
                    finishtime: {
                        value: '2017-5-4 14:24'
                    }
                }
            ]
        }
    ],//所有的表格信息列表
    modalOptionType: '',
    currentTableNameItem: null,
    currentViewNameItem: null, //当前用户点击的视图
    modalLessDialogInfo: { //全局只有一个
        top: 0,
        left: 0,
        display: 'none',
        modalLessOptionType: '' //操作类型决定哪个可见哪个不可见
    },
    tdEditDialogInfo: { //全局只有一个
        top: 0,
        left: 0,
        display: 'none',
        dblClick: false
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
    // strict: process.env.NODE_ENV !== 'production'
});
