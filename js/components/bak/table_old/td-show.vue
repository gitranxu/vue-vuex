<template>
    <div class="td-show">
        <td-text-show :td-type="tdType">{{trObj[trObjKey].value}}</td-text-show>
        <td-number-show :td-type="tdType">{{trObj[trObjKey].value}}</td-number-show>
        <td-date-show :td-type="tdType">{{trObj[trObjKey].value}}</td-date-show>
    </div>
</template>

<script>
import tdTextShow from './td-text-show';
import tdNumberShow from './td-number-show';
import tdDateShow from './td-date-show';
export default {
    props: {
        tdType: {
            type: String
        },
        trObj: {
            type: Object
        },
        trObjKey: {
            type: String
        }
    },
    components: {
        tdTextShow,
        tdNumberShow,
        tdDateShow
    }
}
</script>

<style lang="css">
</style>
