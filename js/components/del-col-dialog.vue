<template>
    <div class="del-col-dialog">
        <common-modal-dialog
                :title="'删除列提示'"
                :show-btns="'true'"
                :ok-name="'确 定'"
                :cancel-name="'取 消'"
                @okClick="ok"
                @closeModelDialog="cancel"
                >
                <div class="text">
                    确定要删除列吗?
                </div>
        </common-modal-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import tool from '../lib/tool.js';
import commonModalDialog from './common-modal-dialog.vue';
export default {
    props: {
        delColDialogInfo: {
            type: Object
        }
    },
    components: {
        commonModalDialog
    },
    methods: {
        ...mapActions(['queryTable']),
        ok(event) {
            let _this = this;
            this.$emit('hideDelColDialog');
            tool.delCol(this.delColDialogInfo.displayField, this.delColDialogInfo.displayFields, function() {
                _this.queryTable();
            });

        },
        cancel(event) {
            this.$emit('hideDelColDialog');
        }
    }
}
</script>

<style lang="less">
.del-col-dialog{
    .text{
        width: 500px;
        padding-top: 8px;
        padding-bottom: 32px;
    }
    .dialog-tit{
        border-bottom: none!important;
    }
}
</style>
