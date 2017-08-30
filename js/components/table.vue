<template>
    <div class="rx-table">
        <div class="expand" :style="getExpandStyle"></div>
        <div class="table" :style="getTableStyle">
            <div class="head">
                <th-fixed :displayFields="tableInfo.displayFields">
                </th-fixed>
            </div>
            <div class="body" :style="bodyStyle" v-groupTable="bindingOpt">
                <record v-for="(tr, trIndex) in tableInfo.dataSet" :tr-obj="tr" :tr-index="trIndex"></record>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import $ from 'jquery';
import scrollbar from 'jquery.scrollbar';
import thFixed from './th-fixed.vue';
import record from './record.vue';
import tool from '../lib/tool.js';
import groupTable from '../lib/groupTable.js';
export default {
    data() {
        return {
            initRightLeft : 0 //.right的初始left值
        }
    },
    mounted(el) {
        let _this = this;
        let init_left = $('.table').position().left;
        let init_top = $('.table').position().top;

        this.initRightLeft = $('.right').position().left;
        console.log(this.initRightLeft);
        let init_body_top = $('.body').position().top;

        $(this.$el).scrollbar({
            "onScroll": function(y, x) {
                $('.table').css({
                    left: init_left + x.scroll,
                    top: init_top + y.scroll
                });

                let left = _this.initRightLeft - x.scroll;
                $('.right').css({
                    left: left
                });
                $('.body').css({
                    top: init_body_top - y.scroll
                });
            },
            "onInit": function() {
                $(this.wrapper).css({
                    width: _this.tableDefaultProps.tableWidth,
                    height: _this.tableDefaultProps.tableHeight
                });
            }
        });
        $('.rx-table .scroll-y').css("top", this.tableDefaultProps.thHeight);
    },
    updated() {
        //console.log(111);
        //console.log($('.right').position().left);
        this.initRightLeft = $('.right').position().left;
    },
    props: {
        tableInfo: {
            type: Object
        }
    },
    components: {
        thFixed,
        record
    },
    computed: {
        ...mapState(['tableDefaultProps']),
        getTableStyle() {
            let height = this.tableDefaultProps.tableHeight;
            let width = this.tableDefaultProps.tableWidth;
            return {
                height: height + 'px',
                width: width + 'px'
            }
        },
        getExpandStyle() {
            //高度等于th高度+(tr高度 - 1)*tr行数
            let height = this.tableDefaultProps.thHeight + (this.tableDefaultProps.tdHeight - 1) * this.tableInfo.dataSet.length + 1;
            if(height < this.tableDefaultProps.tableHeight) {
                height = this.tableDefaultProps.tableHeight; //当内容高度小于表格高度时,内容高度要等于表格高度,这样才能保证左右移动滚动条能正常使用.
            }
            //宽度等于所有th宽度之和
            let width = this.getThTotalWidth();
            return {
                height: height + 'px',
                width: width + 'px'
            }
        },

        bodyStyle() {
            let top = this.tableDefaultProps.thHeight - 1;
            return {
                top: top + 'px'
            }
        },
        bindingOpt() {
            //console.log(777777);
            return {
                tableDefaultProps: this.tableDefaultProps,
                getDisplayFields: this.getDisplayFields,
                tool: tool,
                componentObj: this
            }
        }
    },
    methods: {
        ...mapGetters(['getDisplayFields']),
        getThTotalWidth() {
            let result = 0;
            let _this = this;
            _.forEach(this.tableInfo.displayFields, function(displayField) {
                if(displayField.isVisible) {
                    result += (displayField.width || _this.tableDefaultProps.thWidth) - 1;
                }
            });
            result += 1;
            return result;
        }
    },
    directives: {
        groupTable(el, binding) {
            binding.value.componentObj.$nextTick(function() {
                groupTable.groupTable(el, binding.value);
            });

        }
    }
}
</script>

<style lang="less">
//.rx-table及.table中的宽高保持一致并由用户自定义即可
.rx-table{
    width: 560px;
    height: 310px;
    z-index: 3;
    position: relative;
}
.table{
    width: 560px;
    height: 310px;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
}
//.expand中的宽高则是计算得出
.expand{
    position: relative;
    z-index: -1;
}
.table{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    .head{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .body{
        position: absolute;
        //top: 35px;
        left: 0;
        z-index: 3;
        .record{
            position: absolute;
            left: 0;
            top: 0;
            .detail-td{
                //border: 0 solid #eee; 因为每行的z-index逐行递减,如果这样设置,则最上面的top线是显示不出来的
            }
            &.group-1 {
                .detail-td{
                    //border: 1px solid #eee;
                    background: #fff;
                }
            }
            &.group1, &.group3, &.group5 {
                .detail-td, .empty-group-td{
                    background: #fffef0;
                }
            }
            &.group2, &.group4 {
                .detail-td, .empty-group-td{
                    background: #f9f7e4;
                }
            }
            &.group0 {
                .detail-td, .empty-group-td{
                    background: #fffbd1;
                }
            }
            .freezed {
                font-weight: bold;
            }
        }
    }
}
</style>
