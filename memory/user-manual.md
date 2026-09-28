---
name: user-manual
description: 管理端/会员端用户操作手册任务：结构约定、进度、资料来源，及原型项目结构与既有记忆汇总（免重复读取）
type: project
---

# 用户操作手册（管理端 + 会员端）

## 任务背景
- **管理端手册**：基于 `原型/管理端PRD合并文档.md`（约6400行）和 admin/ 原型页面，为管理端编写面向操作人员的使用手册。
- **会员端手册**：基于 `原型/会员端完整PRD.md`（约3586行，2026-09-09 已从 user/ 移至 原型/ 根目录）和 user/ 原型页面，为会员端编写面向会员的使用手册。

## 文档位置
- **管理端手册**：`原型/管理端用户操作手册.md`（约1855行，已完成）
- **会员端手册**：`原型/会员端用户操作手册.md`（约1260行，已完成）
- **风格参考**：`原型/中台用户操作手册.md`（用户指定的风格模板）
- **用户要求**：生成的文档统一放到 `/Users/guolei/work/claude_work/会员_副本/原型/` 目录下

## 管理端手册结构（全书9章 + 附录，2026-09-09 全部完成）
1. 登录系统与数据看板（登录、数据看板；素材来自 login.html / index.html，PRD无对应章节）
2. 系统管理（角色、字典、管理员、操作日志、登录日志、意见反馈、常见问题）
3. 用户管理（用户列表、用户分组、分组用户、会员人才库）
4. 会员角色（会员类型、个人会员字段配置、会员标签、新增会员、编号规则、会员证书）
5. 个人会员（会员审核、批量导入审核、现任会员、黑名单、到期会员）
6. 组织机构（组织类型、机构列表、机构任职、任职人员）
7. 单位会员（会员审核、现任会员、已退会）
8. 订单管理（单节：查询/导出/详情/确认缴费/取消/发票）
9. 消息中心（短信/邮件/站内信：模板管理、发送审核、发送记录、邮箱配置仅邮件有）
- 附录A 公共校验与异常提示（A.1通用列表操作约定、A.2公共校验规则、A.3常见提示信息一览表、A.4权限说明）

## 会员端手册结构（全书6章 + 附录，2026-09-09 完成）
1. 登录与个人中心（1.1登录[素材来自 login.html：密码/验证码/微信快捷登录+滑块验证]、1.2个人中心、1.3切换身份、1.4任职身份）
2. 个人会员申请（2.1流程总览、2.2选择类型[知情书弹窗3秒倒计时]、2.3基本信息、2.4其他信息、2.5确认提交、2.6审核进度与撤销、2.7驳回后重新提交）
3. 个人会员服务（3.1会员信息[会员证/类型变更/续期]、3.2信息变更、3.3缴费订单[支付/开票/发票]、3.4我的消息、3.5消息详情与回复、3.6成长轨迹）
4. 单位会员申请（4.1～4.7，与第2章同构：类型/单位信息/联系人/确认提交/审核进度/驳回重提）
5. 单位会员服务（5.1单位主页[含变更联系人]、5.2单位信息、5.3资料编辑、5.4联系人管理、5.5缴费订单[对公转账为主]、5.6站内通知）
6. 公共功能（6.1常见问题、6.2意见反馈、6.3反馈历史、6.4会员风采[游客可访问，16条/页]）
- 附录A 状态说明与常见提示（A.1申请/会员状态、A.2订单/发票状态、A.3常见提示一览16条、A.4获取帮助）
- 会员端操作入口写法：顶部导航 / 侧边菜单 / 个人中心快捷操作 / 右上角头像下拉菜单（无左侧菜单概念，与管理端不同）

## 每个功能小节的固定写作结构（参照中台用户操作手册，用户确认的改版风格）
1. **功能说明** — 1-2句话说明功能用途
2. **操作入口** — 一行入口路径
3. **操作步骤** — 按任务分组（加粗小标题如 **新增角色**），编号步骤；按钮名加粗（**保存**）；多分支用嵌套列表
4. **注意事项** — 短条目，PRD业务规则转为用户视角提醒
- **禁止**：不写"界面说明"字段表格、字段类型、控件类型等PRD式内容（用户反馈第一版"更像需求文档"）；**不加任何截图占位**（用户明确不要"【截图：xx】"文案及位置）；表格仅允许出现在附录
- **保留**：Toast 提示文案、附件/字数限制等用户可感知信息（如站内信回复附件最多5个单个10MB、反馈500字、营业执照5MB、会员风采16条/页）

## 进度（截至2026-09-09）
- [x] 管理端手册：全书完成（第一版旧风格已废弃；第二版样例确认后按新风格重写全部章节）
- [x] 会员端手册：全书完成（沿用管理端已确认的写作风格，直接生成全书；目录与正文核对一致，无截图占位、无字段表格、无连续空行）
- 后续如需修改：直接编辑 `原型/管理端用户操作手册.md` / `原型/会员端用户操作手册.md`

---

# 原型项目结构与既有记忆汇总

## 项目概述（源自 project.md）
中国农学会会员管理系统，分为**管理端**（admin/）和**会员端**（user/）两部分。纯 HTML/CSS/JS，无框架依赖；管理端为 Element Plus 风格界面（静态原型，非真实 Vue）；开关组件为 CSS checkbox toggle（绿色 #52c41a 启用态）；多步骤表单用 localStorage 持久化。

## 原型目录结构（已核实，2026-09-09）

```
原型/
├── admin/                    # 管理端
│   ├── index.html            # 数据看板（首页）
│   ├── login.html            # 管理员登录（手机号/邮箱/用户名+密码+图形验证码）
│   ├── sidebar.js            # 侧边栏菜单结构（菜单权威来源，勿从各页面重复解析）
│   ├── 管理端PRD合并文档.md    # 管理端完整PRD（约6400行，手册主要资料来源）
│   ├── 管理端统一规则.md       # 分页/排序/时间格式/查询重置/下拉加载统一规则
│   ├── 重要节点.md
│   ├── system/               # 系统管理：role / dictionary / dictionary-items / admin / operation-log / login-log / feedback / faq
│   ├── member/               # 会员相关：member-type / field-config-personal / member-tag / member-add / member-id-rule / member-cert
│   │                         #   个人会员：personal-audit(-detail/-change-detail) / personal-import-review(-detail) / personal-list / personal-detail / personal-blacklist / personal-expired
│   │                         #   单位会员：company-audit(-detail/-change-detail) / company-list / company-detail / company-edit / company-withdrawn
│   │                         #   其他：tag-member-assign / sms-batch-detail
│   ├── organization/         # 组织机构：org-type / org-list / org-position / position-members
│   ├── user/                 # 用户管理：user-list / user-group / user-group-users / talent-pool
│   ├── order/                # 订单管理：order-list
│   └── message/              # 消息中心：sms / sms-audit(-detail) / sms-log；email-config / email / email-audit(-detail) / email-log；notice / notice-audit(-detail) / notice-log；各 *-batch-detail
├── user/                     # 会员端（个人+单位）
│   ├── personal-center / personal-info(-edit) / messages(-detail) / growth-trajectory / faq ...
│   ├── register-personal-type/step2/step4/step5/pending/rejected   # 个人会员申请流程
│   ├── register-company-type/step2/step3/step4/pending/rejected    # 单位会员申请流程
│   ├── company-home / company-info(-edit) / company-contacts / company-payment / company-showcase ...  # 单位会员端
│   ├── 会员端完整PRD.md / 会员端更新清单.md
│   └── login / pay / payment / identity-list / identity-switch ...
├── css/                      # style.css（管理端）、web.css（会员端）
├── js/                       # vue.global.js / element-plus.js / icons-vue.js / main.js（静态原型仅引用）
├── feedback/                 # 注意：此目录存放的是记忆文件 plan-first.md（反馈类记忆）
└── memory/                   # 记忆目录（MEMORY.md 索引 + 各记忆文件）
```

## 既有记忆汇总（已全部读取，后续无需重复读取）

### 工作习惯（plan-first.md，位于 feedback/ 目录）
每次修改前先列出计划（编号列表），等待用户确认后再执行。接到任务先给计划，询问确认后再实施。

### 同步更新PRD（update-prd.md）
每次修改会员端/管理端时，必须同步更新对应 PRD 文件（PRD 是唯一 source of truth）。当前实际 PRD 位置（2026-09-09 已核实，管理端PRD已移至原型根目录）：
- 管理端：`原型/管理端PRD合并文档.md`（update-prd.md 中记录的 `原型/管理端prd.md`、`原型/admin/管理端PRD合并文档.md` 均已过时）
- 会员端：`原型/user/会员端完整PRD.md`（update-prd.md 中记录的 `原型/会员端prd.md` 已过时）

### 管理端弹窗样式规范（admin-modal-style.md）
- 弹窗：白底玻璃磨砂（CSS .modal + .modal-dialog）
- 详情弹窗：蓝色圆形头像（#1890ff）+ 姓名首字母
- 信息布局：grid 分栏 + strong 标签；会员类型用 tag 标签（tag-primary）；状态用 status 类（status-normal）
- 不使用紫色渐变等花哨装饰

### 管理端已完成的主要功能（project.md）
1. 列表页状态改为开关模式；会员类型/组织类型/机构列表/机构任职/会员列表增加权重字段
2. 会员类型增加初审开关、申请表模板上传
3. 意见反馈（system/feedback.html）、常见问题（system/faq.html）页面
4. 会员端：个人会员申请 Step5（模板下载/上传/提交）、单位会员申请 Step4、意见反馈、常见问题

## 手册编写注意事项（经验沉淀）
- PRD 中"四、个人会员"和"六、单位会员"章节存在同名标题（如 会员审核/审核详情/现任会员/会员详情 均出现两次），单位会员实际页面为 company-*.html，编写时按章节对应文件区分
- sidebar.js 是菜单路径的权威来源：主菜单=数据看板/系统管理/用户管理/会员角色/个人会员/组织机构/单位会员/订单管理/消息中心（短信/邮件/站内信为可折叠分组）
- 会员人才库、标签成员分配页面挂在 user/、member/ 目录但归属手册第三章/第四章
- PRD 每个页面模块结构固定：1引言(背景/用户角色/功能清单) → 2需求说明 → 3字段说明 → 4交互流程 → 5业务规则
