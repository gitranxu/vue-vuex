<template>
    <div class="th-dialog-item disabled">
        来自: {{displayField.objName}}
    </div>
</template>

<script>
export default {
    props: {
        displayField: {
            type: Object
        }
    }
}
</script>

<style lang="css">
</style>
