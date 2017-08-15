<!--
    冻不冻结,只跟fixed是否等于1这个属性及值有关,与isGroup无关
-->
<template>
    <div class="td-fixed" :class="{hover: record.isMouseEnter}">
        <div class="left">
            <div class="td"
                v-for="(td, key) in dataSetObj"
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
            let left = this.getRightStyleLeft();
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
            let defaultResult = `${td.formattedValue || td.value}`;
            return this.tableDefaultProps.tdRender(td, displayField) || defaultResult;
        },
        getRightStyleLeft() {
            //计算出冻结列的宽度,从displayField中去取宽度,如果没有,则默认为100px
            let result = 0;
            let displayFields = this.getDisplayFields();
            for(let i in displayFields) {
                if(displayFields[i].fixed == 1) {
                    let width = displayFields[i].width || this.tableDefaultProps.thWidth;
                    result += width;
                }
            }
            return result;
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
                result += (arr[i].width || this.tableDefaultProps.thWidth) - 1; //这里的1是因为div的border是1px
            }
            return result;
        },
        toShow(key, isLeft) {
            let displayField = tool.getDisplayFieldByKey(this.getDisplayFields(), key);
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
    }
    .groupTd.mouseenter{
        background: #f7f7f7;
    }
    &.hover .td{
        background: #f7f7f7;
    }
    &.hover .groupTd{
        background: #ffffff;
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
