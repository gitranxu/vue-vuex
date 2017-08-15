<template>
    <div class="view-name-item-click-dialog" v-if="isExist">
        <modal-less-dialog>
            <div class="items">
                <span v-if="!modalLessDialogInfo.isAllDataSet" class="item">重命名</span>
                <span class="item">复制</span>
                <span v-if="!modalLessDialogInfo.isAllDataSet" class="item">删除</span>
            </div>
        </modal-less-dialog>
    </div>
</template>

<script>
import modalLessDialog from './modal-less-dialog';
import stateEnum from '../../lib/stateEnum';
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['modalLessDialogInfo','modalLessOptionType']),
        isExist() {
            return this.modalLessDialogInfo.modalLessOptionType == stateEnum.modalLessOptionType_viewNameItemClick;
        }
    },
    components: {
        modalLessDialog
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
