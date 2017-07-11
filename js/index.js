import '../css/base.css';
//import '../css/scrollbar.css';
import Vue from 'vue';
import Main from './components/main';
import store from './store/store';

//the main entrance
/* eslint-disable no-new */
new Vue({
    el: '#application',
    render(h) {
        return h(Main);
    },
    store});
