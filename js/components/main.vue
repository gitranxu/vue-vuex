<template>
    <div class="main">
        <div class="options">

        </div>
        <div class="drill-nav-zone">

        </div>
        <div style="position:relative;">
            <rx-table v-if="tableInfo" :tableInfo="tableInfo.Value"></rx-table>
            <th-dialog v-if="dialogInfo.isShow" :dialog-info="dialogInfo" @hideDialog="hideTheDialog"></th-dialog>
            <del-col-dialog v-if="delColDialogInfo.isShow" :del-col-dialog-info="delColDialogInfo" @hideDelColDialog="hideDelColDialog"></del-col-dialog>
            <sum-dialog v-if="sumDialogInfo.isShow" :display-field="sumDialogInfo.displayField" @closeModelDialog="closeSumDialog"></sum-dialog>
        </div>
        <div class="page">
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import rxTable from './table.vue';
import thDialog from './th-dialog.vue';
import delColDialog from './del-col-dialog.vue';
import sumDialog from './sum-dialog.vue';
export default {
    created() {
        //console.log('main.....创建....');
        this.resetStore();
    },
    computed: {
        ...mapState(['tableInfo', 'dialogInfo', 'sumDialogInfo','delColDialogInfo'])
    },
    methods: {
        ...mapMutations(['resetStore','hideDialog','hideSumDialog','setDelColDialogInfo']),
        hideTheDialog() {
            this.hideDialog();
        },
        closeSumDialog() {
            this.hideSumDialog();
        },
        hideDelColDialog() {
            this.setDelColDialogInfo({isShow: false});
        }
    },
    components: {
        rxTable,
        thDialog,
        delColDialog,
        sumDialog
    }
}
</script>

<style lang="less">
    .main{
        font-size: 12px;
        .hide{
            display: none;
        }
    }
</style>
