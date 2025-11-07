function toggleTheme() {
  const current = document.body.dataset.theme;
  document.body.dataset.theme = current === 'light' ? '' : 'light';
}

function switchTab(event) {
  const tab = event.target;
  const tabs = tab.parentElement.querySelectorAll('.tab');
  const panels = tab.parentElement.parentElement.querySelectorAll('.tab-panel');
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));
  const index = Array.from(tabs).indexOf(tab);
  tab.classList.add('active');
  panels[index].classList.add('active');
}

function closeToast(btn) {
  const toast = btn.parentElement;
  toast.classList.add('closing');
  toast.addEventListener('animationend', () => toast.remove());
}

document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.navbar-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.progress-bar').forEach(bar => {
  const width = bar.getAttribute('data-width');
  bar.style.width = width + '%';
});