<template>
    <div class="">
        <div v-if="freezeShow" class="th-dialog-item" @click="freeze">冻结至本列</div>
        <div v-if="unFreezeShow" class="th-dialog-item" @click="unFreeze">取消冻结</div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import tool from '../lib/tool.js';
export default {
    props: {
        displayField: {
            type: Object
        },
        displayFields: {
            type: Array
        }
    },
    computed: {
        freezeShow() {
            return this.displayField.fixed == 0;
        },
        unFreezeShow() {
            return this.displayField.fixed == 1;
        }
    },
    methods: {
        ...mapActions(['queryTable']),
        ...mapMutations(['hideDialog']),
        freeze() {
            //console.log('冻结');
            this.hideDialog();
            let isLastMxCol = this.isLastMxCol(this.displayField.fieldID);
            if (isLastMxCol) {
                util.remind(3, '最后一列不能冻结', null, 2000);
                return;
            }
            //冻结之本列,将前面的所有明细列的fixed都置为1
            let displayFields = this.displayFields;
            for (let i = 0, j = displayFields.length; i < j; i++) {
                displayFields[i].fixed = 1;
                if (displayFields[i].fieldID == this.displayField.fieldID) {
                    break;
                }
            }
            this.queryTable();
        },
        unFreeze() {
            //console.log('解冻');
            this.hideDialog();
            //取消冻结,是将所有明细列全都解冻
            let displayFields = this.displayFields;
            for (let i = 0, j = displayFields.length; i < j; i++) {
                if (displayFields[i].isGroup == 0) { //只操作明细列
                    displayFields[i].fixed = 0;
                }
            }
            this.queryTable();
        },
        isLastMxCol: function(fieldId) {
            let displayFields = this.displayFields;
            for (let i = displayFields.length - 1, j = 0; i > j; i--) {
                if (displayFields[i].columnName != 'groupid') {
                    if (displayFields[i].isGroup == 0 && displayFields[i].fieldID == fieldId) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            return false;
        },
    }
}
</script>

<style lang="css">
</style>
