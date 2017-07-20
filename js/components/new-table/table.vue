<template>
    <div class="my-table">
        <div class="expander" :style="expanderStyle">
            <p class="con1" :style="pStyle">据新华社电中航工业、国机集团等8家央企6日在京签约，在重要项目、科技转化等相关领域开展重组合作整合，这将成为央企间产业联合协作的新典范，也将开启央企间产业重组合作整合的新阶段。
        相关合作内容包括：中航工业和国机集团共同发展八万吨模锻压机项目；中航工业将房地产业务全部划转保利集团，中核建设和中国一重在高温气冷堆主设备制造领域合作，兵器工业、兵器装备、中国国新对北方公司进行股权重组。
        国务院国资委主任肖亚庆在6日参加中央企业产业合作座谈会上表示，下一步，国资委政策将加码推动央企产业重组步伐，通过业务整合、资产重组、股权合作、资产置换、无偿划转、协议转让、战略联盟、联合开发等多途径，加快央企间产业重组合作整合。
        肖亚庆同时清晰地勾勒出国企改革兼并重组“路线图”：通过产业重组，在突破关键技术、掌握核心资源，打造知名品牌等方面，实现产业重组合作“一加一大于二”的效果。肖亚庆同时透露，目前部分央企在牵头技术创新战略联盟、设立创新投资基金、构建创新孵化平台等方面，取得了重大突破。据统计，央企牵头国家及地方技术创新联盟141个，50多家中央企业共发起和参与基金179只，构建面向社会的创新孵化平台57个，创业创新平台27个。
        “此次集中签约，意味着央企重组的重心开始向资本、项目、产业板块等内部要素转移。”中国企业研究院首席研究员李锦说，未来，央企间产业重组合作整合将被更快地推进，央企内部的各种要素将被再次优化。</p>
        </div>
        <div class="vscrollbar-x" :style="scrollXStyle"><!--style="width: 80px;transform: translate(53px, 0px);"-->
            <div class="vscroller" :style="scrollXInnerStyle"></div>
        </div>
    </div>
</template>

<script>
import mousewheel from 'jquery-mousewheel';
export default {
    data() {
        return {
            expanderStyle: {
                width: 700 + 'px',
                height: 320 + 'px'
            },
            scrollXInnerStyle: {
                width: 10 +'px',
                transform: 'translate(0px, 0px)'
            },
            scrollXStyle: {
                display: 'none'
            },
            pStyle:{
                transform: 'translate(0px, 0px)'
            }
        }
    },
    computed: {
        scrollXWidth() {
            //横向滚动条的宽度

        }
    },
    mounted() {
        let _this = this;
        const tmp = (event) => {
            let tableWidth = $(_this.$el).width();
            let expanderWidth = parseInt(_this.expanderStyle.width);
            let scrollXPercent = tableWidth / expanderWidth;
            if(scrollXPercent >= 1) {
                _this.scrollXStyle.display = 'none';
                return; //如果都隐藏了,则后面的逻辑没必要执行了
            }else {
                _this.scrollXStyle.display = 'block';
            }
            let width = tableWidth * scrollXPercent;
            _this.scrollXInnerStyle.width = width + 'px';

            let xTableMaxDistance = expanderWidth - tableWidth;//X轴内容能够移动的最大距离
            let xMaxDistance = tableWidth * (1 - scrollXPercent);//X轴能够移动的最大距离
            console.log(xMaxDistance);
            if(event) {
                //console.log(event.deltaX * event.deltaFactor);
                let translateX = this.scrollXInnerStyle.transform.match(/\d+/g)[0] - 0;
                let xTableDistance = translateX + event.deltaX * event.deltaFactor;
                let xDistance = translateX + event.deltaX * event.deltaFactor * (xMaxDistance / xTableMaxDistance);
                if(xTableDistance > xTableMaxDistance) {
                    xTableDistance = xTableMaxDistance;
                    xDistance = xMaxDistance;
                }else if(xTableDistance < 0) {
                    xTableDistance = 0;
                    xDistance = 0;
                }
                this.pStyle.transform = 'translate(' + -xTableDistance + 'px, 0px)';
                this.scrollXInnerStyle.transform = 'translate(' + xDistance + 'px, 0px)';
            }
        }

        tmp();

        $(window).resize(_.throttle(tmp, 100));

        $(this.$el).mousewheel(_.throttle(function(event) {
            tmp(event);
            return false;
        }, 100));
    }
}
</script>

<style lang="less" scoped>
    .my-table{
        background: green;
        overflow: hidden;
        width: 100%;
        height: 100%;
        .expander{
            background: skyblue;
            position: absolute;
            z-index: 1;
        }
        &:hover .vscrollbar-x, &:hover .vscrollbar-y{
            opacity: .9;
            background-color: hsla(0, 0, 93%, .8);
        }
    }
    .vscrollbar-x, .vscrollbar-y{
        position: absolute;
        height: .625rem;
        width: .625rem;
        background-color: hsla(0, 0, 93%, 0);
        opacity: 0;
        transition: opacity .2s,background-color .2s;
        user-select: none;
    }
    .vscroller{
        position: absolute;
    }
    .vscrollbar-x{
        left: 0;
        bottom: 0;
        width: 100%;
        .vscroller{
            height: .625rem;
            width: .625rem;
            border-radius: .625rem;
            background-color: #999;
        }
    }
</style>
