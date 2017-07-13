<template>
    <div class="content-zone">
        <my-table :table-info="viewShowDataInfo"></my-table>
        <calendar @getDate="calendarGetDate"></calendar>
    </div>
</template>

<script>
import myTable from '../table/table';
import calendar from '../../lib/calendar';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            now: ''
        }
    },
    methods: {
        calendarGetDate(aaa) {
            console.log(aaa);
        }
    },
    computed: {
        ...mapGetters(['viewShowDataInfo'])
    },
    components: {
        myTable,
        calendar
    }
}
</script>

<style lang="less">
    .content-zone{
        width: 100%;
        height: 100%;
    }
</style>
