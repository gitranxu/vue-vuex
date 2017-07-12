<template>
    <div class="td-text-edit">
        <slot></slot>
        <textarea v-if="tdEditDialogInfo.dblClick"  name="name" rows="8" cols="80" @blur="blur" v-model="tdValue"></textarea>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            tdValue: ''
        }
    },
    mounted() {
        //相当于初始化
        this.tdValue = this.tdEditDialogInfo.rowObj[this.tdEditDialogInfo.displayField.columnName].value;
    },
    watch: {
        'tdEditDialogInfo': {
            handler(val, oldVal) {
                this.tdValue = val.rowObj[val.displayField.columnName].value;
            },
            deep: true
        }
    },
    computed: {
        ...mapState(['tdEditDialogInfo'])
    },
    methods: {
        ...mapActions(['setTdEditDialogInfo']),
        blur() {
            this.tdEditDialogInfo.rowObj[this.tdEditDialogInfo.displayField.columnName].value = this.tdValue;
        }
    }
}
</script>

<style lang="css" scoped>
    textarea{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
