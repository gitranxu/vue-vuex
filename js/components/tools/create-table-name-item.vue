<template>
    <div class="create-table-name-item" v-if="modalOptionType === 'createTableNameItem'">
        <div class="" slot="modal-header">
            第一123种操作
        </div>
        <div class="" slot="modal-body">
            表体
        </div>
        <div class="" @click="change">
            test!
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState(['modalOptionType'])
    },
    methods: {
        ...mapActions(['setModalOptionType']),
        change() {
            this.setModalOptionType('another');
        }
    }
}
</script>

<style lang="css">
</style>
