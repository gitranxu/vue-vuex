<template>
    <div class="button-cntr">
        <div class="add-table-button" @click="addTableNameItemClick">
            添加表格
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['addTableNameItem', 'setModalOptionType']),
        addTableNameItemClick() {
            //这里先写死
            // let newTableNameItem = {
            //     name: '美不美',
            //     viewNameItemList: [
            //         {
            //             name: '全部数据',
            //             active: false
            //         }
            //     ]
            // };
            // this.addTableNameItem(newTableNameItem);
            this.setModalOptionType('createTableNameItem');
        }
    }
}
</script>

<style lang="less" scoped>
    .button-cntr{
        margin: 20px 30px;
        .add-table-button{
            background: #8aa891;
            color: #fff;
            font-weight: 200;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            padding: 4px 18px;
            font-size: 14px;
            &:hover{
                background: #6d9276;
            }
        }
    }

</style>
