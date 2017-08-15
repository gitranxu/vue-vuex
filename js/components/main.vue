<template>
    <div class="main">
        <div class="options">

        </div>
        <div class="drill-nav-zone">

        </div>
        <rx-table v-if="tableInfo" :tableInfo="tableInfo.Value"></rx-table>


        <div class="page">

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import rxTable from './table.vue';
export default {
    computed: {
        ...mapState(['tableInfo'])
    },
    components: {
        rxTable
    }
}
</script>

<style lang="less">
</style>
