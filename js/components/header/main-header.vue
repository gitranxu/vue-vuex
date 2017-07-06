<template>
    <div class="main-header">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
    .main-header{
        flex-shrink: 0;
        width: 100%;
        height: 40px;
        background: #1d2124;
        display: flex;
        justify-content: space-between;
        padding: 0 25px;
    }
</style>
