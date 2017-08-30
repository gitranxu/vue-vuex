import '../css/base.css';
import '../css/scrollbar.css';
import Vue from 'vue';
import Main from './components/main';
import store from './store/store';

//the main entrance
/* eslint-disable no-new */
import { mapState, mapActions, mapMutations } from 'vuex';
class VueTable{
    constructor(opt) {
        this.$el = $(opt.el);
        let $tmp = this.$el.append('<div id="tmp"></div>').find('#tmp');//只所以加这一行代码,是因为渲染的时候,会把tmp元素替换掉,从而保留用户传进来的元素

        this.vue = new Vue({
            el: $tmp[0],
            render(h) {
                return h(Main);
            },
            methods: {
                ...mapActions(['queryTable']),
                ...mapMutations(['setTableDefaultProps', 'setUrl', 'setQueryParams']),
                test() {
                    console.log(88);
                }
            },
            store
        });

        this.dialogConfig(opt);

        this.vue.setTableDefaultProps({
            tableWidth: this.$el.width(),
            tableHeight: this.$el.height(),
            tdRender: function(td, displayField, defaultResult) {
                //console.log('渲染td的函数');
                if(td.aggTypeCaption) { //如果有统计信息
                    return '<div class="formattedValue"><span class="first">' + td.aggTypeCaption + '</span><span class="opt" style="margin:0 2px;">:</span><span class="second" style="font-weight: 700">' + _.escape(td.formattedValue || td.value || '') + '</span></div>';
                }
                if(typeof td == 'string') {
                    return _.escape(td); //针对那种接口返回值只是字符串而不是对象的情况
                }
                return defaultResult;
            }
        });
    }

    queryTable() {
        this.vue.queryTable();
    }

    setUrl(url) {
        this.vue.setUrl(url);
    }

    setQueryParams(opt) {
        this.vue.setQueryParams(opt);
    }

    setTableDefaultProps(opt) {
        this.vue.setTableDefaultProps(opt);
    }

    dialogConfig(opt) {
        //isEdit: 2, //报表状态，默认2运行态，1编辑态，暂时这样使用
        let thdialog = {};
        if(opt.isEdit && opt.isEdit == 1) { //编辑态配置
            console.log('编辑态配置123...');
            thdialog = {
                datafilter: false,
                order: true,
                groupsum: true,
                freeze: false,
                delcol: true
            };
        }else if(opt.isEdit && opt.isEdit == 3) { //这时候可以采用用户自定义的显示方式
            console.log('自定义配置...');
            thdialog = {
                datafilter: opt.thdialog.datafilter,
                order: opt.thdialog.order,
                groupsum: opt.thdialog.groupsum,
                freeze: opt.thdialog.freeze,
                delcol: opt.thdialog.delcol
            };
        }else { //默认运行态配置
            console.log('运行态配置...');
            thdialog = {
                datafilter: true,
                order: true,
                groupsum: false,
                freeze: true,
                delcol: false
            };
        }
        this.vue.setTableDefaultProps({
            thdialog: thdialog
        });
    }
}

window.VueTable = VueTable;
