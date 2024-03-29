(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ponconjs = require('../../src/poncon')
const poncon = new ponconjs.default()
poncon.setPageList(['home', 'about'])
poncon.start()
},{"../../src/poncon":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
/**
 * @author 欧阳鹏
 * https://apee.top
 */
var Poncon = /** @class */ (function () {
    function Poncon() {
        this.pages = {};
        this.pageNames = []; // 页面列表
    }
    /**
     * 切换页面显示
     * @param target 页面标识
     */
    Poncon.prototype.changeView = function (target) {
        if (!target) {
            return;
        }
        document.querySelectorAll('.poncon-page').forEach(function (dom) {
            dom.style.display = 'none';
        });
        var dom = document.querySelector(".poncon-".concat(target));
        dom.style.display = '';
    };
    /**
     * 设置页面名称列表
     * @param pageNames 页面名称列表
     */
    Poncon.prototype.setPageList = function (pageNames) {
        var _this_1 = this;
        pageNames.forEach(function (target) {
            var dom = document.querySelector(".poncon-".concat(target));
            _this_1.pages[target] = {
                dom: dom,
                event: (function () { })
            };
        });
        this.pageNames = pageNames;
    };
    /**
     * 配置页面
     * @param target 页面标识
     * @param func 页面载入事件
     */
    Poncon.prototype.setPage = function (target, func) {
        if (!target) {
            return;
        }
        var dom = document.querySelector(".poncon-".concat(target));
        this.pages[target] = {
            dom: dom,
            event: func || (function () { })
        };
    };
    /**
     * 开启路由系统
     */
    Poncon.prototype.start = function () {
        var _this = this;
        window.addEventListener('hashchange', function (event) {
            var hash = new URL(event.newURL).hash;
            _this.loadTarget(hash);
        });
        this.loadTarget();
    };
    /**
     * 切换页面并执行页面事件
     * @param hash 页面标识
     */
    Poncon.prototype.loadTarget = function (hash) {
        var target = this.getTarget(hash);
        var dom = this.getDom(target);
        var args = this.getArgs(hash);
        this.changeView(target);
        this.pages[target].event(target, dom, args);
    };
    /**
     * 获取页面参数列表
     * @param hash 网址Hash
     * @returns 页面参数列表
     */
    Poncon.prototype.getArgs = function (hash) {
        var strs = (hash || location.hash).split('/');
        if (strs.length < 3) {
            return [];
        }
        return strs.slice(2);
    };
    /**
     * 获取当前页面标识, 支持自动矫正
     * @param hash 网址hash
     * @returns 页面标识
     */
    Poncon.prototype.getTarget = function (hash) {
        var strs = (hash || location.hash).split('/');
        var target = strs[1] || '';
        // target不合法或者不在白名单
        if (target.search(/^\w+$/) != 0 || this.pageNames.indexOf(target) == -1) {
            history.replaceState({}, '', "".concat(location.pathname));
            return 'home';
        }
        return target;
    };
    /**
     * 获取页面DOM
     * @param target 页面标识
     * @returns 页面DOM元素
     */
    Poncon.prototype.getDom = function (target) {
        return document.querySelector(".poncon-".concat(target));
    };
    return Poncon;
}());
exports["default"] = Poncon;

},{}]},{},[1]);
