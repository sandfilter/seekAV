define(['jquery'], function($) {
    var TabCut = {
        bindEvent: function(curObj, index, className, sibling, callback) {
            curObj.addClass(className).siblings().removeClass(className);
            if (curObj.parent().siblings(sibling).length == 1) {
                curObj.parent().siblings(sibling).children().hide().eq(index).show();
            } else {
                curObj.parent().siblings(sibling).hide().eq(index).show();
            }
            callback && callback();
        },
        bindEvent02: function(curObj, index, className, sibling, callback) {
            curObj.addClass(className).siblings().removeClass(className);
            if (curObj.parent().siblings(sibling).length == 1) {
                curObj.parent().siblings(sibling).children().addClass('hide').eq(index).removeClass('hide');
            } else {
                curObj.parent().siblings(sibling).addClass('hide').eq(index).removeClass('hide');
            }
            callback && callback();
        },
        /**
         * 适用于直接显示隐藏
         * @param  {[type]} tabItem [description]
         * @param  {[type]} eve     [description]
         * @param  {[type]} cur     [description]
         * @param  {[type]} sibling [description]
         * @return {[type]}         [description]
         */
        cutOperate: function(tabItem, eve, cur, sibling, callback) {
            var self = this;
            eve == 'hover' ? tabItem.hover(function() {
                var index = $(this).index();
                self.bindEvent($(this), index, cur, sibling, callback);
            }) : tabItem.on(eve, function() {
                var index = $(this).index();
                self.bindEvent($(this), index, cur, sibling, callback);
            });
        },
        /**
         * 适用于通过移除hide来显示隐藏
         * @param  {[type]} tabItem [description]
         * @param  {[type]} eve     [description]
         * @param  {[type]} cur     [description]
         * @param  {[type]} sibling [description]
         * @return {[type]}         [description]
         */
        tabCutOperate: function(tabItem, eve, cur, sibling, callback) {
            var self = this;
            eve == 'hover' ? tabItem.hover(function() {
                var index = $(this).index();
                self.bindEvent02($(this), index, cur, sibling, callback);
            }) : tabItem.on(eve, function() {
                var index = $(this).index();
                self.bindEvent02($(this), index, cur, sibling, callback);
            });
        }
    };

    return TabCut;
});