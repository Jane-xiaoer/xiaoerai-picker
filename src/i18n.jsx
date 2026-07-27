// i18n.jsx — site-wide language toggle (中 / EN).
// The preference is shared across the WHOLE site — this desk page and the /me map —
// via localStorage['xe-lang']. Flipping it on one page updates the other live.
(function () {
  const KEY = 'xe-lang';
  let lang = localStorage.getItem(KEY) === 'en' ? 'en' : 'zh';
  const subs = new Set();
  const applyHtml = () => { document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN'; };
  applyHtml();

  function set(l) {
    if (l !== 'zh' && l !== 'en' || l === lang) return;
    lang = l; localStorage.setItem(KEY, l); applyHtml();
    subs.forEach(fn => fn(lang));
  }
  // react to another tab / the /me page flipping the shared preference
  window.addEventListener('storage', (e) => {
    if (e.key === KEY && (e.newValue === 'zh' || e.newValue === 'en') && e.newValue !== lang) {
      lang = e.newValue; applyHtml(); subs.forEach(fn => fn(lang));
    }
  });

  window.langStore = { get: () => lang, set, sub: (fn) => { subs.add(fn); return () => subs.delete(fn); } };
  window.useLang = function () {
    const [l, setL] = React.useState(window.langStore.get());
    React.useEffect(() => window.langStore.sub(setL), []);
    return l;
  };

  // chrome strings (card text lives in cards.jsx). fig/PL. plate captions stay constant Latin flavor.
  window.T = {
    deskTitle:   { zh: '小耳的书桌',     en: "Xiaoer's Desk" },
    cabinetOpen: { zh: '抽屉 · 已拉开',  en: 'Cabinet, Open' },
    backToDesk:  { zh: '← 回到书桌',     en: '← Back to Desk' },
    cordHint:    { zh: '拉开关',         en: 'pull' },
    cordAria:    { zh: '拉一下点亮台灯 · pull to light', en: 'Pull to light the lamp' },
    drawerHint:  { zh: '拉开抽屉',       en: 'open the drawer' },
  };

  function LangToggle() {
    const l = window.useLang();
    return (
      <div className="lang-toggle" title="中文 / English">
        <b className={l === 'zh' ? 'on' : ''} onClick={() => window.langStore.set('zh')}>中</b>
        <b className={l === 'en' ? 'on' : ''} onClick={() => window.langStore.set('en')}>EN</b>
      </div>
    );
  }
  window.LangToggle = LangToggle;
})();
