<template>
    <div class="td-number td-edit-click-zone" v-if="isTdNumber">
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
        isTdNumber() {
            return this.tdType == stateEnum.tdNumber;
        }
    }
}
</script>

<style lang="css">
</style>
