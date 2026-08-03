---
name: membership-management-system
description: 中国农学会会员管理系统，包含会员端和管理端
type: project
originSessionId: 9b0a5c33-da58-43f4-9933-59b877e6afc9
---
## 项目概述

中国农学会会员管理系统，分为**会员端**和**管理端**两部分。

## 目录结构

### 管理端 (`/Users/guolei/work/claude_work/会员_副本/原型/管理端/`)
- `index.html` - 数据看板首页
- `system/` - 系统管理（角色、字典、管理员、日志、意见反馈、常见问题）
- `member/` - 会员管理（类型、标签、证书、审核、会员列表）
- `organization/` - 组织机构（类型、列表、任职）
- `user/` - 用户管理
- `order/` - 订单管理
- `message/` - 消息中心（短信、邮件、站内信）

### 会员端 (`/Users/guolei/work/claude_work/会员_副本/原型/会员端/`)
- `personal-center.html` - 个人中心首页
- `personal-info.html` - 会员信息
- `payment.html` - 缴费订单
- `messages.html` - 我的消息
- `growth-trajectory.html` - 成长轨迹
- `data-stats.html` - 数说学会
- `account-settings.html` - 账号设置（含意见反馈）
- `faq.html` - 常见问题
- `register-*.html` - 会员申请流程页

## 已完成的主要功能

### 管理端
1. **开关组件** - 列表页状态"启用/禁用"改为开关模式（绿色#52c41a启用）
2. **权重字段** - 会员类型、组织类型、机构列表、机构任职、个人/单位会员列表增加权重字段
3. **开启初审** - 会员类型管理增加初审开关配置
4. **申请表模板** - 会员类型操作列增加"申请表模板"按钮，支持上传模板文件
5. **意见反馈** - 新增意见反馈管理页面（system/feedback.html）
6. **常见问题** - 新增常见问题管理页面（system/faq.html）

### 会员端
1. **个人会员申请Step5** - 新增register-personal-step5.html，需下载模板、上传填写后的文件、确认提交
2. **单位会员申请Step4** - 修改register-company-step4.html，增加模板下载和盖章文件上传
3. **意见反馈** - 账号设置页面增加反馈功能，支持"学会建议"和"系统建议"两种类型
4. **常见问题** - 新增faq.html页面，从个人中心侧边栏入口访问

## 技术特点
- 纯HTML/CSS/JS，无框架依赖
- 开关组件：CSS实现的checkbox toggle，绿色(#52c41a)启用态
- 多步骤表单：使用localStorage持久化状态
- 弹窗上传：模态框+文件上传交互
- Element Plus风格的管理界面（管理端）

## 工作习惯
- 修改前必须先列出计划，等待用户确认后再执行
