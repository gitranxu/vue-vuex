<template>
    <div class="td-date td-edit-click-zone" v-if="isTdDate">
        <slot></slot>
    </div>
</template>

<script>
import stateEnum from '../../lib/stateEnum';
export default {
    props: {
        tdType: {
            type: String
        }
    },
    computed: {
        isTdDate() {
            return this.tdType == stateEnum.tdDate;
        }
    }
}
</script>

<style lang="css">
</style>
