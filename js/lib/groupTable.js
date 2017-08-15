export default {
    groupTable(el, opt) {
        /*
            思路:扫描一遍表格,不断修改groupTd的高度值
        */
        this.tdHeight = opt.tableDefaultProps.tdHeight;
        this.opt = opt;
        this.scanTable(el);
        this.addEvent(el);
    },

    scanTable(el) {
        //如果当前isGroup等于1,则去取同一列的上一个元素,如果上一个元素为空或者与上一个元素不能同为一组,
        //则复制当前元素生成新元素,并增加一个groupTd类名,并将新元素插入当前位置;
        //如果与上一个元素能同组,则判断与上上一个元素能否同级,至到不能同组或为空为止,得到最后一个元素,并在其位
        //置搜索到带groupTd类名且columnName值相等的DOM,修改其style相应值(height,lineHeight)
        let _this = this;
        let $table = $(el);
        $table.find('.record .td').each(function() {
            let $this = $(this);
            let displayField = JSON.parse($this.attr('data-field'));
            if(displayField.isGroup == 1) {
                if($this.text()=='少博好人') {
                    console.log(8888);
                }
                let $colPrevTd = _this.getColPrevTd($this);
                if($colPrevTd) {
                    //如果有上一个元素,再判断是否与当前元素能够同组
                    let canGroup = _this.canGroup($this, $colPrevTd);
                    if(canGroup) {
                        let $groupTd = _this.getGroupTd($this.parents('.record'), $this.attr('columnname'));
                        console.log($groupTd.length);
                        let height = $groupTd.height() + _this.tdHeight - 1;
                        $groupTd.css({
                            height: height + 'px',
                            lineHeight: height + 'px'
                        });
                    }else {
                        let $clone = $this.clone();
                        $this.parent().append($clone.addClass('groupTd'));
                    }
                }else {
                    let $clone = $this.clone();
                    $this.parent().append($clone.addClass('groupTd'));
                }
            }
        });
    },

    getColPrevTd($td) {
        let $prevTr = $td.parents('.record').prev('.record');
        if(!$prevTr.length){
            return;
        }
        let columnname = $td.attr('columnname');
        let $colPrevTd = $prevTr.find('.td[columnname="'+columnname+'"]:not(".groupTd")');
        if($colPrevTd.length) {
            return $colPrevTd;
        }
    },

    getRowPrevTd($td) {
        let $tds = $td.parents('.record').find('.td:not(".groupTd")');
        let index = $tds.index($td);
        index--;
        if(index < 0) {
            return;
        }
        let $rowPrevTd = $tds.eq(index);
        let displayField = JSON.parse($rowPrevTd.attr('data-field'));
        if(displayField.isGroup == 1) {
            return $rowPrevTd;
        }
    },

    hasGroupTd($td) {
        let columnname = $td.attr('columnname');
        let $groupTd = $td.parent().find('.groupTd[columnname="'+columnname+'"]');
        return $groupTd.length == 1;
    },

    getGroupTd($record, columnname) {
        //得到当前td所在列对应的groupTd,肯定能找到
        let $groupTd = $record.find('.groupTd[columnname="'+columnname+'"]');
        if($groupTd.length) {
            return $groupTd;
        }else if(!$record) {
            console.log('不应该找不到,理论上程序不会走这里...');
        }else {
            return this.getGroupTd($record.prev('.record'), columnname);
        }
    },

    canGroup($td, $colPrevTd) {
        //判断两个元素能否合并,首先得到同一行的上一个isGroup为1的元素,如果没有,则直接比较两个元素内容,如果相同则可以合并;
        //如果有,则分别得到isGroup为1的上一个元素,再分别去当前元素查找类名为groupTd的同columnname元素A和prevA,
        //如果A存在,则返回false,否则继续判断内容是否相同.
        let $td_prev = this.getRowPrevTd($td);
        if($td_prev) {
            let hasGroupTd = this.hasGroupTd($td_prev);
            if(hasGroupTd) {
                return false;
            }else {
                return $td.text() == $colPrevTd.text();
            }
        }else {//如果没有,则简单比较
            return $td.text() == $colPrevTd.text();
        }
    },
    addEvent(el) {
        let _this = this;
        $(el).off('mouseenter','.groupTd');
        $(el).on('mouseenter','.groupTd', function() {
            $(this).addClass('mouseenter');
        });
        $(el).off('mouseleave','.groupTd');
        $(el).on('mouseleave','.groupTd', function() {
            $(this).removeClass('mouseenter');
        });

        $(el).off('click','.groupTd');
        $(el).on('click','.groupTd', function() {
            let $this = $(this);
            let key = $this.attr('columnname');
            let td = JSON.parse($this.attr('data-td'));
            let tr = JSON.parse($this.attr('data-tr'));
            let displayFields = _this.opt.getDisplayFields();
            let displayField = _this.opt.tool.getDisplayFieldByKey(displayFields, key);
            _this.opt.tableDefaultProps.trClick(td, displayField, tr);
        });
    }
}
