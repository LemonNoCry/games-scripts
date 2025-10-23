# 挖矿兵团（Mining Crew）助手

一个用于自动化 Mining Crew 游戏的用户脚本。

## 功能

- **自动升级**: 自动点击免费升级面板中的所有可用升级按钮
- **智能检测**: 只点击显示状态的升级按钮，避免无效操作
- **实时监控**: 每秒检查一次升级机会，确保不错过任何免费升级

## 安装

1. 安装用户脚本管理器（如 [Tampermonkey](https://www.tampermonkey.net/)）
2. 点击 [MiningCrewScript.usr.js](MiningCrewScript.usr.js) 安装脚本
3. 访问 [Mining Crew 游戏](https://gltyx.github.io/mining-crew/) 即可自动运行

## 使用说明

脚本安装后会自动运行，无需手动操作：

- 脚本会自动检测页面上的免费升级面板
- 每秒扫描一次所有可见的升级按钮
- 自动点击所有可用的免费升级
- 在控制台输出升级日志，方便调试

## 工作原理

脚本通过以下方式工作：

1. **目标检测**: 查找页面中的 `#freeUpgradesPanel` 元素
2. **按钮筛选**: 获取所有 `.upgrade-button-outer` 类的按钮
3. **可见性检查**: 使用 `getComputedStyle` 确认按钮处于显示状态
4. **自动点击**: 对所有可见按钮执行点击操作
5. **循环执行**: 每1秒重复一次检查流程

## 兼容性

- ✅ 支持 Chrome + Tampermonkey
- ✅ 支持 Firefox + Greasemonkey
- ✅ 支持 Edge + Tampermonkey
- ✅ 适配游戏版本：所有版本

## 注意事项

- 脚本仅在 `https://gltyx.github.io/mining-crew/*` 域名下运行
- 不会影响游戏的正常运行机制
- 建议在游戏加载完成后再启用脚本
- 如遇问题可查看浏览器控制台的日志输出

## 更新日志

### v1.0.0

- 初始版本发布
- 实现自动点击免费升级功能
- 添加控制台日志输出

## 许可证

MIT License - 详见 [LICENSE](../../LICENSE) 文件

## 作者

- **LemonNoCry**

## 贡献

欢迎提交 Issue 和 Pull Request！
