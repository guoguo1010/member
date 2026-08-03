// 会员管理系统 - 通用JS

// 模拟数据
const mockData = {
  users: [
    { id: 1, name: '张三', phone: '13800138001', type: '个人会员', status: '正常', createTime: '2024-01-15' },
    { id: 2, name: '李四', phone: '13800138002', type: '个人会员', status: '正常', createTime: '2024-02-20' },
    { id: 3, name: '王五', phone: '13800138003', type: '单位会员', status: '正常', createTime: '2024-03-10' },
  ],
  orders: [
    { id: 'ORD20240501001', member: '张三', type: '个人会员', period: '1年', amount: 100, status: '待支付', createTime: '2024-05-01' },
    { id: 'ORD20240501002', member: '李四', type: '个人会员', period: '2年', amount: 180, status: '已支付', createTime: '2024-05-01' },
  ]
};

// 显示提示消息
function showToast(message, type = 'success') {
  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `notification ${type}`;
  toast.innerHTML = `
    <span class="icon">${icons[type] || 'ℹ'}</span>
    <div class="content">
      <div class="title">${message}</div>
    </div>
    <span class="close" onclick="this.parentElement.style.transform='translateX(120%)';setTimeout(()=>this.parentElement.remove(),300)">✕</span>
  `;
  document.body.appendChild(toast);
  // 触发动画
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  setTimeout(() => {
    toast.style.transform = 'translateX(120%)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 打开模态框
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// 关闭模态框
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 确认对话框
function confirmDialog(message, callback) {
  if (window.confirm(message)) {
    callback && callback();
  }
}

// 表单验证
function validateForm(form) {
  const inputs = form.querySelectorAll('[required]');
  for (let input of inputs) {
    if (!input.value.trim()) {
      input.focus();
      showToast('请填写必填项', 'error');
      return false;
    }
  }
  return true;
}

// 搜索功能
function handleSearch(tableId) {
  const input = event.target;
  const filter = input.value.toLowerCase();
  const table = document.getElementById(tableId);
  if (!table) return;
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? '' : 'none';
  });
}

// 导出Excel（模拟）
function exportExcel() {
  showToast('导出功能开发中...', 'info');
}

// 复选框全选/取消全选
function toggleCheckAll(source, tableId) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = source.checked);
}

// 分页相关
let currentPage = 1;
const pageSize = 10;

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
}

function nextPage() {
  currentPage++;
  renderPage();
}

function goToPage(page) {
  currentPage = page;
  renderPage();
}

function renderPage() {
  // 实际项目中会根据currentPage和pageSize请求数据
  console.log('Current page:', currentPage);
}

// Tab切换
function switchTab(tabId, activeTab) {
  const tabs = document.querySelectorAll(`#${tabId} .tab-item`);
  tabs.forEach(tab => tab.classList.remove('active'));
  activeTab.classList.add('active');
}

// 折叠面板
function toggleCollapse(item) {
  item.classList.toggle('active');
}

// 树形菜单节点展开/收起
function toggleTreeNode(node) {
  const children = node.querySelector('.children');
  const icon = node.querySelector('.toggle-icon');
  if (children) {
    children.style.display = children.style.display === 'none' ? 'block' : 'none';
  }
  if (icon) {
    icon.textContent = icon.textContent === '▶' ? '▼' : '▶';
  }
}

// 图片预览
function previewImage(src) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer;';
  overlay.innerHTML = `<img src="${src}" style="max-width:90%;max-height:90%;">`;
  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}

// 复制文本
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('复制成功');
  });
}

// 数字格式化
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 日期格式化
function formatDate(date) {
  if (typeof date === 'string') date = new Date(date);
  return date.toLocaleDateString('zh-CN');
}

// 初始化侧边栏菜单
document.addEventListener('DOMContentLoaded', function() {
  // 高亮当前页面菜单
  const currentPath = window.location.pathname;
  document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
    if (item.getAttribute('href') && currentPath.includes(item.getAttribute('href'))) {
      item.classList.add('active');
    }
  });
});

// 拖拽排序（用于证书编辑器等）
class DragSort {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.container.querySelectorAll('.drag-item').forEach(item => {
      item.setAttribute('draggable', 'true');
      item.addEventListener('dragstart', e => this.dragStart(e, item));
      item.addEventListener('dragend', e => this.dragEnd(e, item));
      item.addEventListener('dragover', e => e.preventDefault());
      item.addEventListener('drop', e => this.drop(e, item));
    });
  }

  dragStart(e, item) {
    e.dataTransfer.setData('text/plain', item.dataset.id);
    item.style.opacity = '0.5';
  }

  dragEnd(e, item) {
    item.style.opacity = '1';
  }

  drop(e, target) {
    e.preventDefault();
    const dragItem = this.container.querySelector(`[data-id="${e.dataTransfer.getData('text/plain')}"]`);
    if (dragItem && dragItem !== target) {
      const rect = target.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (e.clientY < midY) {
        target.parentNode.insertBefore(dragItem, target);
      } else {
        target.parentNode.insertBefore(dragItem, target.nextSibling);
      }
    }
  }
}

// 证书生成（模拟）
function generateCert() {
  showToast('证书生成成功');
  // 实际项目中会调用Canvas或html2canvas生成图片
}

// 表单字段配置
const fieldConfig = {
  personal: [
    { name: '真实姓名', code: 'realName', type: 'text', required: true },
    { name: '身份证号', code: 'idCard', type: 'text', required: true },
    { name: '性别', code: 'gender', type: 'select', options: ['男', '女', '其他'] },
    { name: '出生日期', code: 'birthday', type: 'date' },
    { name: '民族', code: 'nation', type: 'select' },
    { name: '政治面貌', code: 'political', type: 'select' },
    { name: '最高学历', code: 'education', type: 'select' },
    { name: '毕业院校', code: 'school', type: 'text' },
    { name: '工作单位', code: 'company', type: 'text' },
    { name: '职称', code: 'title', type: 'select' },
    { name: '职务', code: 'position', type: 'text' },
    { name: '所在地区', code: 'region', type: 'cascader' },
    { name: '通讯地址', code: 'address', type: 'text' },
    { name: '手机号', code: 'phone', type: 'text', required: true },
    { name: '邮箱', code: 'email', type: 'email' },
  ],
  company: [
    { name: '单位名称', code: 'companyName', type: 'text', required: true },
    { name: '统一社会信用代码', code: 'creditCode', type: 'text', required: true },
    { name: '法定代表人', code: 'legalPerson', type: 'text', required: true },
    { name: '注册资金', code: 'capital', type: 'number' },
    { name: '成立时间', code: 'founded', type: 'date' },
    { name: '所属行业', code: 'industry', type: 'select' },
    { name: '单位类别', code: 'companyType', type: 'select' },
    { name: '所在地区', code: 'region', type: 'cascader' },
    { name: '通讯地址', code: 'address', type: 'text' },
    { name: '联系人', code: 'contact', type: 'text', required: true },
    { name: '联系电话', code: 'contactPhone', type: 'text', required: true },
    { name: '电子邮箱', code: 'email', type: 'email' },
    { name: '营业执照', code: 'license', type: 'upload' },
    { name: '单位简介', code: 'description', type: 'textarea' },
  ]
};

// 会员状态
const memberStatus = {
  NORMAL: '正常',
  EXPIRED: '到期',
  SUSPENDED: '暂停',
  WITHDRAWN: '退会'
};

// 审核状态
const auditStatus = {
  PENDING: '待审核',
  APPROVED: '已通过',
  REJECTED: '已驳回'
};

// 订单状态
const orderStatus = {
  PENDING: '待支付',
  PAID: '已支付',
  CANCELLED: '已取消'
};

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal) {
      activeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// 点击模态框外部关闭
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal') && e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});
