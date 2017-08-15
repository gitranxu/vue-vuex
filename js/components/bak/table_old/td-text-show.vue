<template>
    <div class="td-text td-edit-click-zone" v-if="isTdText">
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
        isTdText() {
            return this.tdType == stateEnum.tdText;
        }
    }
}
</script>

<style lang="css">
</style>
