// popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Toggle project collapse button's text
const projCollapse = document.getElementById('projectsCollapse');
const projCollapseButton = document.getElementById('projectsCollapseButton');

projCollapse.addEventListener('hidden.bs.collapse', function() {
  projCollapseButton.innerText = 'More projects...';
})
projCollapse.addEventListener('shown.bs.collapse', function() {
  projCollapseButton.innerText = 'Less projects...';
})

// Toggle game collapse button's text
const gamesCollapse = document.getElementById('gamesCollapse');
const gamesCollapseButton = document.getElementById('gamesCollapseButton');

gamesCollapse.addEventListener('hidden.bs.collapse', function() {
  gamesCollapseButton.innerText = 'Favorite games...';
})
gamesCollapse.addEventListener('shown.bs.collapse', function() {
  gamesCollapseButton.innerText = 'Less games please...';
})

// scrolling header color
function getScrollPercent() {
  var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}

function convert(color1, color2, pct) {
  const rgb1 = parseInt(color1, 16);
  const rgb2 = parseInt(color2, 16);

  const [r1, g1, b1] = toArray(rgb1);
  const [r2, g2, b2] = toArray(rgb2);

  const q = 1 - pct;
  const rr = Math.round(r1 * pct + r2 * q);
  const rg = Math.round(g1 * pct + g2 * q);
  const rb = Math.round(b1 * pct + b2 * q);

  return  Number((rr << 16) + (rg << 8) + rb).toString(16);
}

function toArray(rgb) {
  const r = rgb >> 16;
  const g = (rgb >> 8) % 256;
  const b = rgb % 256;

  return [r, g, b];
}

const headerdiv = document.getElementById('header')
headerdiv.style.backgroundColor = `#1d2329`; // initialize

window.addEventListener('scroll', () => {
  const result = convert('212529', '1d2329', getScrollPercent());
  headerdiv.style.backgroundColor = `#${result}`;
})