<template>
    <div class="th-content">
        <span class="tit">
            {{thObj.fieldName}}
            <em v-if="canShowFastOrder()" class="ico-sort" :class="thSortClass" @click="sortClick()"></em>
        </span>
        <span v-if="canShowThdialog()" class="th-dialog-btn" @click="dialogClick">
            <!-- <th-dialog v-if="isDialogShow" :th-obj="thObj" @hideDialog="hideDialog"></th-dialog> -->
        </span>
    </div>
</template>

<script>
import { mapState,mapActions,mapMutations } from 'vuex';
import util from '../lib/tool.js';
export default {
    props: {
        thObj: {
            type: Object
        },
        displayFields: {
            type: Array
        }
    },
    computed: {
        ...mapState(['tableDefaultProps']),
        thSortClass() {
            return {
                "th-sort-asc": this.thObj.orderType == 1,
                "th-sort-desc": this.thObj.orderType == 2,
                "th-sort-init": this.thObj.orderType == 0,
            }
        }
    },
    methods: {
        ...mapActions(['queryTable']),
        ...mapMutations(['showDialog','setDialogInfo']),
        canShowFastOrder() {
            //是否显示快速排序小图标,两个逻辑,如果用户设置了fastOrderShow为0,则都不显示,默认都显示
            //在fastOrderShow为1的情况下,如果某个displayField的noFastOrderShow且值为1,或者该字段的isPerm不为1,即没有该字段的权限,则只有该th不会显示快速排序小图标
            if(this.tableDefaultProps.fastOrderShow == 0) {
                return false;
            }
            if(this.thObj.noFastOrderShow == 1 || this.thObj.isPerm != 1) {
                return false;
            }
            return true;
        },
        canShowThdialog() {
            //默认显示表头列操作项(给某个displayField对象加上一个nothdialog且值为1,或者该字段的isPerm不为1,即没有该字段的权限，则只有该th不会显示快速排序小图标)
            if(this.tableDefaultProps.thdialogshow == 0) {
                return false;
            }
            if(this.thObj.nothdialog == 1 || this.thObj.isPerm != 1) {
                return false;
            }
            return true;
        },
        sortClick() {
            //先判断当前的是否是分组列,如果是则点击升序变降序,点击降序变升序,点击无序变升序
            //如果是明细列,除了上面的规则外,还要将其他明细列重置为无序.
            util.orderTable(this.thObj, this.displayFields);
            this.queryTable();
        },
        dialogClick(event) {
            this.setDialogInfo({
                displayField: this.thObj,
                displayFields: this.displayFields,
                event: event,
                isShow: true
            });
        }
    }
}
</script>

<style lang="less">
.ico-sort{
    margin-top: -1px;
    display: inline-block;
    width: 8px;
    height: 12px;
    margin-left: 8px;
    background: url(../../img/xktableicons.png) no-repeat;
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
}
.th-sort-asc{
    background-position: -9px -120px;
}
.th-sort-init{
    background-position: 0 -120px;
}
.th-sort-desc{
    background-position: -18px -120px;
}
.th-dialog-btn {
    height: 14px;
    width: 14px;
    background: url(../../img/xktableicons.png) 0 -40px;
    position: absolute;
    top: 10px;
    right: 11px;
    cursor: pointer;
}
</style>
