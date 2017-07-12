<template>
    <div class="main" @click="mainClick">
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
           <modal-dialogs></modal-dialogs>
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
import modalDialogs from './tools/modal-dialogs';

import { mapState, mapActions } from 'vuex';
// import { STATUS } from '../vuex/store/statusEnum';

export default {
    computed: {
        ...mapState(['modalOptionType'])
    },
    methods: {
        ...mapActions(['hideTdEditDialogInfo']),
        mainClick(event) {
            this.hideTdEditDialogInfo(event);
        }
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
        modalDialogs
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
