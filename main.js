/* ─── Odrija Klēbaha — Portfolio JS ─────────────────── */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Contact overlay ───────────────────────────────── */
function openContact() {
  $('#contact-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeContact() {
  $('#contact-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ── About overlay ─────────────────────────────────── */
function openAbout() {
  $('#about-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAbout() {
  $('#about-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ── Category filter ───────────────────────────────── */
function filterSection(section) {
  // Update active state on nav links
  $$('.category-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === section);
  });

  // Show/hide gallery sections
  $$('.filterable-section').forEach(el => {
    if (section === 'all') {
      el.style.display = '';
    } else {
      el.style.display = el.dataset.section === section ? '' : 'none';
    }
  });
}

/* ── Init ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // Contact buttons
  $$('[data-action="open-contact"]').forEach(el =>
    el.addEventListener('click', openContact)
  );

  // Back / close buttons on overlays
  $$('[data-action="close-contact"]').forEach(el =>
    el.addEventListener('click', closeContact)
  );

  $$('[data-action="open-about"]').forEach(el =>
    el.addEventListener('click', openAbout)
  );

  $$('[data-action="close-about"]').forEach(el =>
    el.addEventListener('click', closeAbout)
  );

  // Contact from about overlay
  $$('[data-action="about-to-contact"]').forEach(el =>
    el.addEventListener('click', () => {
      closeAbout();
      openContact();
    })
  );

  // Category nav
  $$('.category-nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      filterSection(a.dataset.section);
    });
  });

  // Escape key closes overlays
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeContact();
      closeAbout();
    }
  });

  // Copy email hint on hover (tooltip feel)
  const emailEl = $('#co-email');
  if (emailEl) {
    emailEl.title = 'Click to copy';
    emailEl.addEventListener('click', () => {
      navigator.clipboard.writeText(emailEl.textContent.trim()).then(() => {
        const orig = emailEl.textContent;
        emailEl.textContent = 'Copied!';
        setTimeout(() => { emailEl.textContent = orig; }, 1400);
      });
    });
  }

});
