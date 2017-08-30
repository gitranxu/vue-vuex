<template>
    <div class="th-dialog-item" @click="delClick">
        删除列
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
//import tool from '../lib/tool.js';
export default {
    props: {
        displayField: {
            type: Object
        },
        displayFields: {
            type: Array
        }
    },
    methods: {
        ...mapActions(['queryTable']),
        ...mapMutations(['hideDialog', 'setDelColDialogInfo']),
        delClick() {
            this.hideDialog();
            this.setDelColDialogInfo({
                isShow: true,
                displayField: this.displayField,
                displayFields: this.displayFields
            });
        }
    }
}
</script>

<style lang="css">
</style>
