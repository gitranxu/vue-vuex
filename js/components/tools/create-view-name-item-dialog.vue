<template>
    <div class="create-view-name-item-dialog" v-if="isCreateViewNameItem">
        <modal-dialog>
            <div class="" slot="modal-header">
                <h3>添加视图</h3>
            </div>
            <div class="" slot="modal-body">
                <div class="note">
                    视图可以用来快速访问满足特定条件的数据。在每个视图里，可以设置不同的筛选、排序、隐藏列的条件，这些条件都会实时保存。
                </div>
                <input type="text" name="" value="" v-model="addInfo.name" placeholder="视图名称">
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
            addInfo:{
                name: ''
            }
        }
    },
    computed: {
        ...mapState(['modalOptionType']),
        isCreateViewNameItem() {
            return this.modalOptionType == stateEnum.modalOptionType_createViewNameItem;
        }
    },
    methods: {
        ...mapActions(['setModalOptionType','addViewNameItem','setCurrentTableNameItem']),
        // change() {
        //     this.setModalOptionType('another');
        // }
        cancel() {
            this.setModalOptionType('');
        },
        add() {
            this.addViewNameItem({name: this.addInfo.name, id: tool.uuid(), active: false});
            this.addInfo.name = '';
            this.setModalOptionType('');
            this.setCurrentTableNameItem(null);
        }
    },
    components:{
        modalDialog
    }
}
</script>

<style lang="less" scoped>
    .create-view-name-item-dialog{
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
        .note{
            padding: 5px 8px;
            margin-bottom: 10px;
            color: #919ba7;
            background: #f9f9f9;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 200;
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
