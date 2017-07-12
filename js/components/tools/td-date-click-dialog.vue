<template>
    <div class="td-date-click-dialog" v-if="isExist">
        <modal-less-dialog>
            <calendar :now-date="now" :result-obj="output"></calendar>
        </modal-less-dialog>
    </div>
</template>

<script>
import modalLessDialog from './modal-less-dialog';
import calendar from '../../lib/calendar';
import stateEnum from '../../lib/stateEnum';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            now: '2017-7-12 11:21',
            output: {
                a: ''
            }
        }
    },
    computed: {
        ...mapState(['modalLessDialogInfo']),
        isExist() {
            return this.modalLessDialogInfo.modalLessOptionType == stateEnum.modalLessOptionType_tdDateClick;
        }
    },
    components: {
        modalLessDialog,
        calendar
    }
}
</script>

<style lang="less" scoped>
    .view-name-item-click-dialog{
        .items{
            border-radius: 2px;
            box-shadow: 0 2px 5px rgba(0,0,0,.4);
            background: #fff;
            .item{
                padding: 4px 20px;
                display: block;
                color: #5a6478;
                font-weight: 300;
                cursor: pointer;
                font-size: 14px;
                &:hover{
                    color: #fff;
                    background: #dd985f;
                }
            }
        }

    }
</style>
