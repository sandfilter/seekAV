require.config({
    urlArgs: "v=" + (new Date()).getTime(), //上线时请去掉
    paths: {
        jquery: '../common/js/jquery-1.9.1.min',
        slide: '../common/js/util/slide',
        searchDrop: '../common/js/util/searchDrop',
        tabCut: '../common/js/util/tab-cut',
        lazyLoad: '../common/js/libs/lazyLoad',
        share: '../common/js/libs/jquery.share.min',
        swt: '../common/js/libs/swt',
        fly: '../common/js/libs/fly'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        'lazyLoad': ['jquery'],
        'share': ['jquery'],
        'fly': ['jquery']
    }
});
require(['jquery'], function() {
    __funcList && __funcList.length && $.map(__funcList, function(t) {
        "function" === typeof t && t();
    });
    // 头部搜索
    $('header .search-box').on('click', '.btn-search', function(e) {
        var txt = $(this).prev('.inp-search');
        if (txt.val() == '') {
            e.preventDefault();
            txt.addClass('error');
            setTimeout(function() {
                txt.removeClass('error');
            }, 1200);
        } else {
            $(this).attr('href', '/#/search?keywords=' + txt.val());
        }
    });

    // 频道页头部导航选中
    !$('.page-channel').length || (function() {
        var nav = $('.head-bg .nav-list').children();
        if ($('.page-channel-brand').length) {
            nav.eq(0).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-channel-patent').length) {
            nav.eq(2).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-channel-copyright').length) {
            nav.eq(1).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-channel-international').length) {
            nav.eq(3).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-channel-design').length) {
            nav.eq(4).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-channel-law').length) {
            nav.eq(5).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-channel-enterprise').length) {
            nav.eq(6).addClass('cur').siblings('li').removeClass('cur');
        }
    })();

    // 关于我们头部导航选中
    !$('.page-about').length || (function() {
        var nav = $('.nav-about ul').children();
        if ($('.page-about-index').length) {
            nav.eq(1).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-about-events').length) {
            nav.eq(2).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-about-team').length) {
            nav.eq(3).addClass('cur').siblings('li').removeClass('cur');
        } else if ($('.page-about-org').length) {
            nav.eq(4).addClass('cur').siblings('li').removeClass('cur');
        }
    })();

    // 返回顶部
    $('.fixed-right .icon-top, .about-float .top').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    // 右侧浮动 二维码显示
    $('.fixed-right .codeShow').hover(function() {
        $(this).find('.codeLayer').stop().animate({ width: '160', left: '-152' }, 300);
    }, function() {
        $(this).find('.codeLayer').stop().animate({ width: '0', left: 0 }, 300);
    });
});

require(['lazyLoad'], function(l) {
    // 图片懒加载
    $(".bg img").scrollLoading();
});

require(['jquery', 'swt'], function($, s) {
    // 商务通
    $('a.advisory, .fixed-right .icon-kefu, .openzxFn, .googs-option-box .zx-btn').on('click', function() {
        openzx();
    });
});