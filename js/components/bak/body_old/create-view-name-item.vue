<template>
    <div class="create-view-name-item" @click="add">
        添加新视图...
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props:{
        tableNameItem: { //当前表格
            type: Object
        }
    },
    methods: {
        ...mapActions(['setModalOptionType','setCurrentTableNameItem']),
        add() {
            this.setModalOptionType('createViewNameItem');
            this.setCurrentTableNameItem(this.tableNameItem);
        }
    }
}
</script>

<style lang="css">
    .create-view-name-item{
        font-size: 12px;
        cursor: pointer;
        color: #1a1b1c;
        margin-top: 4px;
        padding: 6px 0 6px 13px;
        border: 1px solid transparent;
    }
    .create-view-name-item:hover{
        color: #62836a;
    }
</style>
