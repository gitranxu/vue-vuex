import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

//have vuex involved
Vue.use(Vuex);

const state = {
    tableInfo: null, //从后台查询表格后返回的数据,包括result,value等最外层结构
    url: null,
    tableDefaultProps: {
        queryParamsObj: {}, //查询参数
        displayFields: null, //如果这个参数有值,则发起后台请求时,以该值为准
        thHeight: 35,
        tdHeight: 39,
        thWidth: 200,
        tableWidth: 0,
        tableHeight: 0,
        initRightLeft: 0, //表格的冻结处默认left值
        tdRender: function(tdObj, displayField) {
            //console.log('渲染td的函数');
        },
        trClick: function(rowObj,displayField) {
            //console.log('行点击事件');
        },
        //isEdit: 2, //报表状态，默认2运行态，1编辑态
        thdialog: {
            datafilter: true,
            order: true,
            groupsum: true,
            freeze: true,
            delcol: true
        },
        thdialogshow: 1, //默认显示表头列操作项(给某个displayField对象加上一个nothdialog且值为1,或者该字段的isPerm不为1,即没有该字段的权限，则只有该th不会显示快速排序小图标)
        fastOrderShow: 1 //是否显示快速排序小图标,两个逻辑,如果用户设置了fastOrderShow为0,则都不显示,默认都显示(//在fastOrderShow为1的情况下,如果某个displayField的noFastOrderShow且值为1,或者该字段的isPerm不为1,即没有该字段的权限,则只有该th不会显示快速排序小图标)
    },
    dialogInfo: {//表头弹出框相关信息
        isShow: false,
        displayField: null,
        event: null,
        displayFields: null
    },
    delColDialogInfo: {//删除列弹出框相关信息
        isShow: false,
        displayField: null,
        event: null,
        displayFields: null
    },
    sumDialogInfo: {//统计弹出框相关信息
        isShow: false,
        displayField: null,
        event: null,
        displayFields: null
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});
