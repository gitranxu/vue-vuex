<template>
    <div class="view-name-item" @click="viewNameItemClick" :class="{active: viewNameItem.active}">
        <div class="view-name">
            {{viewNameItem.name}}
            <span class="arrow-down" @click="showOptionItems"></span>
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
        ...mapActions(['selectedViewNameItem','setModalLessDialogInfo']),
        viewNameItemClick() {
            // if(this.viewNameItem.active) {
            //     return;
            // }
            //this.viewNameItem.active = true;
            this.selectedViewNameItem(this.viewNameItem);
        },
        showOptionItems(event) {
            console.log(event);
            this.setModalLessDialogInfo({
                top: event.clientY + 'px',
                left:event.clientX + 'px',
                display: 'block',
                isAllDataSet: this.viewNameItem.name == '全部数据'
            });
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
            position: relative;
            &:hover{
                color: #62836a;
            }
            .arrow-down{
                display: none;
                position: absolute;
                background: #f99891;
                width: 10px;
                height: 10px;
                top: 10px;
                right: 10px;
                border-radius: 50%;
                cursor: pointer;
                &:hover{
                    background: #6d9276;
                }
            }
        }
        &.active{
            .arrow-down{
                display: block;
            }
        }
    }
</style>
