/* mobile-tune.js —— 手机竖屏构图调参面板
 * 只在网址带 ?tune=1 时出现（线上默认不露）。手机上直接开
 * https://xiaoerai.xyz/?tune=1 就能用手指拖，拖到满意点「复制参数」发我，我写死。
 * 改的全是 scene.css 里那套 --m-* 变量，只动尺寸位置，不碰任何颜色。
 */
(function () {
  if (!/[?&]tune=1/.test(location.search)) return;

  var P = [
    ['台灯大小', '--m-lamp-w', 80, 200, 1, 'px', function (v) {
      // 灯宽联动灯高，保持 200:420 原比例
      document.documentElement.style.setProperty('--m-lamp-h', Math.round(v * 2.1) + 'px');
    }],
    ['台灯靠右', '--m-lamp-right', 0, 30, 0.5, '%'],
    ['拉绳上下', '--m-cord-top', 60, 240, 1, 'px'],
    ['拉绳左右', '--m-cord-right', -10, 60, 1, 'px'],
    ['拉绳热区宽', '--m-cord-w', 30, 90, 1, 'px'],
    ['拉绳热区高', '--m-cord-h', 80, 240, 1, 'px'],
    ['桌沿高度', '--m-desk-top', 40, 80, 0.5, '%'],
    ['书宽', '--m-book-w', 80, 240, 1, 'px'],
    ['书靠左', '--m-book-left', 0, 40, 0.5, '%'],
    ['杯宽', '--m-mug-w', 50, 180, 1, 'px'],
    ['杯靠左', '--m-mug-left', 0, 60, 0.5, '%'],
    ['抽屉宽', '--m-drawer-w', 160, 380, 1, 'px'],
    ['题头上下', '--m-title-top', 10, 140, 1, 'px'],
    ['标题字号', '--m-title-size', 14, 34, 0.5, 'px']
  ];

  var css = document.createElement('style');
  css.textContent =
    '#mtune{position:fixed;left:8px;right:8px;bottom:8px;z-index:99999;max-height:52vh;overflow-y:auto;' +
    'background:rgba(28,20,12,.93);color:#ece2c8;border:1px solid rgba(236,226,200,.35);border-radius:10px;' +
    'padding:10px 12px 12px;font-family:ui-monospace,monospace;font-size:11px;-webkit-overflow-scrolling:touch}' +
    '#mtune.mini{left:auto;width:46px;height:46px;max-height:46px;overflow:hidden;border-radius:50%;padding:0;text-align:center}' +
    '#mtune.mini>*{display:none}' +
    '#mtune.mini::after{content:"调";display:block;line-height:46px;font-size:14px}' +
    '#mtune h4{margin:0 0 8px;font-size:10px;letter-spacing:.24em;font-weight:400;opacity:.75}' +
    '#mtune .r{display:flex;justify-content:space-between;margin:0 0 1px}' +
    '#mtune .r b{font-weight:600}' +
    '#mtune input[type=range]{width:100%;margin:0 0 7px;accent-color:#c8a04a}' +
    '#mtune .btns{display:flex;gap:7px;margin-top:4px}' +
    '#mtune button{flex:1;padding:7px;background:rgba(236,226,200,.14);border:1px solid rgba(236,226,200,.4);' +
    'color:inherit;font:inherit;border-radius:5px;cursor:pointer}' +
    '#mtune .x{position:absolute;top:6px;right:9px;width:22px;height:22px;line-height:20px;text-align:center;' +
    'border:1px solid rgba(236,226,200,.4);border-radius:50%;cursor:pointer}';
  document.head.appendChild(css);

  var box = document.createElement('div');
  box.id = 'mtune';
  var root = document.documentElement;
  var readVar = function (name, fallback) {
    var v = getComputedStyle(root).getPropertyValue(name).trim();
    var n = parseFloat(v);
    return isNaN(n) ? fallback : n;
  };

  var html = '<div class="x" id="mtMin">–</div><h4>手机构图 · 拖到满意</h4>';
  P.forEach(function (p, i) {
    var cur = readVar(p[1], p[2]);
    html += '<div class="r"><span>' + p[0] + '</span><b id="mtv' + i + '">' + cur + p[5] + '</b></div>' +
      '<input type="range" data-i="' + i + '" min="' + p[2] + '" max="' + p[3] + '" step="' + p[4] + '" value="' + cur + '">';
  });
  html += '<div class="btns"><button id="mtCopy">复制参数</button><button id="mtReset">还原</button></div>';
  box.innerHTML = html;

  var boot = function () {
    document.body.appendChild(box);
    var initial = {};
    P.forEach(function (p) { initial[p[1]] = readVar(p[1], p[2]); });

    box.addEventListener('input', function (e) {
      var i = e.target.dataset.i; if (i === undefined) return;
      var p = P[+i], v = parseFloat(e.target.value);
      root.style.setProperty(p[1], v + p[5]);
      if (p[6]) p[6](v);
      var lab = box.querySelector('#mtv' + i); if (lab) lab.textContent = v + p[5];
    });
    box.querySelector('#mtMin').onclick = function (e) { e.stopPropagation(); box.classList.add('mini'); };
    box.addEventListener('click', function () { if (box.classList.contains('mini')) box.classList.remove('mini'); });
    box.querySelector('#mtCopy').onclick = function () {
      var out = P.map(function (p) { return '    ' + p[1] + ': ' + readVar(p[1], p[2]) + p[5] + ';'; }).join('\n');
      var txt = '@media (max-width:700px) and (orientation:portrait){\n  :root{\n' + out + '\n  }\n}';
      var b = box.querySelector('#mtCopy');
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () {
        b.textContent = '已复制 ✓'; setTimeout(function () { b.textContent = '复制参数'; }, 1500);
      }); else { prompt('复制这段发我：', txt); }
    };
    box.querySelector('#mtReset').onclick = function () {
      P.forEach(function (p, i) {
        root.style.setProperty(p[1], initial[p[1]] + p[5]);
        if (p[6]) p[6](initial[p[1]]);
        var inp = box.querySelector('input[data-i="' + i + '"]'); if (inp) inp.value = initial[p[1]];
        var lab = box.querySelector('#mtv' + i); if (lab) lab.textContent = initial[p[1]] + p[5];
      });
    };
  };
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', boot); else boot();
})();
