export default {
    setTableInfo(state, tableInfo) {
        state.tableInfo = tableInfo;
    },
    setQueryParams(state, queryParams) {
        state.tableDefaultProps.queryParamsObj = $.extend(state.tableDefaultProps.queryParamsObj, queryParams);
    },
    emptyQueryParams(state) {
        state.tableDefaultProps.queryParamsObj = {};
    },
    setUrl(state, url) {
        state.url = url;
    },
    setTableDefaultProps(state, tableDefaultProps) {
        console.log('setTableDefaultProps...',tableDefaultProps);
        state.tableDefaultProps = $.extend(state.tableDefaultProps, tableDefaultProps);
    },
    resetStore(state) {
        console.log('resetStore....');
        state.tableInfo = null;
        state.url = null;
        state.tableDefaultProps = {
            queryParamsObj : {},
            displayFields : null,
            thHeight : 35,
            tdHeight : 39,
            thWidth : 200,
            tableWidth : 0,
            tableHeight : 0,
            tdRender : function(tdObj, displayField) {},
            trClick : function(rowObj, displayField) {},
            //isEdit: 2, //报表状态，默认2运行态，1编辑态，暂时这样使用
            thdialog: {
                datafilter: true,
                order: true,
                groupsum: true,
                freeze: true,
                delcol: true
            },
            thdialogshow : 1,
            fastOrderShow : 1
        };
        state.dialogInfo = { //表头弹出框相关信息
            isShow: false,
            displayField: null,
            event: null,
            displayFields: null
        };
        state.sumDialogInfo = { //统计弹出框相关信息
            isShow: false
        }
    },
    showSumDialog(state) {
        state.sumDialogInfo.isShow = true;
    },
    hideSumDialog(state) {
        state.sumDialogInfo.isShow = false;
    },
    setSumDialogInfo(state, opt) {
        state.sumDialogInfo = $.extend(state.sumDialogInfo, opt);
    },
    setDelColDialogInfo(state, opt) {
        state.delColDialogInfo = $.extend(state.delColDialogInfo, opt);
    },
    showDialog(state) {
        state.dialogInfo.isShow = true;
    },
    hideDialog(state) {
        state.dialogInfo.isShow = false;
    },
    setDialogInfo(state, opt) {
        state.dialogInfo = $.extend(state.dialogInfo, opt);
    }
    // addTableNameItem(state, tableNameItem) {
    //     state.tableNameItemList.push(tableNameItem);
    // },
    // selectedViewNameItem(state, currentViewNameItem) {
    //     //首先将所有的都置为false,再将当前的置为true
    //     state.tableNameItemList.forEach(function(item) {
    //         item.viewNameItemList.forEach(function(viewItem) {
    //             viewItem.active = false;
    //         });
    //     });
    //     currentViewNameItem.active = true;
    //     state.currentViewNameItem = currentViewNameItem;
    // },
    // setModalOptionType(state, modalOptionType) {
    //     state.modalOptionType = modalOptionType;
    // },
    // setCurrentTableNameItem(state, tableNameItem) {
    //     state.currentTableNameItem = tableNameItem;
    // },
    // addViewNameItem(state, viewNameItem) {
    //     state.tableNameItemList.filter(tableNameItem => tableNameItem.id == state.currentTableNameItem.id)[0]
    //         .viewNameItemList.push(viewNameItem);
    // },
    // setModalLessDialogInfo(state ,modalLessDialogInfo) {
    //     state.modalLessDialogInfo = {...modalLessDialogInfo};
    // },
    // setTdEditDialogInfo(state ,tdEditDialogInfo) {
    //     state.tdEditDialogInfo = {...tdEditDialogInfo};
    // }
}
