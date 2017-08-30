<template>
    <div class="">
        <div v-if="groupShow" class="th-dialog-item" @click="group">分组</div>
        <div v-if="cancelGroupShow" class="th-dialog-item" @click="cancelGroup">取消分组</div>
    </div>
</template>

<script>
import { mapActions,mapMutations } from 'vuex';
export default {
    props: {
        displayField: {
            type: Object
        },
        displayFields: {
            type: Array
        }
    },
    computed: {
        groupShow() {
            //不是计算字段,同时是明细列则显示,否则不显示
            if(!this.isCalc() && this.displayField.isGroup == 0) {
                return true;
            }
            return false;
        },
        cancelGroupShow() {
            //不是计算字段,同时是分组列则显示,否则不显示
            if(!this.isCalc() && this.displayField.isGroup == 1) {
                return true;
            }
            return false;
        }
    },
    methods: {
        ...mapActions(['queryTable']),
        ...mapMutations(['hideDialog']),
        group() {
            //最多支持5级分组
            let num = this.getGroups();//这里还要判断，如果分组已经有5组了，则不显示，即最多支持5级分组
            if (num >= 5) {
                util.remind(3, '最多支持5层分组', null, 2000);
                console.log('最多支持5层分组');
                return;
            }

            this.displayField.isGroup = 1;
            this.displayField.aggrType = 0; //进行分组后，还要将统计置为0,因为分组的字段不能进行统计
            this.hideDialog();
            this.queryTable();
        },
        getGroups() {
            let result = 0;
            _.each(this.displayFields, function(item) {
                if(item.isGroup == 1) {
                    result++;
                }
            });
            return result;
        },
        cancelGroup() {
            this.displayField.isGroup = 0;
            this.hideDialog();
            this.queryTable();
        },
        isCalc() {
            return this.displayField.isCalc;
        }
    }
}
</script>

<style lang="css">
</style>
