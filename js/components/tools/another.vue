<template>
    <div class="another" v-if="modalOptionType === 'another'">
        <modal-dialog>
            <div class="" slot="modal-header">
                xxx种操作
            </div>
            <div class="" slot="modal-body">
                表xx体
            </div>
        </modal-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import modalDialog from './modal-dialog'
export default {
    computed: {
        ...mapState(['modalOptionType'])
    },
    components:{
        modalDialog
    }
}
</script>

<style lang="css">
</style>
