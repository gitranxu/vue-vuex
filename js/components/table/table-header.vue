<template>
    <div class="table-header">
        <!-- <div class="th">
            123
        </div>
        <div class="th">
            444
        </div>
        <div class="th">
            555
        </div>
        <div class="th">
            666
        </div> -->
        <div class="th" v-for="item in tableInfo.displayFields" :style="getHeaderStyle(item)">
            {{item.fieldName}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tableInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        getHeaderStyle(currentDisplayField) {
            let left = 0;
            let displayFields = this.tableInfo.displayFields;
            for(let i = 0, j = displayFields.length; i < j; i++) {
                if(displayFields[i].fieldId == currentDisplayField.fieldId) {
                    break;
                }
                left += displayFields[i].width - 1;
            }
            return {
                width: currentDisplayField.width + 'px',
                height: this.tableInfo.type[this.tableInfo.selectedType].thHeight + 'px',
                top: 0,
                left: left + 'px'
            };
        }
    }
}
</script>

<style lang="less" scoped>
.table-header{
    position: absolute;
    top: 0;
    left: 0;
    .th{
        background: #fff;
        border: 1px solid #d6dfe4;
        color: #828282;
        position: absolute;
    }
}
</style>
