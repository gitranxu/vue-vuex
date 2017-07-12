<template>
    <div class="">
        <div class="modal-dialogs">
            <create-table-name-item-dialog></create-table-name-item-dialog>
            <create-view-name-item-dialog></create-view-name-item-dialog>
        </div>
        <div class="modal-less-dialogs">
            <view-name-item-click-dialog></view-name-item-click-dialog>
            <td-date-click-dialog></td-date-click-dialog>
        </div>
        <td-edit></td-edit>
    </div>
</template>

<script>
import createTableNameItemDialog from './create-table-name-item-dialog';
import createViewNameItemDialog from './create-view-name-item-dialog';
import viewNameItemClickDialog from './view-name-item-click-dialog';
import tdDateClickDialog from './td-date-click-dialog';
import tdEdit from '../table/td-edit';

export default {
    components:{
        createTableNameItemDialog,
        createViewNameItemDialog,
        viewNameItemClickDialog,
        tdEdit,
        tdDateClickDialog
    }
}
</script>

<style lang="css">
</style>
