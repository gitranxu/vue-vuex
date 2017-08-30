<!--
    冻不冻结,只跟fixed是否等于1这个属性及值有关,与isGroup无关
-->
<template>
    <div class="th-fixed">
        <div class="left">
            <div class="th"
                v-for="(th, thIndex) in displayFields"
                :class="thClass(th, thIndex)"
                v-if="th.fixed==1 && th.isVisible == 1"
                :style="thStyle(th, thIndex, 1)">
                    <th-content :th-obj="th" :displayFields="displayFields"></th-content>
                    <!-- <span class="tit">{{th.fieldName}}<em class="ico-sort th-sort-asc"></em></span><span class="th-dialog-btn"></span> -->
            </div>
        </div>
        <div class="right" :style="rightStyle">
            <div class="th"
                v-for="(th, thIndex) in displayFields"
                :class="thClass(th, thIndex)"
                v-if="th.fixed!=1 && th.isVisible == 1"
                :style="thStyle(th, thIndex, 0)">
                <th-content :th-obj="th" :displayFields="displayFields"></th-content>
                <!-- {{th.fieldName}} -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import thContent from './th-content.vue';
export default {
    props: {
        displayFields: {
            type: Array
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
    components: {
        thContent
    },
    methods: {
        // thRender(th, thIndex) {
        //     console.log(th);
        //
        // },
        getRightStyleLeft() {
            //计算出冻结列的宽度,从displayField中去取宽度,如果没有,则默认为100px
            let result = 0;
            for(let i in this.displayFields) {
                if(this.displayFields[i].fixed == 1 && this.displayFields[i].isVisible == 1) {
                    let width = this.displayFields[i].width || this.tableDefaultProps.thWidth;
                    result += width - 1;
                }
            }
            return result;
        },
        thStyle(th, thIndex, isFixed) {
            //取到对应的(同为冻结或同为不冻结的)前面所有th的宽度和
            let left = this.getWidthBefore(th, thIndex, isFixed);
            let width = th.width || this.tableDefaultProps.thWidth;
            let height = th.height || this.tableDefaultProps.thHeight;
            return {
                left: left + 'px',
                width: width + 'px',
                height: height + 'px',
                lineHeight: height + 'px'
            }
        },
        getWidthBefore(th ,thIndex, isFixed) {
            let arr = _.filter(this.displayFields, function(item) {
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
        thClass(th, thIndex) {
            if(th.isVisible == 0) { //不显示
                return ['hide'];
            }
        }
    }
}
</script>

<style lang="less">
.th-fixed{
    .th{
        position: absolute;
        top: 0;
        left: 0;

        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 20px;
        //overflow: hidden;
        border: 1px solid #eee;
        background: #fff;
        padding-right: 35px;
        color: #999;
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
