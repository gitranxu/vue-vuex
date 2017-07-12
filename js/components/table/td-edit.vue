<template>
    <div class="td-edit" v-if="isExist" :style="tdEditDialogInfo" @dblclick="editDblClick">
        <td-text-edit>
            {{this.tdEditDialogInfo.rowObj[this.tdEditDialogInfo.displayField.columnName].value}}
        </td-text-edit>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import tdTextEdit from './td-text-edit';
export default {
    computed: {
        ...mapState(['tdEditDialogInfo']),
        isExist() {
            if(this.tdEditDialogInfo && this.tdEditDialogInfo.rowObj && this.tdEditDialogInfo.displayField) {
                return true;
            }else {
                return false;
            }
        }
    },
    methods: {
        ...mapActions(['setTdEditDialogInfo']),
        editDblClick() {
            this.setTdEditDialogInfo({...this.tdEditDialogInfo,dblClick: true});
        }
    },
    components: {
        tdTextEdit
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
