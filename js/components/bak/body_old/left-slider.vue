<template>
    <div class="left-slider">
        <add-table-button></add-table-button>
        <div class="table-name-item-list">
            <table-name-item v-for="item in tableNameItemList" :table-name-item="item"></table-name-item>
        </div>
    </div>
</template>

<script>
import addTableButton from './add-table-button';
import tableNameItem from './table-name-item';
import { mapState } from 'vuex';
import scrollbar from 'jquery.scrollbar';
export default {
    mounted(el) {
        $(this.$el).find('.table-name-item-list').scrollbar();
    },
    computed: {
        ...mapState([
            'tableNameItemList'
        ])
    },
    components: {addTableButton, tableNameItem}
}
</script>

<style lang="less">
    .left-slider{
        width: 220px;
        flex-shrink: 0;
        height: 100%;
        border-right: 1px solid #d8dcd8;
        background: #f2f0f1;
        display: flex;
        flex-direction: column;
        .table-name-item-list{
            height: 100%;
            margin-right: -1px; //这里其实是一个小亮点儿
            overflow-y: auto;
            padding-bottom: 10px;
        }
    }
</style>
