// 公共侧边栏脚本
function getBasePath() {
  var currentPath = window.location.pathname;
  // 解码URL编码的中文路径
  var decodedPath = decodeURIComponent(currentPath);
  var afterAdminRoot = '';
  // 兼容旧目录“管理端”和当前目录“admin”
  var guanliduanIndex = decodedPath.indexOf('管理端');
  if (guanliduanIndex >= 0) {
    afterAdminRoot = decodedPath.substring(guanliduanIndex + 4);
  } else {
    var adminMarker = '/admin/';
    var adminIndex = decodedPath.indexOf(adminMarker);
    if (adminIndex < 0) return '';
    afterAdminRoot = decodedPath.substring(adminIndex + adminMarker.length);
  }
  // afterGuanliduan is like 'system/role.html' or 'index.html'
  // Count how many directories deep we are
  var depth = (afterAdminRoot.match(/\//g) || []).length;
  // depth 0 = in root (like 'index.html'), no prefix needed
  // depth 1 = in subdir (like 'system/role.html'), need '../'
  if (depth > 0) {
    return '../'.repeat(depth);
  }
  return '';
}

var sidebarHTML = `<div class="sidebar">
  <div class="logo">🏛️ <span>会员管理系统</span></div>
  <div class="sidebar-menu">
    <div class="menu-title">主菜单</div>
    <a href="index.html" class="menu-item" data-menu="index"><i>📊</i> 数据看板</a>
    <div class="menu-title">系统管理</div>
    <a href="system/role.html" class="menu-item" data-menu="system-role"><i>👥</i> 角色管理</a>
    <a href="system/dictionary.html" class="menu-item" data-menu="system-dictionary"><i>📚</i> 字典管理</a>
    <a href="system/admin.html" class="menu-item" data-menu="system-admin"><i>🔐</i> 管理员管理</a>
    <a href="system/operation-log.html" class="menu-item" data-menu="system-operation-log"><i>📝</i> 操作日志</a>
    <a href="system/login-log.html" class="menu-item" data-menu="system-login-log"><i>🔑</i> 登录日志</a>
    <a href="system/feedback.html" class="menu-item" data-menu="system-feedback"><i>💬</i> 意见反馈</a>
    <a href="system/faq.html" class="menu-item" data-menu="system-faq"><i>❓</i> 常见问题</a>
    <div class="menu-title">用户管理</div>
    <a href="user/user-list.html" class="menu-item" data-menu="user-user-list"><i>👤</i> 用户管理</a>
    <a href="user/user-group.html" class="menu-item" data-menu="user-user-group"><i>📁</i> 用户分组管理</a>
    <div class="menu-title">会员角色</div>
    <a href="member/member-type.html" class="menu-item" data-menu="member-member-type"><i>🏷️</i> 会员类型</a>
    <a href="member/member-tag.html" class="menu-item" data-menu="member-member-tag"><i>🏷️</i> 会员标签</a>
    <a href="member/member-cert.html" class="menu-item" data-menu="member-member-cert"><i>📜</i> 会员证书</a>
    <div class="menu-title">个人会员</div>
    <a href="member/personal-audit.html" class="menu-item" data-menu="member-personal-audit"><i>✅</i> 会员审核</a>
    <a href="member/personal-import-review.html" class="menu-item" data-menu="member-personal-import-review"><i>📥</i> 批量导入审核</a>
    <a href="member/personal-list.html" class="menu-item" data-menu="member-personal-list"><i>👥</i> 现任会员</a>
    <a href="member/personal-blacklist.html" class="menu-item" data-menu="member-personal-blacklist"><i>⛔</i> 黑名单列表</a>
    <a href="member/personal-expired.html" class="menu-item" data-menu="member-personal-expired"><i>⏰</i> 到期会员</a>
    <a href="user/talent-pool.html" class="menu-item" data-menu="user-talent-pool"><i>💼</i> 会员人才库</a>
    <div class="menu-title">组织机构</div>
    <a href="organization/org-type.html" class="menu-item" data-menu="organization-org-type"><i>🏢</i> 组织类型</a>
    <a href="organization/org-list.html" class="menu-item" data-menu="organization-org-list"><i>📋</i> 机构列表</a>
    <a href="organization/org-position.html" class="menu-item" data-menu="organization-org-position"><i>👔</i> 机构任职</a>
    <div class="menu-title">单位会员</div>
    <a href="member/company-audit.html" class="menu-item" data-menu="member-company-audit"><i>✅</i> 会员审核</a>
    <a href="member/company-list.html" class="menu-item" data-menu="member-company-list"><i>🏛️</i> 现任会员</a>
    <a href="member/company-withdrawn.html" class="menu-item" data-menu="member-company-withdrawn"><i>💔</i> 已退会</a>
    <div class="menu-title">订单管理</div>
    <a href="order/order-list.html" class="menu-item" data-menu="order-order-list"><i>📃</i> 订单管理</a>
    <div class="menu-title">消息中心</div>
    <div class="menu-group">
      <div class="menu-group-title" data-target="sms-menu"><i>📱</i> 短信管理 <span class="arrow">▶</span></div>
      <div class="menu-group-items" id="sms-menu">
        <a href="message/sms.html" class="menu-item" data-menu="message-sms">短信模版管理</a>
        <a href="message/sms-audit.html" class="menu-item" data-menu="message-sms-audit">短信发送审核</a>
        <a href="message/sms-log.html" class="menu-item" data-menu="message-sms-log">短信发送记录</a>
      </div>
    </div>
    <div class="menu-group">
      <div class="menu-group-title" data-target="email-menu"><i>📧</i> 邮件管理 <span class="arrow">▶</span></div>
      <div class="menu-group-items" id="email-menu">
        <a href="message/email-config.html" class="menu-item" data-menu="message-email-config">邮箱配置</a>
        <a href="message/email.html" class="menu-item" data-menu="message-email">邮件模版管理</a>
        <a href="message/email-audit.html" class="menu-item" data-menu="message-email-audit">邮件发送审核</a>
        <a href="message/email-log.html" class="menu-item" data-menu="message-email-log">发送记录</a>
      </div>
    </div>
    <div class="menu-group">
      <div class="menu-group-title" data-target="notice-menu"><i>📬</i> 站内信管理 <span class="arrow">▶</span></div>
      <div class="menu-group-items" id="notice-menu">
        <a href="message/notice.html" class="menu-item" data-menu="message-notice">站内信模板管理</a>
        <a href="message/notice-audit.html" class="menu-item" data-menu="message-notice-audit">发送站内信审核</a>
        <a href="message/notice-log.html" class="menu-item" data-menu="message-notice-log">发送记录</a>
      </div>
    </div>
  </div>
</div>`;

function loadSidebar() {
  var currentPath = window.location.pathname;
  var currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  var prefix = getBasePath();

  // 根据前缀调整链接
  var processedHTML;
  if (prefix) {
    processedHTML = sidebarHTML.replace(/href="/g, 'href="' + prefix);
  } else {
    processedHTML = sidebarHTML;
  }

  document.getElementById('sidebar-container').innerHTML = processedHTML;
  highlightMenu(currentFile);
  bindMenuGroupEvents();
}

function highlightMenu(currentFile) {
  var fileToMenuMap = {
    'index.html': 'index',
    'role.html': 'system-role',
    'dictionary.html': 'system-dictionary',
    'admin.html': 'system-admin',
    'operation-log.html': 'system-operation-log',
    'login-log.html': 'system-login-log',
    'feedback.html': 'system-feedback',
    'faq.html': 'system-faq',
    'user-list.html': 'user-user-list',
    'user-group.html': 'user-user-group',
    'talent-pool.html': 'user-talent-pool',
    'member-type.html': 'member-member-type',
    'member-tag.html': 'member-member-tag',
    'member-cert.html': 'member-member-cert',
    'personal-audit.html': 'member-personal-audit',
    'personal-import-review.html': 'member-personal-import-review',
    'personal-import-review-detail.html': 'member-personal-import-review',
    'personal-list.html': 'member-personal-list',
    'personal-blacklist.html': 'member-personal-blacklist',
    'personal-expired.html': 'member-personal-expired',
    'company-audit.html': 'member-company-audit',
    'company-list.html': 'member-company-list',
    'company-withdrawn.html': 'member-company-withdrawn',
    'org-type.html': 'organization-org-type',
    'org-list.html': 'organization-org-list',
    'org-position.html': 'organization-org-position',
    'order-list.html': 'order-order-list',
    'sms.html': 'message-sms',
    'sms-audit.html': 'message-sms-audit',
    'sms-audit-detail.html': 'message-sms-audit',
    'sms-log.html': 'message-sms-log',
    'email.html': 'message-email',
    'email-config.html': 'message-email-config',
    'email-audit.html': 'message-email-audit',
    'email-audit-detail.html': 'message-email-audit',
    'email-log.html': 'message-email-log',
    'notice.html': 'message-notice',
    'notice-audit.html': 'message-notice-audit',
    'notice-audit-detail.html': 'message-notice-audit',
    'notice-log.html': 'message-notice-log'
  };

  var menuKey = fileToMenuMap[currentFile] || '';

  var menuItems = document.querySelectorAll('.menu-item[data-menu]');
  menuItems.forEach(function(item) {
    if (item.getAttribute('data-menu') === menuKey) {
      item.classList.add('active');
      var groupItems = item.closest('.menu-group-items');
      if (groupItems) {
        groupItems.classList.add('show');
        var groupTitle = groupItems.previousElementSibling;
        if (groupTitle && groupTitle.classList.contains('menu-group-title')) {
          groupTitle.classList.add('expanded');
        }
      }
    }
  });
}

function bindMenuGroupEvents() {
  var groupTitles = document.querySelectorAll('.menu-group-title');
  groupTitles.forEach(function(title) {
    title.addEventListener('click', function() {
      var targetId = this.getAttribute('data-target');
      var items = document.getElementById(targetId);
      if (items) {
        this.classList.toggle('expanded');
        items.classList.toggle('show');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', loadSidebar);
