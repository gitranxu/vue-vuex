<template>
    <div class="td-date-edit" v-if="isExist">
        <modal-less-dialog>
            <calendar :now-date="now" :result-obj="output"></calendar>
        </modal-less-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import stateEnum from '../../lib/stateEnum';
import modalLessDialog from '../tools/modal-less-dialog';
import calendar from '../../lib/calendar';
export default {
    data() {
        return {
            tdValue: '',
            now: "20170712 12:12:12",
            output: {}
        }
    },
    props: {
        type: {
            type: String
        },
        valObj: {
            type: Object
        },
        dblDone: {
            type: Boolean
        },
        tdHeight: {
            type: Number
        },
        dblClickE: {

        }
    },
    mounted() {
        //相当于初始化
        this.tdValue = this.valObj.value;
    },
    computed: {
        isExist() {
            if(this.dblDone && this.type == stateEnum.tdDate) {
                return true;
            }
            return false;
        }
    },
    watch: {
        'valObj': {
            handler(val, oldVal) {
                this.tdValue = val.value;
            },
            deep: true
        },
        'dblDone': {
            handler(val, oldVal) {
                if(val) {
                    console.log('这时应该显示日历....');
                    this.showCalendar();
                }

            }
        }
    },
    methods: {
        ...mapActions(['setModalLessDialogInfo']),
        blur() {
            this.valObj.value = this.tdValue;
        },
        showCalendar() {
            let event = this.dblClickE;
            let top = event.pageY - event.offsetY - 3;
            let left = event.pageX - event.offsetX - 1;
            this.setModalLessDialogInfo({
                display:'block',
                modalLessOptionType: stateEnum.modalLessOptionType_tdDateClick,
                top: (top + this.tdHeight) + 'px',
                left: left + 'px'
            });

        }
    },
    components: {
        modalLessDialog,
        calendar
    }
}
</script>

<style lang="css" scoped>
    textarea{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
