export default {
    getDisplayFieldByKey(displayFields, key) {
        return _.filter(displayFields, function(item) {
            return item.columnName == key;
        })[0];
    },
    getDisplayFieldIndex(displayFields, displayField) {
        return _.findIndex(displayFields, function(item) {
            return item.fieldID == displayField.fieldID;
        });
    }
}
