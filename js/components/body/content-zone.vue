<template>
    <div class="content-zone">
        <my-table :table-info="viewShowDataInfo"></my-table>
    </div>
</template>

<script>
import myTable from '../table/table';
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['viewShowDataInfo'])
    },
    components: {
        myTable
    }
}
</script>

<style lang="less">
    .content-zone{
        width: 100%;
        height: 100%;
    }
</style>
