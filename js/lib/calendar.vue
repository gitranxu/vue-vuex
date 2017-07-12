<template>
    <div class="my-calendar">
        123123
        {{nowDate}}
    </div>
</template>

<script>
export default {
    props: {
        nowDate: {
            type: String
        },
        resultObj: {
            type: Object
        }
    }
}
</script>

<style lang="less" scoped>
    .my-calendar{
        background: skyblue;
        color: #fff;
    }
</style>
