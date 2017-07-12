export default {
    addTableNameItem(state, tableNameItem) {
        state.tableNameItemList.push(tableNameItem);
    },
    selectedViewNameItem(state, currentViewNameItem) {
        //首先将所有的都置为false,再将当前的置为true
        state.tableNameItemList.forEach(function(item) {
            item.viewNameItemList.forEach(function(viewItem) {
                viewItem.active = false;
            });
        });
        currentViewNameItem.active = true;
        state.currentViewNameItem = currentViewNameItem;
    },
    setModalOptionType(state, modalOptionType) {
        state.modalOptionType = modalOptionType;
    },
    setCurrentTableNameItem(state, tableNameItem) {
        state.currentTableNameItem = tableNameItem;
    },
    addViewNameItem(state, viewNameItem) {
        state.tableNameItemList.filter(tableNameItem => tableNameItem.id == state.currentTableNameItem.id)[0]
            .viewNameItemList.push(viewNameItem);
    },
    setModalLessDialogInfo(state ,modalLessDialogInfo) {
        state.modalLessDialogInfo = {...modalLessDialogInfo};
    },
    setTdEditDialogInfo(state ,tdEditDialogInfo) {
        state.tdEditDialogInfo = {...tdEditDialogInfo};
    }
}
