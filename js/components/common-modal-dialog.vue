<template>
    <div class="common-modal-dialog">
        <div class="common-mask"></div>
        <div class="dialog">
            <div class="dialog-tit">{{title}}</div>
            <div class="dialog-content-wrap">
                <div class="dialog-content">
                    <slot>使用模式框组件的时候,标签里应该有相应的内容DOM.</slot>
                </div>
            </div>
            <div class="dialog-btns" v-if="showBtns">
                <span v-if="okName" class="b-g-btn btn" @click="okClick">{{okName}}</span>
                <span v-if="cancelName" class="b-g-btn-cancel btn" @click="cancelClick">{{cancelName}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        showBtns: {
            Boolean,
            default() {
                return false;
            }
        },
        okName: String,
        cancelName: String
    },
    methods: {
        okClick() {
            this.$emit('okClick');
        },
        cancelClick(event) {
            //console.log(event);
            this.$emit('closeModelDialog', event);
        }
    }
}
</script>

<style lang="less">
.common-modal-dialog{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    .common-mask{
        background: rgba(0,0,0,0.3);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .dialog{
        position: relative;
        background: #fff;
        .dialog-tit{
            border-radius: 4px 4px 0 0;
            font-size: 18px;
            text-align: left;
            color: #181c25;
            height: 56px;
            line-height: 56px;
            padding: 0 20px 0 24px;
            border-bottom: 1px solid #dee1e6;
            position: relative;
            z-index: 99;
        }
        .dialog-content-wrap{
            padding: 10px 24px;
        }
        .dialog-btns{
            text-align: right;
            background: #f4f6f9;
            border-top: 1px solid #dee1e6;
            padding: 10px 16px;
            border-radius: 0 0 4px 4px;
            span{
                margin-left: 15px;
                padding: 0 25px;
            }
            .btn{
                display: inline-block;
                height: 32px;
                line-height: 32px;
                padding: 0 20px;
                border: 1px solid #3e84e9;
                background-color: #3e84e9;
                border-radius: 3px;
                color: #fff;
                text-align: center;
                text-decoration: none;
                cursor: pointer;
                font-family: inherit;
                vertical-align: middle;
            }
            .b-g-btn-cancel{
                color: #787878;
                border: 1px solid #ccc;
                background-color: #fff;
            }
        }
    }
}
</style>
