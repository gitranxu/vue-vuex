<template>
    <div class="">
        <div v-if="sumShow" class="th-dialog-item" @click="sumClick">
            统计
        </div>
        <div v-if="modifySumShow" class="th-dialog-item" @click="modifySum">修改统计方式</div>
        <div v-if="cancelSumShow" class="th-dialog-item" @click="cancelSum">取消统计</div>
    </div>
</template>

<script>
import { mapActions,mapMutations,mapState } from 'vuex';
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
        ...mapState(['sumDialogInfo']),
        sumShow() {
            //aggrType值意义,1:计数,2:求和,3:最大值,4:最小值,5:平均值,6:唯一计数,明细列如果没有统计方式这个值为0
            //明细列并且aggrType值为0时显示,否则不显示
            if(this.displayField.isGroup == 0 && this.displayField.aggrType == 0) {
                return true;
            }
            return false;
        },
        modifySumShow() {
            //明细列并且aggrType值不为0时显示,否则不显示
            if(this.displayField.isGroup == 0 && this.displayField.aggrType != 0) {
                return true;
            }
            return false;
        },
        cancelSumShow() {
            //明细列并且aggrType值不为0时显示,否则不显示
            if(this.displayField.isGroup == 0 && this.displayField.aggrType != 0) {
                return true;
            }
            return false;
        }
    },
    methods: {
        ...mapActions(['queryTable']),
        ...mapMutations(['hideDialog','hideSumDialog','showSumDialog','setSumDialogInfo']),
        sumClick(event) {
            //console.log(1111);
            this.hideDialog();
            this.setSumDialogInfo({
                displayField: this.displayField,
                displayFields: this.displayFields,
                event: event,
                isShow: true
            });
        },
        modifySum() {
            // this.displayField.aggrType = "6";
            // this.hideDialog();
            // this.queryTable();
            this.hideDialog();
            this.setSumDialogInfo({
                displayField: this.displayField,
                displayFields: this.displayFields,
                event: event,
                isShow: true
            });
        },
        cancelSum() {
            //canUpdateTj,取消统计这里还有一个是否能够修改统计的小逻辑,回头加上
            this.displayField.aggrType = "0";
            this.hideDialog();
            this.queryTable();
        },
        closeDialog(event) {
            //console.log(1113);
            this.hideSumDialog();
            event.stopPropagation();
        }
    }
}
</script>

<style lang="css">
</style>
