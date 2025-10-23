// ==UserScript==
// @name         挖矿兵团（Mining Crew）-助手
// @description  自动点击升级按钮
// @namespace    LemonNoCry
// @author       LemonNoCry
// @license      MIT
// @version      1.0.0
// @match        https://gltyx.github.io/mining-crew/*
// ==/UserScript==

(function () {
    'use strict';

    setInterval(() => {
        const panel = document.querySelector('#freeUpgradesPanel');
        if (!panel) return;

        // 在 panel 内找出所有显示的升级按钮
        const buttons = panel.querySelectorAll('.upgrade-button-outer');
        buttons.forEach(btn => {
            const style = getComputedStyle(btn);
            if (style.display !== 'none') {
                btn.click();
                console.log('自动单击升级:', btn.id);
            }
        });
    }, 1000);
})();
