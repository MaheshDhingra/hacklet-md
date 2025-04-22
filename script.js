javascript:(function(){
  const heads = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
  if (!heads.length) return alert('No headings found on this page!');
  const colors = ['#e6194b','#3cb44b','#ffe119','#4363d8','#f58231','#911eb4','#46f0f0'];
  heads.forEach(h => h.style.transition = 'color 0.5s');
  let idx = 0;
  setInterval(() => {
    heads.forEach(h => h.style.color = colors[idx % colors.length]);
    idx++;
  }, 500);
})();

## NOTE YOU CAN RUN THIS ANYWHERE BY SIMPLY PASTING IT IN THE CONSOLE, BEST WAY TO TRY? A GITHUB REPO!
