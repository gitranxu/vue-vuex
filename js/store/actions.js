export default {
    addTableNameItem({commit}, tableNameItem) {
        commit('addTableNameItem', tableNameItem);
    },
    selectedViewNameItem({commit}, currentViewNameItem) {
        commit('selectedViewNameItem', currentViewNameItem);
    },
    setModalOptionType({commit}, modalOptionType) {
        commit('setModalOptionType', modalOptionType);
    }
}
