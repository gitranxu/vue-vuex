export default {
    addTableNameItem({commit}, tableNameItem) {
        commit('addTableNameItem', tableNameItem);
    },
    selectedViewNameItem({commit}, currentViewNameItem) {
        commit('selectedViewNameItem', currentViewNameItem);
    },
    setModalOptionType({commit}, modalOptionType) {
        commit('setModalOptionType', modalOptionType);
    },
    setCurrentTableNameItem({commit}, tableNameItem) {
        commit('setCurrentTableNameItem', tableNameItem);
    },
    addViewNameItem({commit}, viewNameItem) {
        commit('addViewNameItem', viewNameItem);
    },
    setModalLessDialogInfo({commit}, modalLessDialogInfo) {
        commit('setModalLessDialogInfo', modalLessDialogInfo);
    },
    setTdEditDialogInfo({commit}, tdEditDialogInfo) {
        commit('setTdEditDialogInfo', tdEditDialogInfo);
    },
    hideTdEditDialogInfo({commit}, event) {
        //这里做一个总体判断,如果为XX种情况,则隐藏
        if($(event.target).hasClass('td-edit-click-zone') || $(event.target).parents('.td-edit').length || $(event.target).hasClass('td-edit')) {
            console.log('不应该隐藏');
        }else {
            console.log('隐藏');
            commit('setTdEditDialogInfo', {display: 'none'});
        }

    }
}
