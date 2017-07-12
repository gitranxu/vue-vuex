<template>
    <div class="td-edit" v-if="isExist" :style="tdEditDialogInfo" @dblclick="editDblClick">
        <td-text-edit :type="type" :val-obj="valObj" :dbl-done="dblDone"></td-text-edit>
        <td-number-edit :type="type" :val-obj="valObj" :dbl-done="dblDone"></td-number-edit>
        <td-date-edit :type="type" :val-obj="valObj" :dbl-done="dblDone"></td-date-edit>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import tdTextEdit from './td-text-edit';
import tdNumberEdit from './td-number-edit';
import tdDateEdit from './td-date-edit';
export default {
    data() {
        return {
            dblDone: false //一开始为假
        }
    },
    computed: {
        ...mapState(['tdEditDialogInfo']),
        isExist() {
            if(this.tdEditDialogInfo && this.tdEditDialogInfo.rowObj && this.tdEditDialogInfo.displayField) {
                return true;
            }else {
                return false;
            }
        },
        type() {
            return this.tdEditDialogInfo.displayField.type;
        },
        valObj() {
            return this.tdEditDialogInfo.rowObj[this.tdEditDialogInfo.displayField.columnName];
        }
    },
    watch: {
        'tdEditDialogInfo': {
            handler() {
                this.dblDone = false; //当用户点击不同的td时,重新置为false
            },
            deep: true
        }
    },
    methods: {
        ...mapActions(['setTdEditDialogInfo']),
        editDblClick() {
            this.dblDone = true;
        }
    },
    components: {
        tdTextEdit,
        tdNumberEdit,
        tdDateEdit
    }
}
</script>

<style lang="less">
    .td-edit{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid orange;
        cursor: pointer;
    }
</style>
