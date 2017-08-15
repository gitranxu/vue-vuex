<template>
    <div class="content-zone">
        <!-- <div class="test">
            <my-table :table-info="viewShowDataInfo"></my-table>
        </div> -->

        <!-- <calendar @getDate="calendarGetDate" :is-show="isCalendar" :has-time="true"></calendar>
        <div class="" @click="showCalendar">
            显示日历{{date}}
        </div> -->
        <my-new-table></my-new-table>
    </div>
</template>

<script>
import myNewTable from '../new-table/table2';
import myTable from '../table/table';
import calendar from '../../lib/calendar';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            now: '',
            isCalendar: false,
            date:''
        }
    },
    methods: {
        calendarGetDate(aaa) {
            this.isCalendar = false;//隐藏日历
            this.date = aaa;
        },
        showCalendar() {
            this.isCalendar = true; //显示日历
            this.abc = !this.abc;
            this.test = true;
        }
    },
    computed: {
        ...mapGetters(['viewShowDataInfo'])
    },
    components: {
        myTable,
        calendar,
        myNewTable
    }
}
</script>

<style lang="less">
    .content-zone{
        height: 100%;
        position: relative;
        flex: 1;
        .test{
            width: 400px;
            height: 300px;
            position: relative;
            background: orange;
        }
    }

</style>
