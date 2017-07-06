<template>
    <div class="main">
       <main-header>
           <scene-list></scene-list>
           <nav-brand></nav-brand>
           <user-info></user-info>
       </main-header>
       <main-body>
           <left-slider></left-slider>
           <content-zone></content-zone>
       </main-body>
       <tools>
           <modal-dialog v-if="modalOptionType !== ''">
               <create-table-name-item></create-table-name-item>
               <another></another>
           </modal-dialog>
       </tools>
    </div>
</template>

<script>

import mainHeader from './header/main-header';
import sceneList from './header/scene-list';
import navBrand from './header/nav-brand';
import userInfo from './header/user-info';

import mainBody from './body/main-body';
import leftSlider from './body/left-slider';
import contentZone from './body/content-zone';

import tools from './tools/tools';
import modalDialog from './tools/modal-dialog';
import createTableNameItem from './tools/create-table-name-item';
import another from './tools/another';


import { mapState } from 'vuex';
// import { STATUS } from '../vuex/store/statusEnum';

export default {
    // data() {
    //     return {
    //         createTableNameItemInfo: {
    //             name: '',
    //             viewNameItemList: [
    //                 {
    //                     name: '全部数据',
    //                     active: false
    //                 }
    //             ]
    //         }
    //     }
    // },
    // created() {
    //     this.updateStatus(STATUS.READY);
    //     this.reset();
    // },
    //
    computed: {
        ...mapState(['modalOptionType'])
    },
    components: {
        mainHeader,
        sceneList,
        navBrand,
        userInfo,
        mainBody,
        leftSlider,
        contentZone,
        tools,
        modalDialog,
        createTableNameItem,
        another
    }
}
</script>

<style scoped lang="less">
.main{
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
