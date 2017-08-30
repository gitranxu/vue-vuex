<template>
    <div class="th-dialog">
        <div class="mask" @click="hideDialog">
            {{tableDefaultProps.thdialog}}
        </div>
        <div class="content" :style="contentStyle">
            <div class="edgeLine"></div>
            <template v-if="dialogInfo.displayField.objName">
                <th-dialog-source :display-field="dialogInfo.displayField"></th-dialog-source>
                <div class="th-dialog-line"></div>
            </template>
            <template v-if="tableDefaultProps.thdialog.datafilter">
                <th-dialog-filter :display-field="dialogInfo.displayField"></th-dialog-filter>
                <div class="th-dialog-line"></div>
            </template>
            <template v-if="tableDefaultProps.thdialog.order">
                <th-dialog-order :display-field="dialogInfo.displayField" :display-fields="dialogInfo.displayFields"></th-dialog-order>
                <div class="th-dialog-line"></div>
            </template>
            <template v-if="tableDefaultProps.thdialog.groupsum">
                <th-dialog-group :display-field="dialogInfo.displayField" :display-fields="dialogInfo.displayFields"></th-dialog-group>
                <th-dialog-sum :display-field="dialogInfo.displayField" :display-fields="dialogInfo.displayFields"></th-dialog-sum>
                <div class="th-dialog-line"></div>
            </template>
            <template v-if="isFreezeShow()">
                <th-dialog-freeze :display-field="dialogInfo.displayField" :display-fields="dialogInfo.displayFields"></th-dialog-freeze>
                <div class="th-dialog-line"></div>
            </template>
            <template v-if="isDelShow()">
                <th-dialog-del :display-field="dialogInfo.displayField" :display-fields="dialogInfo.displayFields"></th-dialog-del>
                <div class="th-dialog-line"></div>
            </template>
            <div class="edgeLine"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import thDialogSource from './th-dialog-source.vue';
import thDialogFilter from './th-dialog-filter.vue';
import thDialogGroup from './th-dialog-group.vue';
import thDialogSum from './th-dialog-sum.vue';
import thDialogOrder from './th-dialog-order.vue';
import thDialogFreeze from './th-dialog-freeze.vue';
import thDialogDel from './th-dialog-del.vue';
import tool from '../lib/tool.js';
export default {
    props: {
        dialogInfo: {
            type: Object
        }
    },
    components: {
        thDialogSource,
        thDialogFilter,
        thDialogGroup,
        thDialogSum,
        thDialogOrder,
        thDialogFreeze,
        thDialogDel
    },
    methods: {
        hideDialog() {
            this.$emit('hideDialog');
        },
        isDelShow() {
            if(this.tableDefaultProps.thdialog.delcol) {
                return tool.canColDel(this.dialogInfo.displayFields); //列能否被删除
            }else {
                return false;
            }
        },
        isFreezeShow() {
            if(this.tableDefaultProps.thdialog.freeze) {
                if(this.dialogInfo.displayField.isGroup == 0) { //明细列
                    return true;
                }else {
                    return false; //分组列没有
                }
            }else {
                return false;
            }
        }
    },
    computed: {
        ...mapState(['tableDefaultProps']),
        contentStyle() {
            //console.log(this.dialogInfo.event);
            let event = this.dialogInfo.event;
            let cntrPosition = $(this.$root.$el).offset();
            return {
                top: event.y - event.offsetY - cntrPosition.top + 16 + 'px',
                left: event.x - event.offsetX - cntrPosition.left - 138 + 'px'
            }
        }
    }
}
</script>

<style lang="less">
    .th-dialog{
        position: absolute;
        top: 0;
        left: 0;
        .mask{
            background: rgba(0,0,0,0);
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 4;
        }
        .content{
            width: 150px;
            position: relative;
            top: 0;
            left: 0;
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 5px 10px 0 rgba(0,0,0,.2);
            z-index: 5;
        }
        .edgeLine{
            background: #fff;
            height: 8px;
        }
        .th-dialog-line{
            height: 1px;
            background: #eee;
            margin: 4px 0;

            &:nth-last-child(2){ //最后一个th-dialog-line元素,肯定是其父元素的倒数第二个元素
                display: none;
            }
        }
        .th-dialog-item{
            height: 36px;
            background: #fff;
            padding-left: 23px;
            font-size: 13px;
            color: #666;
            line-height: 36px;
            cursor: pointer;
            &:hover{
                background: #f2f2f2;
            }
            &.disabled{
                cursor: auto;
                color: #ccc;
                &:hover{
                    background: #fff;
                }
            }
            &.no-click{
                color: #ccc;
                &:hover{
                    cursor: auto;
                    background: #fff;
                }
            }
        }
    }
</style>
