<template>
    <div class="view-name-item" @click="viewNameItemClick" :class="{active: viewNameItem.active}">
        <div class="view-name">
            {{viewNameItem.name}}
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        viewNameItem: {
            type: Object
        }
    },
    methods: {
        ...mapActions(['selectedViewNameItem']),
        viewNameItemClick() {
            // if(this.viewNameItem.active) {
            //     return;
            // }
            //this.viewNameItem.active = true;
            this.selectedViewNameItem(this.viewNameItem);
        }
    }
}
</script>

<style lang="less">
    .view-name-item{
        border: 1px solid transparent;
        &.active{
            background: #fff;
            color: #62836a;
            border-color: #d8dcd8;
            margin-right: -1px;
            border: 1px solid #d8dcd8;
            border-right:0;
        }
        .view-name{
            padding: 6px 52px 6px 13px;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
            &:hover{
                color: #62836a;
            }
        }
    }
</style>
