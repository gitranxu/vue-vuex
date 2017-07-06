<template>
    <div class="create-table-name-item" v-if="modalOptionType === 'another'">
        <div class="" slot="modal-header">
            another
        </div>
        <div class="" slot="modal-body">
            anotherbody
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['modalOptionType'])
    }
}
</script>

<style lang="css">
</style>
