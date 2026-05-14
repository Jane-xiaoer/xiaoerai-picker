// util.jsx — small shared helpers
window._util = {
  clamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
  rand: (a, b) => a + Math.random() * (b - a),
};

// SFX: real wav clips for lamp-on / drawer-open / drawer-close / card-click.
(function() {
  function makeClipPool(src, { count = 3, volume = .7 } = {}) {
    const pool = Array.from({ length: count }, () => {
      const a = new Audio(src);
      a.preload = 'auto';
      a.volume = volume;
      return a;
    });
    let i = 0;
    return () => {
      const a = pool[i = (i + 1) % count];
      try { a.currentTime = 0; a.play().catch(() => {}); } catch (_) {}
    };
  }

  const playLamp        = makeClipPool('assets/sfx/lamp-on.wav',      { count: 2, volume: .8 });
  const playDrawer      = makeClipPool('assets/sfx/drawer-open.wav',  { count: 2, volume: .7 });
  const playDrawerClose = makeClipPool('assets/sfx/drawer-close.wav', { count: 2, volume: .8 });
  const playCard        = makeClipPool('assets/sfx/card-click.wav',   { count: 3, volume: .8 });

  // WebAudio context kept for future use / autoplay-unblock priming.
  let ctx;
  const getCtx = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  };
  const armOnce = () => {
    getCtx();
    window.removeEventListener('pointerdown', armOnce);
    window.removeEventListener('keydown', armOnce);
  };
  window.addEventListener('pointerdown', armOnce, { once: true });
  window.addEventListener('keydown', armOnce, { once: true });

  window._sfx = {
    clack: playLamp,         // lamp pull cord
    drawer: playDrawer,      // pull drawer open
    whoosh: playCard,        // click a card
    thunk: playDrawerClose,  // close drawer / back to desk
  };
})();
