(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });
})();

(function () {
  var chips = document.querySelectorAll('.chip[data-filter]');
  var cards = document.querySelectorAll('#post-grid .post-card');
  if (!chips.length || !cards.length) return;
  function show(cat) {
    chips.forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.filter === cat ? 'true' : 'false'); });
    cards.forEach(function (el) { el.hidden = !(cat === 'all' || el.dataset.cat === cat); });
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { show(c.dataset.filter); }); });
  var h = decodeURIComponent(location.hash.slice(1));
  if (h && document.querySelector('.chip[data-filter="' + h + '"]')) show(h);
})();
