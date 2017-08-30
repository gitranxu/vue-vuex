export default {
    //tableNameItemList: state => state.tableNameItemList
    // viewShowDataInfo(state) {
    //     //根据currentViewNameItem去查找viewDataInfoList,得到当前对应的viewDataInfo
    //     if(state.currentViewNameItem && state.viewDataInfoList) {
    //         return _.find(state.viewDataInfoList, function(item) {
    //             return item.viewId == state.currentViewNameItem.id;
    //         });
    //     }
    // }
    getDisplayFields(state) {
        if(state.tableInfo && state.tableInfo.Value && state.tableInfo.Value.displayFields) {
            return state.tableInfo.Value.displayFields;
        }
    },
    getParam(state) {
        //console.log(123);
        if(state.tableDefaultProps.displayFields) {
            state.tableDefaultProps.queryParamsObj = $.extend(state.tableDefaultProps.queryParamsObj, state.tableDefaultProps.displayFields);
        }
        return state.tableDefaultProps.queryParamsObj;
    }
}
