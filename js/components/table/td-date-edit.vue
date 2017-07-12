<template>
    <div class="td-date-edit" v-if="isExist">
        <!-- <textarea name="name" rows="8" cols="80" @blur="blur" v-model="tdValue"></textarea> -->
        <input type="text" name="" value="444">
    </div>
</template>

<script>
import stateEnum from '../../lib/stateEnum';
export default {
    data() {
        return {
            tdValue: ''
        }
    },
    props: {
        type: {
            type: String
        },
        valObj: {
            type: Object
        },
        dblDone: {
            type: Boolean
        }
    },
    mounted() {
        //相当于初始化
        this.tdValue = this.valObj.value;
    },
    computed: {
        isExist() {
            if(this.dblDone && this.type == stateEnum.tdDate) {
                return true;
            }
            return false;
        }
    },
    watch: {
        'valObj': {
            handler(val, oldVal) {
                this.tdValue = val.value;
            },
            deep: true
        }
    },
    methods: {
        blur() {
            this.valObj.value = this.tdValue;
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
