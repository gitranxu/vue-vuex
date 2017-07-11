export default {
    //tableNameItemList: state => state.tableNameItemList
    viewShowDataInfo(state) {
        //根据currentViewNameItem去查找viewDataInfoList,得到当前对应的viewDataInfo
        if(state.currentViewNameItem && state.viewDataInfoList) {
            return _.find(state.viewDataInfoList, function(item) {
                return item.viewId == state.currentViewNameItem.id;
            });
        }
    }
}
