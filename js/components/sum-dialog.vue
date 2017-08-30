<template>
    <div class="sum-dialog">
        <common-modal-dialog
                :title="'统计'"
                :show-btns="'true'"
                :ok-name="'确 定'"
                :cancel-name="'取 消'"
                @okClick="okClick"
                @closeModelDialog="closeModelDialog"
                >
                <div class="tj-cntr">
                    <div class="tj-left">
                        统计方式
                    </div>
                    <div class="tj-right">
                        <div class="tj-item" v-for="item in tjItems" @click="modifySum(item)">
                            <span :class="spanClass(item)"></span>{{item.name}}
                        </div>
                    </div>
                </div>
        </common-modal-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import commonModalDialog from './common-modal-dialog.vue';
export default {
    data() {
        return {
            tjItems: this.computedTjItems()
        }
    },
    props: {
        displayField: {
            type: Object
        }
    },
    components: {
        commonModalDialog
    },
    methods: {
        ...mapActions(['queryTable']),
        computedTjItems() {
            let displayField = this.displayField;
            let fieldType = this.displayField.fieldType;
            let result = [];
            if (fieldType == 'Number') {
                result = this.getNumberItems();
            } else if (fieldType == 'String' || fieldType == 'SingleSelectEnum' || fieldType == 'MultiSelectEnum' || fieldType == 'RefEnum') {
                result = this.getStringItems();
            } else if (fieldType == 'Date') {
                result = this.getDateItems();
            }else {
                console.log('这里不应该出现其他类型,如果代码走到这里,可能需要修改上面的代码.');
            }
            //再根据displayField的aggrType字段,对checked初始值进行更正
            _(result).filter(function(item) {
                return displayField.aggrType.indexOf(item.aggrType) != -1;
            }).forEach(function(item) {
                //对于匹配的计数方式,将其状态设置为选中状态
                item.checked = true;
            });
            return result;
        },
        modifySum(tjItem) {
            tjItem.checked = !tjItem.checked;
        },
        spanClass(tjItem) {
            if(tjItem.checked) {
                return ['checked'];
            }else {
                return [''];
            }
        },
        getNumberItems() {
            return [
                {aggrType: 1, name: '计数', checked: false},
                {aggrType: 2, name: '求和', checked: false},
                {aggrType: 3, name: '最大值', checked: false},
                {aggrType: 4, name: '最小值', checked: false},
                {aggrType: 5, name: '平均值', checked: false},
                {aggrType: 6, name: '唯一计数', checked: false}
            ];
        },
        getStringItems() {
            return [
                {aggrType: 1, name: '计数', checked: false},
                {aggrType: 6, name: '唯一计数', checked: false}
            ];
        },
        getDateItems() {
            return [
                {aggrType: 1, name: '计数', checked: false},
                {aggrType: 3, name: '最大值', checked: false},
                {aggrType: 4, name: '最小值', checked: false},
                {aggrType: 6, name: '唯一计数', checked: false}
            ];
        },
        okClick(event) {
            console.log('确定....');
            let result = ['0']; //没有统计方式时为0
            _.filter(this.tjItems, function(item) {
                return item.checked;
            }).forEach(function(item) {
                if(result[0] == '0') {
                    result = [];
                }
                result.push(item.aggrType);
            });
            this.displayField.aggrType = result.join(',');
            console.log(this.displayField.aggrType);
            //这里还要隐藏当前窗口
            this.$emit('closeModelDialog',event);
            this.queryTable();
        },
        closeModelDialog(event) {
            //console.log(event);
            this.$emit('closeModelDialog',event);
        }
    }
}
</script>

<style lang="less">
.sum-dialog{
    .tj-cntr{
        display: flex;
        flex-direction: row;
        .tj-left{
            flex: 3;
        }
        .tj-right{
            flex: 7;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .tj-item{
                margin-right: 36px;
                margin-bottom: 16px;
                span{
                    margin-right: 12px;
                    background: url(../../img/xktableicons.png) -40px 0;
                    display: inline-block;
                    width: 17px;
                    height: 17px;
                    vertical-align: middle;
                    &.checked{
                        background-position: -40px -40px;
                    }
                }

            }
        }
    }
}
</style>
