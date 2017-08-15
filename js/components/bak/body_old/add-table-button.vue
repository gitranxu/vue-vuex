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
