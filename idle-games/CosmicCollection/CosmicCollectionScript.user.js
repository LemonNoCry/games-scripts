// ==UserScript==
// @name         宇宙收集放置-助手
// @name:en     Cosmic Idle Helper
// @namespace    LemonNoCry
// @license      MIT
// @version      1.3
// @description 自动点击黑洞、购卡、时钟，解放双手！
// @description:en Auto click black hole, buy cards, and time crunch. Save your hands!
// @author       LemonNoCry
// @match        https://gltyx.github.io/*
// @match        https://cosmic-collection.g8hh.com.cn/*
// @match        https://kuzzigames.com/cosmic_collection/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let holeEnabled = true;     // 控制打洞
    let buyEnabled = true;      // 控制购卡
    let clockEnabled = true;    // 控制时钟

    /**
     * 创建用于自动化各种游戏功能的切换按钮，并将它们添加到导航栏中。
     * 
     * 此函数创建三个切换按钮：
     * - 自动打洞：切换 holeEnabled 标志
     * - 自动购卡：切换 buyEnabled 标志
     * - 自动时钟操作：切换 clockEnabled 标志
     * 
     * 每个按钮通过对勾（启用）或叉号（禁用）直观地显示其当前状态，
     * 并在控制台记录状态变化。这些按钮会被添加到 #tabs 容器中。
     * 
     * @returns {void} 不返回任何内容
     * @note 如果找不到 #tabs 元素，会在控制台记录警告而不会抛出错误。
     */
    function createToggleButtons() {
        const nav = document.querySelector("#tabs");
        if (!nav) {
            console.warn("未找到 #tabs 容器，按钮未创建");
            return;
        }

        // 打洞按钮
        const holeBtn = document.createElement("button");
        holeBtn.id = "auto-hole-btn";
        holeBtn.className = "tab-btn";
        holeBtn.innerText = "自动打洞✅";
        holeBtn.addEventListener("click", () => {
            holeEnabled = !holeEnabled;
            holeBtn.innerText = holeEnabled ? "自动打洞✅" : "自动打洞❌";
            console.log(holeEnabled ? "✅ 自动打洞已启用" : "⏸ 自动打洞已禁用");
        });
        nav.appendChild(holeBtn);

        // 购卡按钮
        const buyBtn = document.createElement("button");
        buyBtn.id = "auto-buy-btn";
        buyBtn.className = "tab-btn";
        buyBtn.innerText = "自动购卡✅";
        buyBtn.addEventListener("click", () => {
            buyEnabled = !buyEnabled;
            buyBtn.innerText = buyEnabled ? "自动购卡✅" : "自动购卡❌";
            console.log(buyEnabled ? "✅ 自动购卡已启用" : "⏸ 自动购卡已禁用");
        });
        nav.appendChild(buyBtn);

        // 时钟按钮
        const clockBtn = document.createElement("button");
        clockBtn.id = "auto-clock-btn";
        clockBtn.className = "tab-btn";
        clockBtn.innerText = "自动时钟✅";
        clockBtn.addEventListener("click", () => {
            clockEnabled = !clockEnabled;
            clockBtn.innerText = clockEnabled ? "自动时钟✅" : "自动时钟❌";
            console.log(clockEnabled ? "✅ 自动时钟已启用" : "⏸ 自动时钟已禁用");
        });
        nav.appendChild(clockBtn);
    }

    // ===== 内部函数：触发卡片 mouseenter =====
    function triggerCardMouseEnter() {
        const cards = document.querySelectorAll('.draw-area .card-outer');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const mouseEnterEvent = new MouseEvent('mouseenter', {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: rect.left + rect.width / 2,
                clientY: rect.top + rect.height / 2
            });
            card.dispatchEvent(mouseEnterEvent);
        });
    }

    // ===== 判断按钮是否可见 =====
    function isButtonVisible(btn) {
        if (!btn) return false;
        const style = window.getComputedStyle(btn);
        return (
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            style.opacity !== "0" &&
            !btn.hidden
        );
    }

    // ===== 点击批量购买按钮 =====
    function tryClickBulkBuy() {
        const btn = document.getElementById("merchant-bulkbuy-btn");
        if (btn && isButtonVisible(btn)) {
            btn.click();
            console.log("✅ 批量购买按钮点击成功");
        }
    }

    // ===== 点击单卡购买按钮 =====
    function tryClickSingleBuys() {
        const btns = document.querySelectorAll(".offer-buy-btn:not(.unaffordable)");
        btns.forEach(btn => {
            if (isButtonVisible(btn)) {
                btn.click();
                console.log("🃏 单卡购买按钮点击成功");
            }
        });
    }

    // ===== 点击打洞按钮 + 悬停卡片 =====
    function tryClickHole() {
        const btn = document.getElementById("hole-button");
        if (btn && isButtonVisible(btn)) {
            btn.click();
            console.log("🔨 打洞按钮点击成功");
            triggerCardMouseEnter();
        }
    }

    // ===== 点击时钟按钮 =====
    function tryClickClock() {
        const btn = document.getElementById("time-crunch-button");
        if (btn && isButtonVisible(btn)) {
            const ev = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
            btn.dispatchEvent(ev);
            console.log("⏰ 时钟按钮点击成功");
        }
    }

    // ===== 主循环 =====
    function autoClickManager() {
        // 每秒尝试：打洞 + 批量购卡 + 时钟
        setInterval(() => {
            if (holeEnabled) tryClickHole();
            if (buyEnabled) tryClickBulkBuy();
            if (clockEnabled) tryClickClock();
        }, 1000);

        // 单卡购卡（2s 一次）
        setInterval(() => {
            if (buyEnabled) tryClickSingleBuys();
        }, 2000);
    }

    // 启动
    createToggleButtons();
    autoClickManager();
    console.log("🚀 自动购卡 / 打洞 / 时钟 脚本已启动（按钮集成到 tab 导航栏）");
})();
