<template>
    <div class="my-calendar">
        <div class="header">
            <div class="" @click="change">
                确认
            </div>
        </div>
        <div class="body">
            <table>
                <thead>
                    <th v-for="item in weekTitle">{{item.name}}</th>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in dateToShow">
                        <td v-for="(col,colIndex) in row" :class="{canClick: col.canClick, active: col.active}" @click="tdClick(rowIndex, colIndex)">
                            {{col.value}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            theDate: this.nowDate,
            dateToShow: null
        }
    },
    created() {
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
            return this.theDate.substring(0,4);
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
            return new Date(this.year, this.month, 1).getDay();
        },
        day() {
            return this.theDate.substring(8,10);
        },
        hour() {
            return this.theDate.substring(11,13);
        },
        minute() {
            return this.theDate.substring(14,16);
        },
        the42Day() {
            //得到当前第一个月之前的空白,由上一个月来填补,加上当前月天数后,再由1到大补齐42天
            let lastMonthDays = this.getNumberArr((this.getLastMouthDays() - this.getDayIndex() + 1),this.getLastMouthDays());
            let theDays = this.getNumberArr(1, this.mDays[this.month], {canClick: true});
            let nextMonthDays = this.getNumberArr(1, 42 - this.mDays[this.month] - this.getDayIndex());
            return lastMonthDays.concat(theDays).concat(nextMonthDays);
        },
        the67ArrayDay() {
            //6行7列
            let result = [[],[],[],[],[],[]];
            for(let i = 0; i < 6; i++) {
                for(let j = 0; j < 7; j++) {
                    result[i][j] = this.the42Day.slice(i*7+j, i*7+j+1)[0];
                    //result[i][j] = {...result[i][j],...this.the67ArrayDayOpt.opt[i][j]};
                }
            }
            return result;
        }
    },
    methods: {
        getNumberArr(begin, end, opt) {
            let result = [];
            for(let i = begin; i <= end; i++) {
                result.push({value: i, ...opt});
            }
            return result;
        },
        getLastMouthDays() {
            //得到上个月总天数
            if(this.month - 1 < 0) {
                return this.mDays[this.month - 1 + 12];
            }else{
                return this.mDays[this.month - 1];
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
        },
        tdClick(rowIndex, colIndex) {
            let colObj = _(this.dateToShow).flatten().find(function(item) {
                return item.active == true;
            });
            if(colObj) {
                this.$set(colObj, 'active', false);
            }
            this.$set(this.dateToShow[rowIndex][colIndex], 'active', true);
        }
    }
}
</script>

<style lang="less" scoped>
    .my-calendar{
        color: orange;
        user-select: none;
        box-shadow: 0 2px 4px rgba(0,0,0,.2);
        border-radius: 3px;
        width: 34 * 7px;
        .header{
            background: #8aa891;
            height: 44px;
            color: #fff;
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
                    &.canClick{
                        color: #182334;
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
