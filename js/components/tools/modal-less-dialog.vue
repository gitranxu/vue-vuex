<template>
    <div class="modal-less-dialog" @click="hidden" :style="{display: modalLessDialogInfo.display}">
        <div class="content" :style="modalLessDialogInfo">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['setModalLessDialogInfo']),
        hidden() {
            this.setModalLessDialogInfo({display:'none'})
        }
    },
    computed: {
        ...mapState(['modalLessDialogInfo'])
    }
}
</script>

<style lang="less" scoped>
    .modal-less-dialog{
        position: fixed;
        //background: rgba(0,0,0,.3);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        .content{
            position: absolute;
        }
    }
</style>
