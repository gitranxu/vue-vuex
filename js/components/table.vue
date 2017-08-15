<template>
    <div class="rx-table">
        <div class="expand" :style="getExpandStyle"></div>
        <div class="table">
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
    mounted(el) {
        let init_left = $('.table').position().left;
        let init_top = $('.table').position().top;

        let init_left1 = $('.right').position().left;
        let init_body_top = $('.body').position().top;

        $(this.$el).scrollbar({
            "onScroll": function(y, x) {
                $('.table').css({
                    left: init_left + x.scroll,
                    top: init_top + y.scroll
                });

                let left = init_left1 - x.scroll;
                $('.right').css({
                    left: left
                });
                $('.body').css({
                    top: init_body_top - y.scroll
                });
            }
        });
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
        getExpandStyle() {
            //高度等于th高度+(tr高度 - 1)*tr行数
            let height = this.tableDefaultProps.thHeight + (this.tableDefaultProps.tdHeight - 1) * this.tableInfo.dataSet.length;
            //宽度等于所有th宽度之和
            let width = this.getThTotalWidth();
            return {
                height: height + 'px',
                width: width + 'px'
            }
        },
        bodyStyle() {
            let top = this.tableDefaultProps.thHeight;
            return {
                top: top + 'px'
            }
        },
        bindingOpt() {
            return {
                tableDefaultProps: this.tableDefaultProps,
                getDisplayFields: this.getDisplayFields,
                tool: tool
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
            return result;
        }
    },
    directives: {
        groupTable(el, binding) {
            console.log(binding.value);
            groupTable.groupTable(el, binding.value);
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
        }
    }
}
</style>
