---
name: update-prd
description: 修改会员端/管理端时同步更新对应PRD文件
type: feedback
---

每次对会员端或管理端进行修改时，**必须同步更新对应的 PRD 文件**。

## PRD 文件位置
- 会员端：`/Users/guolei/work/claude_work/会员_副本/原型/会员端prd.md`
- 管理端：`/Users/guolei/work/claude_work/会员_副本/原型/管理端prd.md`

## 更新时机
- 新增功能模块时，在 PRD 中补充新模块说明
- 修改现有页面/功能时，同步更新 PRD 中对应的描述
- 删除功能时，从 PRD 中移除相关说明
- UI/交互变更时，更新组件规范或流程说明

**Why:** PRD 是需求文档的唯一 source of truth，必须与实际实现保持一致，避免后期维护时文档与代码脱节。

**How to apply:** 每次收到用户对会员端或管理端的修改请求时，在完成代码修改后，同步更新对应 PRD 文件的相关章节。
