<template>
    <div class="modal-dialogs">
        <create-table-name-item-dialog></create-table-name-item-dialog>
        <create-view-name-item-dialog></create-view-name-item-dialog>
    </div>
</template>

<script>
import createTableNameItemDialog from './create-table-name-item-dialog';
import createViewNameItemDialog from './create-view-name-item-dialog';

export default {
    components:{
        createTableNameItemDialog,
        createViewNameItemDialog
    }
}
</script>

<style lang="css">
</style>
