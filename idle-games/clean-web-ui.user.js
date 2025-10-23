// ==UserScript==
// @name         移除、精简UI、
// @match        *://*/*
// @run-at       document-end
// @namespace    LemonNoCry
// @license      MIT
// @version      1.0.0
// @description  移除游戏中的广告和多余UI元素，提升游戏体验。
// @match        https://gltyx.github.io/*
// @match        https://cosmic-collection.g8hh.com.cn/*
// @match        https://kuzzigames.com/cosmic_collection/*
// ==/UserScript==

(function() {
  'use strict';
  const timer = setInterval(() => {
    const el = document.querySelector('.main-im');
    if (el) {
      el.remove();
      clearInterval(timer);
    }
  }, 500);
})();
