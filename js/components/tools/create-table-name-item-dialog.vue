<template>
    <div class="create-table-name-item-dialog" v-if="modalOptionType === 'createTableNameItem'">
        <modal-dialog>
            <div class="" slot="modal-header">
                第一123种操作
            </div>
            <div class="" slot="modal-body">
                表体
            </div>
            <div class="" @click="change">
                test!
            </div>
        </modal-dialog>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import modalDialog from './modal-dialog'
export default {
    computed: {
        ...mapState(['modalOptionType'])
    },
    methods: {
        ...mapActions(['setModalOptionType']),
        change() {
            this.setModalOptionType('another');
        }
    },
    components:{
        modalDialog
    }
}
</script>

<style lang="css">
</style>
