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
    },
    orderTable(displayField, displayFields, cancelOrder) {
        let orderType = displayField.orderType;
        if(orderType == 1) { //1升序 2降序 0无序
            displayField.orderType = 2;
        }else if(orderType == 2 || orderType == 0) {
            displayField.orderType = 1;
        }
        if(cancelOrder) { //如果是取消排序操作
            displayField.orderType = 0;
        }
        if(displayField.isGroup == 0) { //如果是明细列,还要将其他明细列重置为无序
            _(displayFields).filter(function(item) {
                return item.isGroup == 0 && item.fieldID != displayField.fieldID;
            }).forEach(function(item) {
                item.orderType = 0;
            });
        }
        //console.log(this.displayFields);
        //console.log('------44-----:',displayFields);
    },
    delCol(displayField, displayFields, fn) {
        let index = _.findIndex(displayFields, function(item) {return item.fieldID == displayField.fieldID});
        console.log(index);
        if (index > -1) {
            displayFields.splice(index, 1);
            console.log(displayFields);
        }
        fn && fn();
    },
    canColDel(displayFields) {
        //是否仅仅只有一个明细列或仅只有一个分组列
        let total = 0
        for (let i = 0, j = displayFields.length; i < j; i++) {
            if (displayFields[i].isGroup == 0 && displayFields[i].columnName != 'groupid') { //明细
                total++;
            }
        }
        return !(total == 1 || total == 0);
    }
}
