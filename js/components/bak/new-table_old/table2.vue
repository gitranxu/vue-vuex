<template>
    <div class="cntr">
        <div class="test1">

        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import scrollbar from 'jquery.scrollbar';
export default {
    mounted(el) {
        // console.log('here333.....');
        // console.log(typeof $(this.$el).scrollbar);
        $(this.$el).scrollbar();
    }
}
</script>

<style lang="css">
.cntr{
    width: 400px;
    height: 300px;
    background: skyblue;
}
.test1{
    height: 500px;
    background: green;
    width: 800px;
}
</style>
