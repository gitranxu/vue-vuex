<template>
    <div class="left-slider">
        <add-table-button></add-table-button>
        <table-name-item v-for="item in tableNameItemList" :table-name-item="item"></table-name-item>
    </div>
</template>

<script>
import addTableButton from './add-table-button';
import tableNameItem from './table-name-item';
import { mapState } from 'vuex';
export default {
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
    }
</style>
