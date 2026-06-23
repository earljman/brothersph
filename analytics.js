(function () {
  var CF_TOKEN = '556df733ca6f45ad9dd635cc02a00df6';
  var CLARITY_ID = 'xbjki7vlfl';

  if (CF_TOKEN && !CF_TOKEN.startsWith('REPLACE_')) {
    var cf = document.createElement('script');
    cf.defer = true;
    cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cf.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
    document.head.appendChild(cf);
  }

  if (CLARITY_ID && !CLARITY_ID.startsWith('REPLACE_')) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }
})();
