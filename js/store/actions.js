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
    }
}
