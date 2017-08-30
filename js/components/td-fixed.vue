<!--
    冻不冻结,只跟fixed是否等于1这个属性及值有关,与isGroup无关
-->
<template>
    <div class="td-fixed" :class="{hover: record.isMouseEnter}">
        <div class="left">
            <div class="td"
                v-for="(td, key) in dataSetObj"
                :class="tdClass(td, key)"
                v-if="toShow(key, 1)"
                :style="tdStyle(key, 1)"
                @click="tdClick(td, key, dataSetObj)"
                @mouseenter="tdMouseEnter()"
                @mouseleave="tdMouseLeave()"
                :columnName="key"
                :data-field="getDisplayFieldString(key)"
                :data-td="getTdString(td)"
                :data-tr="getTrString(dataSetObj)"
                v-html="tdRender(td, key)">
            </div>
        </div>
        <div class="right" :style="rightStyle">
            <div class="td"
                v-for="(td, key) in dataSetObj"
                :class="tdClass(td, key)"
                v-if="toShow(key, 0)"
                :style="tdStyle(key, 0)"
                @click="tdClick(td, key, dataSetObj)"
                @mouseenter="tdMouseEnter()"
                @mouseleave="tdMouseLeave()"
                :columnName="key"
                :data-field="getDisplayFieldString(key)"
                :data-td="getTdString(td)"
                :data-tr="getTrString(dataSetObj)"
                v-html="tdRender(td, key)">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import tool from '../lib/tool.js';
export default {
    data() {
        return {
            record: {
                ...this.dataSetObj,
                isMouseEnter: false
            }
        }
    },
    props: {
        dataSetObj: {
            type: Object
        }
    },
    computed: {
        ...mapState(['tableDefaultProps']),
        rightStyle() {
            let left = this.tableDefaultProps.initRightLeft;
            return {
                left: left + 'px'
            }
        }
    },
    methods: {
        ...mapGetters(['getDisplayFields']),
        tdRender(td, key) {
            let displayFields = this.getDisplayFields();
            let displayField = tool.getDisplayFieldByKey(displayFields, key);
            let defaultResult = `${td.formattedValue || td.value || ''}`;
            return this.tableDefaultProps.tdRender(td, displayField, defaultResult) || defaultResult;
        },
        tdStyle(key, isFixed) {
            //取到对应的(同为冻结或同为不冻结的)前面所有th的宽度和
            let displayFields = this.getDisplayFields();
            let displayField = tool.getDisplayFieldByKey(displayFields, key);
            let td = displayField;
            let tdIndex = tool.getDisplayFieldIndex(displayFields, displayField);
            //console.log(tdIndex);
            let left = this.getWidthBefore(td, tdIndex, isFixed, displayFields);
            let width = td.width || this.tableDefaultProps.thWidth;
            let height = this.tableDefaultProps.tdHeight;
            return {
                left: left + 'px',
                width: width + 'px',
                height: height + 'px'
            }
        },
        getDisplayFieldString(key) {
            let displayFields = this.getDisplayFields();
            let displayField = tool.getDisplayFieldByKey(displayFields, key);
            return JSON.stringify(displayField);
        },
        getTdString(td) {
            return JSON.stringify(td);
        },
        getTrString(tr) {
            return JSON.stringify(tr);
        },
        getWidthBefore(th ,tdIndex, isFixed, displayFields) {
            let arr = _.filter(displayFields, function(item) {
                return item.fixed == isFixed;
            });
            let result = 0;
            for(let i = 0, j = arr.length; i < j; i++) {
                if(arr[i].fieldID == th.fieldID) {
                    break;
                }
                if(arr[i].isVisible == 0) { //如果是隐藏的列,则不加其宽度
                    continue;
                }
                result += (arr[i].width || this.tableDefaultProps.thWidth) - 1; //这里的1是因为div的border是1px
            }
            return result;
        },
        toShow(key, isLeft) {
            let displayField = tool.getDisplayFieldByKey(this.getDisplayFields(), key);
            if(!displayField) {
                return false;
            }
            if(isLeft) {
                return displayField.fixed == 1 && displayField.isVisible == 1;
            }else {
                return displayField.fixed != 1 && displayField.isVisible == 1;
            }

        },
        tdClick(td, key, tr) {
            let displayFields = this.getDisplayFields();
            let displayField = tool.getDisplayFieldByKey(displayFields, key);
            this.tableDefaultProps.trClick(td, displayField, tr);
        },
        tdMouseEnter() {
            this.record.isMouseEnter = true;
        },
        tdMouseLeave() {
            this.record.isMouseEnter = false;
        },
        tdClass(td, key) {
            //如果当前列是明细列,则加上类名detail-td,否则为groupTd
            let displayFields = this.getDisplayFields();
            let displayField = tool.getDisplayFieldByKey(displayFields, key);
            let result = [];
            if(displayField.isVisible == 0) { //不显示
                result.push('hide');
                return result;
            }
            if(displayField.isGroup == 1) {
                result.push('group-td');
                if(this.isTdEmpty(td)) {
                    result.push('empty-group-td');
                }else {
                    result.push('not-empty-group-td');
                }
            }else {
                result.push('detail-td');
            }

            if(displayField.fieldType == 'String') {
                result.push('stringTd');
            }else if (displayField.fieldType == 'Number') {
                result.push('numberTd');
            }else if (displayField.fieldType == 'Date') {
                result.push('dateTd');
            }
            if(displayField.fixed == 1) {
                result.push('freezed');
            }

            return result;
        },
        isTdEmpty(td) {
            if(typeof td == 'string') {
                return $.trim(td) == '';
            }else {
                return $.trim(td.formattedValue || td.value || '') == '';
            }
        }
    }
}
</script>

<style lang="less">
.td-fixed{
    .td{
        position: absolute;
        top: 0;
        left: 0;
        text-align: left;
        padding: 13px 20px;
        border: 1px solid #eee;
        padding-right: 35px;
        background: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &.numberTd{
            text-align: right;
        }
    }
}
.left{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
}
.right{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}
</style>
