// util.jsx — small shared helpers
window._util = {
  clamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
  rand: (a, b) => a + Math.random() * (b - a),
};

// SFX: real wav clips for lamp-on / drawer-open / card-click; thunk kept as a tiny WebAudio pulse.
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

  const playLamp   = makeClipPool('assets/sfx/lamp-on.wav',     { count: 2, volume: .8 });
  const playDrawer = makeClipPool('assets/sfx/drawer-open.wav', { count: 2, volume: .7 });
  const playCard   = makeClipPool('assets/sfx/card-click.wav',  { count: 3, volume: .8 });

  // Tiny WebAudio thunk for "close drawer" (kept synthesized — no asset for it).
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
    clack: playLamp,     // lamp pull cord
    drawer: playDrawer,  // pull drawer open
    whoosh: playCard,    // click a card
    thunk() {
      const c = getCtx();
      const t = c.currentTime;
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(70, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + .08);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(.28, t + .004);
      g.gain.exponentialRampToValueAtTime(.0001, t + .3);
      osc.connect(g).connect(c.destination);
      osc.start(t); osc.stop(t + .35);
    },
  };
})();
