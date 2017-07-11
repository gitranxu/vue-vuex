<template>
    <div class="create-table-name-item-dialog" v-if="isCreateTableNameItem">
        <modal-dialog>
            <div class="" slot="modal-header">
                <h3>添加表格</h3>
            </div>
            <div class="" slot="modal-body">
                <input type="text" name="" value="" v-model="tableNameItemAddInfo.name" placeholder="表格名称">
                <div class="buttons">
                    <button type="button" class="btn btn-second btn-cancel" name="button" @click="cancel">取消</button>
                    <button type="button" class="btn btn-primary btn-add" name="button" @click="add">添加</button>
                </div>
            </div>
        </modal-dialog>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import stateEnum from '../../lib/stateEnum';
import modalDialog from './modal-dialog';
import tool from '../../lib/tool';
export default {
    data() {
        return {
            tableNameItemAddInfo:{
                name: ''
            }
        }
    },
    computed: {
        ...mapState(['modalOptionType']),
        isCreateTableNameItem() {
            return this.modalOptionType == stateEnum.modalOptionType_createTableNameItem;
        }
    },
    methods: {
        ...mapActions(['setModalOptionType','addTableNameItem']),
        // change() {
        //     this.setModalOptionType('another');
        // }
        cancel() {
            this.setModalOptionType('');
        },
        add() {
            let newTableNameItem = {
                name: this.tableNameItemAddInfo.name,
                id: tool.uuid(),
                viewNameItemList: [  //这部分数据是增加时默认的
                    {
                        name: '全部数据',
                        id: 0,
                        active: false
                    }
                ]
            };
            this.addTableNameItem(newTableNameItem);
            this.tableNameItemAddInfo.name = '';
            this.setModalOptionType('');
        }
    },
    components:{
        modalDialog
    }
}
</script>

<style lang="less" scoped>
    .create-table-name-item-dialog{
        h3{
            font-size: 18px;
            font-weight: 500;
        }
        input{
            width: 100%;
            display: block;
            padding: 6px 12px;
            color: #182334;
            background: #fff;
            border: 1px solid #cccccc;
            border-radius: 4px;
        }
        .buttons{
            margin: 30px -30px 0 -30px;
            padding: 10px 30px 0 30px;
            border-top: 1px solid rgba(138,168,145,.28);
            display: flex;
            justify-content: flex-end;
        }
    }
</style>
