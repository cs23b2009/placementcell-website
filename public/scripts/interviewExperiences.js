// Interview Experiences - Interactive Behaviors
// Handles: search, expandable experience cards, expandable rounds, checklist

document.addEventListener('DOMContentLoaded', function () {
  initSearch();
  initExperienceCards();
  initRoundCards();
  initChecklist();
});

/* ==========================================================================
   Search Functionality (company listing page)
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById('ie-search');
  if (!searchInput) return;

  const cards = document.querySelectorAll('.ie-company-card');
  const emptyState = document.getElementById('ie-empty-state');
  const grid = document.getElementById('ie-companies-grid');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(function (card) {
      const name = card.getAttribute('data-name') || '';
      const desc = card.getAttribute('data-desc') || '';
      if (name.indexOf(query) !== -1 || desc.indexOf(query) !== -1) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState && grid) {
      if (visibleCount === 0) {
        emptyState.style.display = 'block';
        grid.style.display = 'none';
      } else {
        emptyState.style.display = 'none';
        grid.style.display = '';
      }
    }
  });
}

/* ==========================================================================
   Experience Card — Expand/Collapse
   ========================================================================== */
function initExperienceCards() {
  const cards = document.querySelectorAll('.ie-experience-card');
  if (cards.length === 0) return;

  cards.forEach(function (card) {
    const header = card.querySelector('.ie-experience-card-header');
    if (!header) return;

    header.addEventListener('click', function () {
      const detail = card.querySelector('.ie-experience-detail');
      if (!detail) return;

      const isActive = detail.classList.contains('active');

      // Collapse all other cards in the same list
      const allDetails = document.querySelectorAll('.ie-experience-detail');
      allDetails.forEach(function (d) {
        d.classList.remove('active');
      });

      // Toggle current card
      if (!isActive) {
        detail.classList.add('active');
        // Scroll into view smoothly
        setTimeout(function () {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });
}

/* ==========================================================================
   Round — Expand/Collapse
   ========================================================================== */
function initRoundCards() {
  const rounds = document.querySelectorAll('.ie-round');
  if (rounds.length === 0) return;

  rounds.forEach(function (round) {
    const header = round.querySelector('.ie-round-header');
    if (!header) return;

    header.addEventListener('click', function (e) {
      // Prevent triggering parent experience card click
      e.stopPropagation();

      const content = round.querySelector('.ie-round-content');
      if (!content) return;

      content.classList.toggle('active');
    });
  });
}

/* ==========================================================================
   Checklist — Click to check
   ========================================================================== */
function initChecklist() {
  const items = document.querySelectorAll('.ie-checklist-item');
  if (items.length === 0) return;

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('checked');
    });
  });
}
