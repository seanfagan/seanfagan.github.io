// Toggle collapse button's text

const projCollapse = document.getElementById('projectsCollapse');
const projCollapseButton = document.getElementById('projectsCollapseButton');

projCollapse.addEventListener('hidden.bs.collapse', function() {
  projCollapseButton.innerText = 'More projects...';
})
projCollapse.addEventListener('shown.bs.collapse', function() {
  projCollapseButton.innerText = 'Less projects...';
})

const gamesCollapse = document.getElementById('gamesCollapse');
const gamesCollapseButton = document.getElementById('gamesCollapseButton');

gamesCollapse.addEventListener('hidden.bs.collapse', function() {
  gamesCollapseButton.innerText = 'Favorite games...';
})
gamesCollapse.addEventListener('shown.bs.collapse', function() {
  gamesCollapseButton.innerText = 'Less games please...';
})