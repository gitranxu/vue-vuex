<template>
    <div class="table-name-item">
        <div class="table-name">
            {{tableNameItem.name}}
        </div>
        <view-name-item v-for="item in tableNameItem.viewNameItemList" :view-name-item="item"></view-name-item>
        <create-view-name-item :table-name-item="tableNameItem"></create-view-name-item>
    </div>
</template>

<script>
import viewNameItem from './view-name-item';
import createViewNameItem from './create-view-name-item';
export default {
    props:{
        tableNameItem: {
            type: Object
        }
    },
    components: {
        viewNameItem,
        createViewNameItem
    }
}
</script>

<style lang="less">
    .table-name-item{
        margin-left: 30px;
        .table-name{
            font-size: 14px;
            color: #484848;
            font-weight: 500;
            vertical-align: middle;
            padding: 6px 0;
            margin-bottom: 6px;
        }
    }
</style>
