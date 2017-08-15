<template>
    <div class="record" :style="recordStyle">
        <td-fixed :dataSetObj="trObj">
        </td-fixed>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import tdFixed from './td-fixed.vue';
export default {
    props: {
        trObj: {
            type: Object
        },
        trIndex: {
            type: Number
        }
    },
    components: {
        tdFixed
    },
    computed: {
        ...mapState(['tableDefaultProps']),
        recordStyle() {
            let top = this.getRecordTop();

            return {
                top: top + 'px',
                zIndex: 9999 - this.trIndex
            }
        }
    },
    methods: {
        getRecordTop() {
            return (this.tableDefaultProps.tdHeight - 1) * this.trIndex;
        }
    }
}
</script>

<style lang="css">
</style>
