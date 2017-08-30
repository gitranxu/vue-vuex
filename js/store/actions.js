import adapter from '../lib/mockAdapter';
export default {
    queryTable(store) {
        $.ajax({
            method: 'get',
            url: 'http://easy-mock.com/mock/598ad5a4a1d30433d85aeda5/getTableMockData/getTableMockData',
            data: store.getters.getParam,
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
                //console.log(data)
                //adapter.sortData(data, store.);
                store.commit('setTableInfo', data);
                store.commit('setQueryParams', {
                    displayFields: data.Value.displayFields
                });
            },
            error: function(e) {
                console.log(e);
            }
        });

    },
    queryTable1(store) {
        util.FHHApi({
            url: store.state.url,
            data: store.getters.getParam,
            success: function(data) {
                //console.log(data);
                store.commit('setTableInfo', data);
                store.commit('setQueryParams', {
                    displayFields: data.Value.displayFields
                });
            }
        });
    },
    queryTable3(store) {
        console.log('query with static data.......');
        let data = {
  "Result": {
    "FailureCode": 0,
    "StatusCode": 0,
    "UserInfo": {
      "EmployeeID": 1000,
      "EnterpriseAccount": "2"
    }
  },
  "Value": {
    "dataSet": [{
      "Employee_EmployeeID": {
        "value": 1000,
        "formattedValue": "我是昵称"
      },
      "Contact_CustomerID": {
        "value": "006e8174be7945bea9de51a418be4e53",
        "formattedValue": "覈鞭1层安徽(华祠)华源医药濯爿有限公司",
        "linkObjName": "Customer",
        "linkKeyValue": "006e8174be7945bea9de51a418be4e53"
      },
      "Contact_Name": {
        "value": "zhangbiao9106@126.com",
        "linkObjName": "Contact",
        "linkKeyValue": "bce4cf155dac40668814a1139468f026"
      },
      "Contact_Post": {
        "value": ""
      },
      "Contact_IsKeyPerson": {
        "value": 0,
        "formattedValue": "--"
      },
      "Contact_Tel": {
        "value": "05588209388"
      },
      "groupid": {
        "value": -1,
        "formattedValue": "-1"
      }
    }, {
      "Employee_EmployeeID": {
        "value": 1000,
        "formattedValue": "我是昵称"
      },
      "Contact_CustomerID": {
        "value": "006e8174be7945bea9de51a418be4e53",
        "formattedValue": "覈鞭1层安徽(华祠)华源医药濯爿有限公司",
        "linkObjName": "Customer",
        "linkKeyValue": "006e8174be7945bea9de51a418be4e53"
      },
      "Contact_Name": {
        "value": "zhangbiao9106@126.com",
        "linkObjName": "Contact",
        "linkKeyValue": "bce4cf155dac40668814a1139468f026"
      },
      "Contact_Post": {
        "value": ""
      },
      "Contact_IsKeyPerson": {
        "value": 0,
        "formattedValue": "--"
      },
      "Contact_Tel": {
        "value": "05588209388"
      },
      "groupid": {
        "value": -1,
        "formattedValue": "-1"
      }
    }, {
      "Employee_EmployeeID": {
        "value": 1000,
        "formattedValue": "我是昵称",
        "groupCellType": 1
      },
      "Contact_CustomerID": {
        "value": "006e8174be7945bea9de51a418be4e53",
        "formattedValue": "覈鞭1层安徽(华祠)华源医药濯爿有限公司",
        "linkObjName": "Customer",
        "linkKeyValue": "006e8174be7945bea9de51a418be4e53",
        "groupCellType": 1
      },
      "Contact_Name": {
        "value": 2,
        "formattedValue": "2",
        "aggType": "COUNT",
        "aggTypeCaption": "计数"
      },
      "Contact_Post": {
        "formattedValue": " "
      },
      "Contact_IsKeyPerson": {
        "formattedValue": " "
      },
      "Contact_Tel": {
        "formattedValue": " "
      },
      "groupid": {
        "value": 2,
        "formattedValue": "2"
      }
    }, {
      "Employee_EmployeeID": {
        "value": 1000,
        "formattedValue": "我是昵称"
      },
      "Contact_CustomerID": {
        "value": "0076b6e65b9e424dae4d7972f171ffeb",
        "formattedValue": "少博好人",
        "linkObjName": "Customer",
        "linkKeyValue": "0076b6e65b9e424dae4d7972f171ffeb"
      },
      "Contact_Name": {
        "value": "xingming",
        "linkObjName": "Contact",
        "linkKeyValue": "5d58d24a248f4f1a9726237f3ea5dac4"
      },
      "Contact_Post": {
        "value": "采购总监"
      },
      "Contact_IsKeyPerson": {
        "value": 1,
        "formattedValue": "否"
      },
      "Contact_Tel": {
        "value": "01000000000;:2"
      },
      "groupid": {
        "value": -1,
        "formattedValue": "-1"
      }
    }, {
      "Employee_EmployeeID": {
        "value": 1000,
        "formattedValue": "我是昵称"
      },
      "Contact_CustomerID": {
        "value": "0076b6e65b9e424dae4d7972f171ffeb",
        "formattedValue": "少博好人",
        "linkObjName": "Customer",
        "linkKeyValue": "0076b6e65b9e424dae4d7972f171ffeb"
      },
      "Contact_Name": {
        "value": "xingming",
        "linkObjName": "Contact",
        "linkKeyValue": "5d58d24a248f4f1a9726237f3ea5dac4"
      },
      "Contact_Post": {
        "value": "采购总监"
      },
      "Contact_IsKeyPerson": {
        "value": 1,
        "formattedValue": "否"
      },
      "Contact_Tel": {
        "value": "01000000000;:2"
      },
      "groupid": {
        "value": -1,
        "formattedValue": "-1"
      }
    }, {
      "Employee_EmployeeID": {
        "value": 1000,
        "formattedValue": "我是昵称",
        "groupCellType": 1
      },
      "Contact_CustomerID": {
        "value": "0076b6e65b9e424dae4d7972f171ffeb",
        "formattedValue": "少博好人",
        "linkObjName": "Customer",
        "linkKeyValue": "0076b6e65b9e424dae4d7972f171ffeb",
        "groupCellType": 1
      },
      "Contact_Name": {
        "value": 2,
        "formattedValue": "2",
        "aggType": "COUNT",
        "aggTypeCaption": "计数"
      },
      "Contact_Post": {
        "formattedValue": " "
      },
      "Contact_IsKeyPerson": {
        "formattedValue": " "
      },
      "Contact_Tel": {
        "formattedValue": " "
      },
      "groupid": {
        "value": 2,
        "formattedValue": "2"
      }
    }, {
      "Employee_EmployeeID": {
        "value": 1000,
        "formattedValue": "我是昵称",
        "groupCellType": 1
      },
      "Contact_CustomerID": {
        "formattedValue": " "
      },
      "Contact_Name": {
        "value": 4,
        "formattedValue": "4",
        "aggType": "COUNT",
        "aggTypeCaption": "计数"
      },
      "Contact_Post": {
        "formattedValue": " "
      },
      "Contact_IsKeyPerson": {
        "formattedValue": " "
      },
      "Contact_Tel": {
        "formattedValue": " "
      },
      "groupid": {
        "value": 1,
        "formattedValue": "1"
      }
    }, {
      "Employee_EmployeeID": {
        "value": "总计",
        "formattedValue": "总计"
      },
      "Contact_CustomerID": {
        "formattedValue": " "
      },
      "Contact_Name": {
        "value": 4,
        "formattedValue": "4",
        "aggType": "COUNT",
        "aggTypeCaption": "计数"
      },
      "Contact_Post": {
        "formattedValue": " "
      },
      "Contact_IsKeyPerson": {
        "formattedValue": " "
      },
      "Contact_Tel": {
        "formattedValue": " "
      },
      "groupid": {
        "value": 0,
        "formattedValue": "0"
      }
    }],
    "displayFields": [{
      "fieldID": "BI_157807262360961045",
      "seq": 0,
      "dbFieldName": "EmployeeID",
      "dbObjName": "Employee",
      "fieldName": "员工姓名",
      "isVisible": 1,
      "columnName": "Employee_EmployeeID",
      "columnCaption": "员工姓名",
      "orderType": 1,
      "fieldType": "String",
      "fixed": 1,
      "groupSeq": 1,
      "isGroup": 1,
      "operator": 0,
      "aggrType": "",
      "refObjName": "Employee",
      "subFieldType": "",
      "isCalc": 0,
      "isPerm": 1
    }, {
      "fieldID": "BI_196317484289294336",
      "seq": 2,
      "dbFieldName": "CustomerID",
      "dbObjName": "Contact",
      "fieldName": "客户名称",
      "isVisible": 1,
      "columnName": "Contact_CustomerID",
      "columnCaption": "客户名称",
      "orderType": 2,
      "fieldType": "String",
      "fixed": 1,
      "groupSeq": 2,
      "isGroup": 1,
      "operator": 0,
      "aggrType": "",
      "refObjName": "Customer",
      "subFieldType": "",
      "urlObj": "Customer.CustomerID",
      "isCalc": 0,
      "isPerm": 1
    }, {
      "fieldID": "BI_157807262327406620",
      "seq": 1,
      "dbFieldName": "Name",
      "dbObjName": "Contact",
      "fieldName": "联系人姓名",
      "isVisible": 1,
      "columnName": "Contact_Name",
      "columnCaption": "联系人姓名",
      "orderType": 1,
      "fieldType": "String",
      "fixed": 0,
      "groupSeq": 0,
      "isGroup": 0,
      "operator": 0,
      "aggrType": "1",
      "subFieldType": "",
      "urlObj": "Contact.ContactID",
      "isCalc": 0,
      "isPerm": 1,
      "noFastOrderShow": 1
    }, {
      "fieldID": "BI_157807262360961028",
      "seq": 3,
      "dbFieldName": "Post",
      "dbObjName": "Contact",
      "fieldName": "联系人职务",
      "isVisible": 1,
      "columnName": "Contact_Post",
      "columnCaption": "联系人职务",
      "orderType": 0,
      "fieldType": "String",
      "fixed": 0,
      "groupSeq": 0,
      "isGroup": 0,
      "operator": 0,
      "aggrType": "0",
      "subFieldType": "",
      "isCalc": 0,
      "isPerm": 1
    }, {
      "fieldID": "BI_157807262327406626",
      "seq": 4,
      "dbFieldName": "IsKeyPerson",
      "dbObjName": "Contact",
      "fieldName": "是否决策人",
      "isVisible": 1,
      "columnName": "Contact_IsKeyPerson",
      "columnCaption": "是否决策人",
      "orderType": 0,
      "fieldType": "SingleSelectEnum",
      "fixed": 0,
      "groupSeq": 0,
      "isGroup": 0,
      "operator": 0,
      "aggrType": "0",
      "subFieldType": "SingleSelectEnum",
      "isCalc": 0,
      "isPerm": 0
    }, {
      "fieldID": "BI_157807262360961025",
      "seq": 5,
      "dbFieldName": "Tel",
      "dbObjName": "Contact",
      "fieldName": "联系人电话",
      "isVisible": 1,
      "columnName": "Contact_Tel",
      "columnCaption": "联系人电话",
      "orderType": 0,
      "fieldType": "String",
      "fixed": 0,
      "groupSeq": 0,
      "isGroup": 0,
      "operator": 0,
      "aggrType": "0",
      "subFieldType": "",
      "isCalc": 0,
      "isPerm": 1,
      "nothdialog": 1
    }, {
      "fieldID": "00000000",
      "seq": 0,
      "dbFieldName": "groupid",
      "dbObjName": "groupid",
      "isVisible": 0,
      "columnName": "groupid",
      "orderType": 0,
      "fixed": 0,
      "groupSeq": 0,
      "isGroup": 0,
      "operator": 0,
      "aggrType": "0",
      "isCalc": 0,
      "isPerm": 1
    }],
    "page": {
      "pageSize": 8,
      "pageNumber": 1,
      "pageCount": 100,
      "totalCount": 797
    }
  }
};
        store.commit('setTableInfo', data);
        store.commit('setQueryParams', {
            displayFields: data.Value.displayFields
        });
    },
    // addTableNameItem({commit}, tableNameItem) {
    //     commit('addTableNameItem', tableNameItem);
    // },
    // selectedViewNameItem({commit}, currentViewNameItem) {
    //     commit('selectedViewNameItem', currentViewNameItem);
    // },
    // setModalOptionType({commit}, modalOptionType) {
    //     commit('setModalOptionType', modalOptionType);
    // },
    // setCurrentTableNameItem({commit}, tableNameItem) {
    //     commit('setCurrentTableNameItem', tableNameItem);
    // },
    // addViewNameItem({commit}, viewNameItem) {
    //     commit('addViewNameItem', viewNameItem);
    // },
    // setModalLessDialogInfo({commit}, modalLessDialogInfo) {
    //     commit('setModalLessDialogInfo', modalLessDialogInfo);
    // },
    // setTdEditDialogInfo({commit}, tdEditDialogInfo) {
    //     commit('setTdEditDialogInfo', tdEditDialogInfo);
    // },
    // hideTdEditDialogInfo({commit}, event) {
    //     //这里做一个总体判断,如果为XX种情况,则隐藏
    //     if($(event.target).hasClass('td-edit-click-zone') || $(event.target).parents('.td-edit').length || $(event.target).hasClass('td-edit')) {
    //         console.log('不应该隐藏');
    //     }else {
    //         console.log('隐藏');
    //         commit('setTdEditDialogInfo', {display: 'none'});
    //     }
    //
    // }

}
