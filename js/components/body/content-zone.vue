<template>
    <div class="content-zone">
        <my-table :table-info="viewShowDataInfo"></my-table>
        <calendar @getDate="calendarGetDate" @isShowChange="isShowChange" :is-show="test"></calendar>
        <div class="" @click="showCalendar">
            显示日历{{date}}
        </div>
    </div>
</template>

<script>
import myTable from '../table/table';
import calendar from '../../lib/calendar';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            now: '',
            test: false,
            date:''
        }
    },
    methods: {
        calendarGetDate(aaa) {
            this.date = aaa;
        },
        showCalendar() {
            this.test = true;
        },
        isShowChange(val) {
            this.test = val;
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
