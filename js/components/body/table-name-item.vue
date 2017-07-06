<template>
    <div class="table-name-item">
        <div class="table-name">
            {{tableNameItem.name}}
        </div>
        <view-name-item v-for="item in tableNameItem.viewNameItemList" :view-name-item="item"></view-name-item>
    </div>
</template>

<script>
import viewNameItem from './view-name-item';
export default {
    props:{
        tableNameItem: {
            type: Object
        }
    },
    components: {viewNameItem}
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
        }
    }
</style>
