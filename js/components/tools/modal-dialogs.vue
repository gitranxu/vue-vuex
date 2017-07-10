<template>
    <div class="">
        <div class="modal-dialogs">
            <create-table-name-item-dialog></create-table-name-item-dialog>
            <create-view-name-item-dialog></create-view-name-item-dialog>
        </div>
        <div class="modal-less-dialogs">
            <view-name-item-click-dialog></view-name-item-click-dialog>
        </div>
    </div>
</template>

<script>
import createTableNameItemDialog from './create-table-name-item-dialog';
import createViewNameItemDialog from './create-view-name-item-dialog';
import viewNameItemClickDialog from './view-name-item-click-dialog';

export default {
    components:{
        createTableNameItemDialog,
        createViewNameItemDialog,
        viewNameItemClickDialog
    }
}
</script>

<style lang="css">
</style>
