<template>
    <div class="my-table">
        <!-- <table-buttons></table-buttons> -->
        <table-header :table-info="tableInfo"></table-header>
        <table-body :table-info="tableInfo"></table-body>
    </div>
</template>

<script>
//import { mapState } from 'vuex';
// $ from 'jquery';
import scrollbar from 'jquery.scrollbar';
import tableHeader from './table-header';
import tableBody from './table-body';

export default {
    mounted(el) {
        console.log($(this.$el).length);
        $(this.$el).scrollbar();
    },
    props: {
        tableInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    components: {
        tableHeader,
        tableBody
    }
}
</script>

<style lang="less" scoped>
//使用时,使用scrollbar方法的DOM要定义最大高度,它的父级DOM要定义最大宽度.
    .my-table{
        position: relative;
        height: 100%;
        width: 100%;
        .table-header{
            height: 100px;
            background: skyblue;
        }
        .table-body{
            height: 700px;
            background: green;
        }
    }
</style>
