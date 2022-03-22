// ==UserScript==
// @name         简百度【百度系网站美化去广告】
// @namespace    lite-baidu
// @version      1.0.0
// @description  百度系网站去除广告和冗余元素，页面精简美化，强迫症患者必备。
// @author       oranhext
// @homepage     https://github.com/oranhext/lite-baidu
// @match        *://*.baidu.com/*
// @icon         https://cdn.jsdelivr.net/gh/oranhext/static-content-hosting@main/images/projects/lite-baidu/lite-baidu-logo.png
// @license      Apache-2.0
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    var time = 500;

    if (location.href.indexOf("www.baidu.com") > -1) {
        home_lite();
    }

    if (location.href.indexOf("baike.baidu.com") > -1) {
        baike_lite();
    }

    if (location.href.indexOf("zhidao.baidu.com") > -1) {
        zhidao_lite();
    }

    if (location.href.indexOf("jingyan.baidu.com") > -1) {
        jingyan_lite();
    }

    if (location.href.indexOf("map.baidu.com") > -1) {
        map_lite();
    }

    if (location.href.indexOf("tieba.baidu.com") > -1) {
        tieba_lite();
    }

    if (location.href.indexOf("pan.baidu.com") > -1) {
        pan_lite();
    }

    if (location.href.indexOf("photo.baidu.com") > -1) {
        photo_lite();
    }

    if (location.href.indexOf("wenku.baidu.com") > -1) {
        wenku_lite();
    }

    // 百度首页
    function home_lite() {
        var node_id = ["s-top-left", "bottom_layer", "s-hotsearch-wrapper", "hotsearch-content-wrapper", "s_side_wrapper"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var home_id = document.getElementById(node_id[i]);
                if (home_id == null) continue;
                else home_id.remove();
            }
        }, time);

        var home_css1 = document.getElementsByClassName("s_form_nologin");
        home_css1[0].setAttribute("style", "height:145%;");
    }

    // 百度百科
    function baike_lite() {
        var node_id = ["J-declare-wrap", "side-share", "side_box_unionAd", "tashuo_right"];
        var node_class = ["right-ad", "wgt-navbar", "posterFlag excellent-icon", "lemmaWgt-promotion-vbaike", "lemmaWgt-promotion-slide",
            "help", "topbar cmn-clearfix", "side-box lemma-statistics", "after-content", "wgt-footer-main",
            "navbar-wrapper", "tool-buttons",
            "user-info", "j-discussion-link", "J-add-video", "top-share-icon", "topA", "J-secondsknow-large-container"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var baike_id = document.getElementById(node_id[i]);
                if (baike_id == null) continue;
                else baike_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var baike_class = document.getElementsByClassName(node_class[j]);
                if (baike_class.length == 0) continue;
                else baike_class[0].remove();
            }
        }, time);

        var baike_css1 = document.getElementsByClassName("layout cmn-clearfix");
        baike_css1[0].setAttribute("style", "display:flex;justify-content:center;align-items:center;");
        var baike_css2 = document.getElementsByClassName("content-wrapper");
        baike_css2[0].setAttribute("style", "margin:20px 0 30px 0;");
    }

    // 百度知道
    function zhidao_lite() {
        var node_id = ["userbar", "qbleftdown-container", "container", "ask-info"];
        var node_class = ["channel grid", "nav-menu-container", "grid-r qb-side", "task-list-button", "wgt-footer-new",
            "question-number-text-chain", "wgt-ads answerlist", "bottom-dashed-line", "wgt-bottom-union mod-shadow last line wgt-union-bottom",
            "bottom-dashed-line", "aria-div", "jump-top-box"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var zhidao_id = document.getElementById(node_id[i]);
                if (zhidao_id == null) continue;
                else zhidao_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var zhidao_class = document.getElementsByClassName(node_class[j]);
                if (zhidao_class.length == 0) continue;
                else zhidao_class[0].remove();
            }
        }, time);

        var baike_css1 = document.getElementById("qb-content");
        baike_css1.setAttribute("style", "border-right:none;padding:0 0 35px 0;");
        var baike_css2 = document.getElementsByClassName("line qb-section");
        baike_css2[0].setAttribute("style", "display:flex;justify-content:center;align-items:center;padding-top:0;");
        var baike_css3 = document.getElementsByClassName("search-cont clearfix");
        baike_css3[0].setAttribute("style", "display:flex;justify-content:center;align-items:center;");
        var baike_css4 = document.getElementsByClassName("wgt-header-title-content");
        baike_css4[0].setAttribute("style", "display:flex;justify-content:center;align-items:center;");
    }

    // 百度经验
    function jingyan_lite() {
        var node_id = ["wgt-like", "bottom-pic-ads-wrap", "bottom-ads-container", "aside", "w-favor", "w-share", "wgt-barrier-free"];
        var node_class = ["channel", "userbar-ul", "nav", "footer", "task-panel-entrance", "f12 origin-notice", "prompt", "weixin-wrap-wgt",
            "bdshare"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var jingyan_id = document.getElementById(node_id[i]);
                if (jingyan_id == null) continue;
                else jingyan_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var jingyan_class = document.getElementsByClassName(node_class[j]);
                if (jingyan_class.length == 0) continue;
                else jingyan_class[0].remove();
            }
        }, time);

        var baike_css1 = document.getElementsByClassName("article-header");
        baike_css1[0].setAttribute("style", "height:85px;");
        var baike_css2 = document.getElementById("search-box");
        baike_css2.setAttribute("style", "display:flex;justify-content:center;align-items:center;");
        var baike_css3 = document.getElementsByClassName("main-content-bottom");
        baike_css3[0].setAttribute("style", "margin:30px 0 40px 0;");
    }

    // 百度地图
    function map_lite() {
        var node_id = ["ui3_springfestival_data", "message-center", "message-panel", "ui3_springfestival_data",
            "renderModeSwitch"];
        var node_class = ["leadDownloadCard", "BMap_cpyCtrl BMap_noprint anchorBL"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var map_id = document.getElementById(node_id[i]);
                if (map_id == null) continue;
                else map_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var map_class = document.getElementsByClassName(node_class[j]);
                if (map_class.length == 0) continue;
                else map_class[0].remove();
            }
        }, time);
    }

    // 百度贴吧
    function tieba_lite() {
        var node_id = ["footer", "mediago-tb-pb-list-aside", "tieba-notice", "com_userbar", "mediago-tb-first-floor",
            "mediago-tb-pb-list-8", "mediago-tb-pb-list-14", "mediago-frs-aside", "mediago-tb-frs-list-8",
            "mediago-tb-frs-list-14"];
        var node_class = ["hover_btn", "close_btn", "fengchao-wrap", "head_middle", "celebrity", "senior-search-link",
            "gift-goin", "search_nav", "region_bright app_download_box", "topic_list_box",
            "tbui_aside_fbar_button tbui_fbar_down", "tbui_aside_fbar_button tbui_fbar_auxiliaryCare",
            "aside_region app_download_box", "tieba-login-background", "tieba-login-wrapper"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var tieba_id = document.getElementById(node_id[i]);
                if (tieba_id == null) continue;
                else tieba_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var tieba_class = document.getElementsByClassName(node_class[j]);
                if (tieba_class.length == 0) continue;
                else tieba_class[0].remove();
            }
        }, time);
    }

    // 百度网盘
    function pan_lite() {
        var node_id = ["ft", "web-header-text-s-2", "footer"];
        var node_class = ["app-user-vip-center", "module-device-box", "module-device-mask", "wpGuideDialog",
            "module-canvas", "btn-img-tips", "phone-banner", "video-title-right-open-mobile",
            "privilege-box", "gOIbzPb", "app-download", "newIcon", "wp-side-options", "ssbceg62",
            "module-operation-content", "find-light-icon", "u-dialog__wrapper nd-dialog-common-header nd-dialog-workspace--bg",
            "v-modal", "web-header-ad-item wp-disk-header__right-item", "wp-disk-header__right-item company-cert",
            "wp-header-user__tooltip nd-header-user__tooltip-display u-tooltip", "wp-aside-nav-bubble wp-aside-nav__main-item",
            "wp-header-cert__ee-cert-tilte", "yike-entrance", "nd-operate-guidance", "wp-disk-header__vip-btn-wrapper"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var pan_id = document.getElementById(node_id[i]);
                if (pan_id == null) continue;
                else pan_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var pan_class = document.getElementsByClassName(node_class[j]);
                if (pan_class.length == 0) continue;
                else pan_class[0].remove();
            }
        }, time);
    }

    // 一刻相册
    function photo_lite() {
        var node_id = [];
        var node_class = ["vip", "feedback", "yk-side__footer", "yk-header__link"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var photo_id = document.getElementById(node_id[i]);
                if (photo_id == null) continue;
                else photo_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var photo_class = document.getElementsByClassName(node_class[j]);
                if (photo_class.length == 0) continue;
                else photo_class[0].remove();
            }
        }, time);
    }

    // 百度文库
    function wenku_lite() {
        var node_id = ["color-plate", "page-footer", "footer-wrapper-id"];
        var node_class = ["doc-price-voucher-wrap", "app-btn-point", "pay-layer1509-wrapper", "red-spot",
            "hx-bottom-wrapper", "hx-recom-wrapper", "hx-warp", "hx-wrapper", "hx-right-bottom",
            "ex-wrapper", "summary", "toolbar-core-btn", "vip-card-wrap", "vip-pop-wrap",
            "convert-btn-point", "fold-page-tip", "full-screen", "right-channel-wrap",
            "experience-card-wrap", "client-download-wrap", "vip-activity-wrap-new", "red-point",
            "comp-vip-pop inner-vip", "search-tab-item red-dot", "vip-privilege-card-wrap", "assist-control-wrapper no-full-screen",
            "qr-wrapper no-full-screen", "bottom-pop-wrap", "woniu-guide-card"];

        setInterval(function () {
            for (var i = node_id.length - 1; i >= 0; i--) {
                var wenku_id = document.getElementById(node_id[i]);
                if (wenku_id == null) continue;
                else wenku_id.remove();
            }

            for (var j = node_class.length - 1; j >= 0; j--) {
                var wenku_class = document.getElementsByClassName(node_class[j]);
                if (wenku_class.length == 0) continue;
                else wenku_class[0].remove();
            }
        }, time);
    }
}
)();