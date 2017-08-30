<template>
    <div class="">
        <div v-if="cancelOrderShow" class="th-dialog-item" @click="order(1,$event)">取消排序</div>
        <div v-if="ascOrderShow" class="th-dialog-item" :class="ascOrderClass" @click="order(0,$event)">升序</div>
        <div v-if="descOrderShow" class="th-dialog-item" :class="descOrderClass" @click="order(0,$event)">降序</div>
    </div>
</template>

<script>
import { mapActions,mapMutations } from 'vuex';
import util from '../lib/tool.js';
export default {
    props: {
        displayField: {
            type: Object
        },
        displayFields: {
            type: Array
        }
    },
    methods: {
        ...mapActions(['queryTable']),
        ...mapMutations(['hideDialog']),
        order(cancelOrder,event) {
            if($(event.target).hasClass('no-click')) {
                return;
            }
            util.orderTable(this.displayField, this.displayFields, cancelOrder);
            this.hideDialog();
            this.queryTable();
        }
    },
    computed: {
        //对于排序来说,如果是分组列,则只有升1\降序2,如果是明细列,有升1\降2\无序0三种
        ascOrderShow() {
            //升序,如果是分组列则显示,如果是明细列,如果当前不是升序则显示
            if(this.displayField.isGroup == 1) { //分组
                return true;
            }else {
                if(this.displayField.orderType != 1) {
                    return true;
                }else {
                    return false;
                }
            }
        },
        descOrderShow() {
            //降序,如果是分组列则显示,如果是明细列,如果当前不是降序则显示
            if(this.displayField.isGroup == 1) { //分组
                return true;
            }else {
                if(this.displayField.orderType != 2) {
                    return true;
                }else {
                    return false;
                }
            }
        },
        cancelOrderShow() {
            //取消排序,如果是分组列则不显示,如果是明细列,如果当前不是取消排序则显示
            if(this.displayField.isGroup == 1) { //分组
                return false;
            }else {
                if(this.displayField.orderType != 0) {
                    return true;
                }else {
                    return false;
                }
            }
        },
        ascOrderClass() {
            //对于升序来说,如果是分组列,并且当前是升序,则加上类no-click[不能点击]
            let result = [];
            if(this.displayField.isGroup == 1 && this.displayField.orderType == 1) { //分组且升序
                result.push('no-click');
            }
            return result;
        },
        descOrderClass() {
            //对于降序来说,如果是分组列,并且当前是降序,则加上类no-click[不能点击]
            let result = [];
            if(this.displayField.isGroup == 1 && this.displayField.orderType == 2) { //分组且降序
                result.push('no-click');
            }
            return result;
        }
    }
}
</script>

<style lang="css">
</style>
