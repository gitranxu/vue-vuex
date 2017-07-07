<template>
    <div class="button-cntr">
        <div class="add-table-button btn btn-primary" @click="addTableNameItemClick">
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
    }

</style>
