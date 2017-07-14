<template>
    <div class="my-calendar">
        <div class="header">
            <div class="months">
                <div class="title">
                    <span>{{this.selectedMonth+1}}月</span>
                    <span @click="showMonthSelect">v</span>
                </div>
                <div class="selects" :style="{display: isMonthSelectShow}">
                    <div class="month-item" v-for="item in 12">
                        <span @click="changeMonth(item-1)" :class="{active:((item-1) == selectedMonth)}">{{item}}月</span>
                    </div>
                </div>
            </div>
            <div class="years">
                <div class="title">
                    <span>{{this.selectedYear}}</span>
                    <span @click="showYearSelect">v</span>
                </div>
                <div class="selects" :style="{display: isYearSelectShow}">
                    <div class="year-item" v-for="item in years" @click="changeYear(item)" :class="{active:item == selectedYear}">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
        <div class="body">
            <table>
                <thead>
                    <th v-for="item in weekTitle">{{item.name}}</th>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in dateToShow">
                        <td v-for="(col,colIndex) in row" :class="{currentMonth: col.currentMonth, currentDay: col.currentDay, active: getTdActive(col)}" @click="changeDay(col.value)">
                            {{col.value}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="footer">
            <div class="" @click="change">
                确认{{this.selectedDay}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            theDate: this.nowDate,
            dateToShow: null,
            isMonthSelectShow: 'none',
            isYearSelectShow: 'none',
            selectedMonth: 0, //选中的月
            selectedYear: 0,
            selectedDay: 0,
            now: new Date()
        }
    },
    created() {
        this.selectedMonth = this.month;
        this.selectedYear = this.year;
        this.selectedDay = this.day;
        this.dateToShow = this.the67ArrayDay;
    },
    props: {
        nowDate: {
            //格式为'2017-01-02 11:12'
            type: String,
            default() {
                return '2017-07-02 11:12'
            }
        },
        resultObj: {
            type: Object
        },
        beginWeek: {
            //渲染日历时,第一列是周几,周日为0或7
            type: Number,
            default() {
                //回头这里加一个自定义判断,数值只能为0-7
                return 1;
            }
        }
    },
    computed: {
        year() {
            return this.theDate.substring(0,4) - 0;
        },
        month() {
            return this.theDate.substring(5,7) - 1;//字面量减1,因为代码中0代表1月份
        },
        mDays() {
            return [31, 28 + (this.isLeap() ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        },
        weekTitle() {
            let weekList = [{name: '周一', value: 1},{name: '周二', value: 2},{name: '周三', value: 3},{name: '周四', value: 4},{name: '周五', value: 5},{name: '周六', value: 6},{name: '周日', value: 0}];
            let result = [];
            let beginWeek = this.beginWeek;
            if(beginWeek == 0) {
                beginWeek = 7;
            }
            if(beginWeek > 1) {
                result = _.rest(weekList, beginWeek - 1).concat(_.first(weekList, beginWeek - 1));
            }else {
                result = weekList;
            }
            return result;
        },
        mFirstDay() {
            //得到某个月第一天是星期几
            return new Date(this.selectedYear, this.selectedMonth, 1).getDay();
        },
        day() {
            return this.theDate.substring(8,10) - 0;
        },
        hour() {
            return this.theDate.substring(11,13) - 0;
        },
        minute() {
            return this.theDate.substring(14,16) - 0;
        },
        the42Day() {
            //得到当前第一个月之前的空白,由上一个月来填补,加上当前月天数后,再由1到大补齐42天
            let lastMonthDays = this.getNumberArr((this.getLastMouthDays() - this.getDayIndex() + 1),this.getLastMouthDays());
            let theDays = this.getNumberArr(1, this.mDays[this.selectedMonth], {currentMonth: true});
            let nextMonthDays = this.getNumberArr(1, 42 - this.mDays[this.selectedMonth] - this.getDayIndex());
            return lastMonthDays.concat(theDays).concat(nextMonthDays);
        },
        the67ArrayDay() {
            //6行7列
            let result = [[],[],[],[],[],[]];
            for(let i = 0; i < 6; i++) {
                for(let j = 0; j < 7; j++) {
                    result[i][j] = this.the42Day.slice(i*7+j, i*7+j+1)[0];
                }
            }
            return result;
        },
        years() {
            //得到当前年的上下20年
            let result = [];
            for(let i = this.selectedYear - 20; i <= this.selectedYear + 20; i++) {
                result.push(i);
            }
            return result;
        }
    },
    methods: {
        refresh() {
            this.isMonthSelectShow = 'none';
            this.isYearSelectShow = 'none';
            this.dateToShow = this.the67ArrayDay;
        },
        showYearSelect() {
            this.isYearSelectShow = 'flex';
        },
        showMonthSelect() {
            this.isMonthSelectShow = 'flex';
        },
        changeYear(year) {
            this.selectedYear = year;
            this.refresh();
        },
        changeMonth(month) {
            this.selectedMonth = month;
            this.refresh();
        },
        changeDay(day) {
            this.selectedDay = day;
            this.refresh();
        },
        getNumberArr(begin, end, opt) {
            //如果是当前月,如果是当前日,则给一个active
            let result = [];
            for(let i = begin; i <= end; i++) {
                if(opt && opt.currentMonth) {
                    if(i == this.selectedDay) {
                        //初始值或用户选择值
                        console.log('这里再想想怎样弄...');
                        result.push({value: i, ...opt, ...{selectedDay: true}});
                    }else if(this.now.getDate() == i && this.selectedMonth == this.month && this.selectedYear == this.year) {
                        //当前日
                        result.push({value: i, ...opt, ...{currentDay: true}});
                    }else{
                        result.push({value: i, ...opt});
                    }
                }else{
                    result.push({value: i, ...opt});
                }
            }
            return result;
        },
        hasActiveTd() {
            return _(this.dateToShow).flatten().find(function(item){return item.active == true});
        },
        getTdActive(col) {
            //先判断一下是否有active为true的col,如果没有再去找selectedDay为true的col
            if(this.hasActiveTd()) {
                return col.active;
            }else {
                return col.selectedDay;
            }
        },
        getLastMouthDays() {
            //得到上个月总天数
            if(this.selectedMonth - 1 < 0) {
                return this.mDays[this.selectedMonth - 1 + 12];
            }else{
                return this.mDays[this.selectedMonth - 1];
            }
        },
        getDayIndex() {
            //得到星期几在日历中是第几列
            let firstDay = this.mFirstDay;
            return _.findIndex(this.weekTitle, function(item) {
                return item.value == firstDay;
            });
        },
        change() {
            this.theDate = '2088-01-02 11:12';
            this.$emit('getDate',{a:23,b:77});
        },
        isLeap(){
            let year = this.year;
            return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
        }
    }
}
</script>

<style lang="less" scoped>
    .my-calendar{
        color: orange;
        margin-left: 10px;
        margin-top: 10px;
        user-select: none;
        box-shadow: 0 2px 4px rgba(0,0,0,.2);
        border-radius: 3px;
        width: 34 * 7px;
        .header{
            background: #8aa891;
            height: 44px;
            color: #fff;
            display: flex;
            flex-direction: row;
            position: relative;
            .months{
                flex: 0 0 60%;
                position: relative;
                .title{
                    padding: 10px 20px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                    span:last-child{
                        cursor: pointer;
                    }
                }
                .selects{
                    position: absolute;
                    background: #fff;
                    color: #000;
                    padding: 0 16px;
                    display: flex;
                    flex-wrap: wrap;
                    box-shadow: 0 1px 3px rgba(0,0,0,.2);
                    .month-item{
                        flex: 0 0 50%;
                        span{
                            margin: 6px 4px;
                            display: block;
                            text-align: center;
                            font-size: 14px;
                            line-height: 26px;
                            cursor: pointer;
                            &.active{
                                background: #8aa891;
                                color: #fff;
                            }
                        }
                    }
                }
                &:hover{
                    background: #62846a;
                }
            }
            .years{
                flex: 0 0 40%;
                position: relative;
                .title{
                    padding: 10px 20px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                    span:last-child{
                        cursor: pointer;
                    }
                }
                .selects{
                    position: absolute;
                    width: 100%;
                    max-height: 228px;
                    overflow: auto;
                    background: #fff;
                    color: #000;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 1px 3px rgba(0,0,0,.2);
                    .year-item{
                        margin: 8px;
                        cursor: pointer;
                        text-align: center;
                        font-size: 14px;
                        line-height: 26px;
                        &.active{
                            background: #8aa891;
                            color: #fff;
                        }
                    }
                }
                &:hover{
                    background: #62846a;
                }
            }
        }
        .body{
            table{
                border-collapse: collapse;
                border-spacing: 0;
                th{
                    background: #8aa891;
                    height: 22px;
                    color: #fff;
                    line-height: 22px;
                    text-align: center;
                    font-size: 12px;
                    font-weight: normal;
                }
                td{
                    width: 34px;
                    height: 34px;
                    line-height: 34px;
                    text-align: center;
                    border: 1px solid #dee5ec;
                    color: #919ba7;
                    cursor: pointer;
                    &.currentMonth{
                        color: #182334;
                    }
                    &.currentDay{
                        background: #eee;
                    }
                    &.active{
                        background: #f6eada;
                    }
                }
                tr:nth-child(1)>td{
                    border-top: 0;
                }
                tr:last-child>td{
                    border-bottom: 0;
                }
                td:nth-child(1){
                    border-left: 0;
                }
                td:nth-child(7){
                    border-right: 0;
                }

            }


        }
    }
</style>
