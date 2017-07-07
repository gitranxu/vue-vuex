<template>
    <div class="modal-dialogs">
        <create-table-name-item-dialog></create-table-name-item-dialog>
        <another></another>
    </div>
</template>

<script>
import createTableNameItemDialog from './create-table-name-item-dialog';
import another from './another';

export default {
    components:{
        createTableNameItemDialog,
        another
    }
}
</script>

<style lang="css">
</style>
