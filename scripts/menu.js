(function(){
  const toggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('menuOverlay');
  const panel = document.getElementById('menuPanel');
  const bar = document.querySelector('.menu-bar');
  const logo = document.querySelector('.menu-logo');
  const logoImg = logo?.querySelector('img');
  const logoMask = logo?.querySelector('.logo-mask');

  if (toggle && overlay) {
    const setOpen = (open) => {
      // clases comunes
      overlay.classList.toggle('open', open);
      overlay.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    const positionPanel = () => {
      if (!bar || !panel) return;
      const rect = bar.getBoundingClientRect();
      const top = rect.bottom + 24;
      panel.style.top = top + 'px';
      // mantener centrado horizontal por CSS (left:50% + translateX(-50%)) para evitar derivas
      panel.style.left = '';
      panel.style.transform = '';
    };
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const checkbox = toggle.querySelector('input');
      const open = checkbox ? !checkbox.checked : !overlay.classList.contains('open');
      setOpen(open);
      toggle.classList.toggle('open', open);
      if (checkbox) checkbox.checked = open;
      if (open) positionPanel();
    });
    const closeAndReset = () => { setOpen(false); toggle.classList.remove('open'); const c = toggle.querySelector('input'); if (c) c.checked = false; };
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeAndReset(); });
    overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeAndReset));
    window.addEventListener('resize', () => { if (overlay.classList.contains('open')) positionPanel(); });
  }

  function randomGradient(){ const h = Math.floor(Math.random()*360); const h2 = (h+60)%360; return `linear-gradient(135deg, hsl(${h} 80% 65%), hsl(${h2} 80% 65%))`; }
  function applyRandomGradient(){ if (!logoMask || !logoImg) return; const g = randomGradient(); logoMask.style.background = g; logoMask.classList.add('gradient'); logoImg.style.opacity = '0'; }
  function removeGradient(){ if (!logoMask || !logoImg) return; logoMask.classList.remove('gradient'); logoImg.style.opacity = '1'; }
  logo?.addEventListener('mouseenter', applyRandomGradient);
  logo?.addEventListener('mouseleave', removeGradient);
})();


