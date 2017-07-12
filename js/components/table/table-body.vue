<template>
    <div class="table-body">
        <div class="tr" v-for="(tr,trIndex) in tableInfo.dataSet" :style="getTrStyle(trIndex)">
            <div class="td" v-for="(td,tdIndex) in tableInfo.displayFields" :style="getTdStyle(tdIndex, td)" @click="tdClick(tr, td, $event)">
                <td-show :td-type="td.type" :tr-obj="tr" :tr-obj-key="td.columnName"></td-show>
            </div>
        </div>
    </div>
</template>

<script>
import tdShow from './td-show';
import { mapActions } from 'vuex';
export default {
    props: {
        tableInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        ...mapActions(['setTdEditDialogInfo']),
        tdClick(rowObj, displayField, event) {
            if(!$(event.target).hasClass('td-edit-click-zone')) {
                return;
            }
            let top = event.clientY - event.offsetY;
            let left = event.clientX - event.offsetX - 10;
            let selectedType = this.tableInfo.type[this.tableInfo.selectedType];
            let tdHeight = selectedType.tdHeight;
            let display = 'block';
            this.setTdEditDialogInfo({
                top: top + 'px',
                left: left + 'px',
                height: tdHeight - 2 + 'px',
                width: displayField.width - 2 + 'px',
                display: display,
                rowObj: rowObj,
                displayField: displayField
            });
        },
        getTrStyle(trIndex) {
            let selectedType = this.tableInfo.type[this.tableInfo.selectedType];
            let thHeight = selectedType.thHeight;
            let tdHeight = selectedType.tdHeight;
            let dataSet = this.tableInfo.dataSet;
            let trTop = 0;
            for(let i = 0, j = dataSet.length; i < j; i++) {
                if(i >= trIndex) {
                    break;
                }
                trTop += tdHeight - 1 * (i + 1);
            }
            trTop += thHeight - 1;
            return {
                left: 0,
                top: trTop + 'px'
            }
        },
        getTdStyle(tdIndex, currentDisplayField) {
            let left = 0;
            let displayFields = this.tableInfo.displayFields;
            let tdHeight = this.tableInfo.type[this.tableInfo.selectedType].tdHeight;
            for(let i = 0, j = displayFields.length; i < j; i++) {
                if(displayFields[i].fieldId == currentDisplayField.fieldId) {
                    break;
                }
                left += displayFields[i].width - 1;
            }
            return {
                width: currentDisplayField.width + 'px',
                height: tdHeight + 'px',
                lineHeight: tdHeight + 'px',
                textAlign: currentDisplayField.textAlign || 'center',
                padding: currentDisplayField.padding || '0 10px',
                top: 0,
                left: left + 'px'
            };
        }
    },
    components: {
        tdShow
    }
}
</script>

<style lang="less">
.table-body{
    position: absolute;
    top: 0;
    left: 0;
    .tr, .td{
        position: absolute;
    }
    .td{
        background: #fff;
        border: 1px solid #d6dfe4;
        color: #828282;
    }
}
</style>
