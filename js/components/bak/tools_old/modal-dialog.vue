<template>
    <div class="modal-dialog">
        <div class="modal-content" style="width:500px;">
            <div class="modal-header">
                <slot name="modal-header"></slot>
            </div>
            <div class="modal-body">
                <slot name="modal-body"></slot>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .modal-dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(0,0,0,.3);
        display: flex;
        justify-content: center;
        align-items: center;
        .modal-content{
            color: #182334;
            box-shadow: 0 0 4px 0 rgba(0,0,0,.13);
            background: #fff;
            border-radius: 2px;
            .modal-header{
                padding: 20px 30px 10px 30px;
            }
            .modal-body{
                padding: 10px 30px 10px 30px;
            }
        }
    }
    .modal-transition{
        opacity: 1;
        transition: opacity .3s ease-out;
    }
</style>
