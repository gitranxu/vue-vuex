import '../css/base.css';
import '../css/scrollbar.css';
import Vue from 'vue';
import Main from './components/main';
import store from './store/store';

//the main entrance
/* eslint-disable no-new */
import { mapState, mapActions, mapMutations } from 'vuex';
let s = new Vue({
    el: '#application',
    render(h) {
        return h(Main);
    },
    methods: {
        ...mapActions(['queryTable']),
        ...mapMutations(['setTableDefaultProps']),
        test() {
            console.log(88);
        }
    },
    store});


s.setTableDefaultProps({
    tdRender(tdObj, displayField) {
        if(displayField.columnName == 'Contact_Name') { //如果是联系人姓名
            return `<div class="test">${tdObj.formattedValue || tdObj.value}</div>`;
        }
    },
    trClick(tdObj, displayField, trObj) {
        console.log(JSON.stringify(tdObj));
        console.log(JSON.stringify(displayField));
        console.log(JSON.stringify(trObj));
    }
});
s.queryTable();
