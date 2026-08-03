---
name: admin-modal-style
description: 管理端弹窗样式统一规范
type: feedback
---

管理端弹窗样式统一规范

**规范**：
- 弹窗使用白底玻璃磨砂样式（CSS .modal + .modal-dialog）
- 详情弹窗：蓝色圆形头像（背景#1890ff）+ 姓名首字母
- 信息布局：grid 分栏 + strong 标签展示字段
- 会员类型用 tag 标签（如 tag-primary）
- 状态用 status 类（如 status-normal）
- 不使用紫色渐变或其他花哨装饰

**为什么**：
- 保持管理端所有页面弹窗风格一致
- 避免不同开发者使用不同样式造成视觉不一致

**如何应用**：
- 任何管理端页面的详情弹窗都遵循此规范
- 会员详情、用户详情等弹窗使用此样式模板
