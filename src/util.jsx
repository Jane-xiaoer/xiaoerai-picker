// util.jsx — small shared helpers
window._util = {
  clamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
  rand: (a, b) => a + Math.random() * (b - a),
};

// SFX: real wav clips for lamp-on / drawer-open / drawer-close / card-click.
(function() {
  const allClips = [];          // 收齐所有 <audio>，iOS 首次手势时统一解锁
  function makeClipPool(src, { count = 3, volume = .7 } = {}) {
    const pool = Array.from({ length: count }, () => {
      const a = new Audio(src);
      a.preload = 'auto';
      a.volume = volume;
      a.playsInline = true;     // iOS 别抢成全屏播放器
      a.setAttribute('playsinline', '');
      allClips.push(a);
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
  // 🔴 iOS/Safari:AudioContext.resume() 解锁不了 <audio> 元素。
  // 每个 Audio 对象必须在「用户手势的同步调用栈」里 play() 过一次,之后才能程序化播放。
  // 所以首次手势时把所有 clip 静音播一下再立刻停 —— 这是手机上没声音的真正原因。
  let armed = false;
  const armOnce = () => {
    if (armed) return; armed = true;
    getCtx();
    allClips.forEach(a => {
      const v = a.volume;
      a.volume = 0;
      const p = a.play();
      const restore = () => { try { a.pause(); a.currentTime = 0; } catch (_) {} a.volume = v; };
      if (p && p.then) p.then(restore).catch(restore); else restore();
    });
    window.removeEventListener('pointerdown', armOnce);
    window.removeEventListener('touchstart', armOnce);
    window.removeEventListener('keydown', armOnce);
  };
  // touchstart 比 pointerdown 更早,iOS 上更稳
  window.addEventListener('touchstart', armOnce, { once: true, passive: true });
  window.addEventListener('pointerdown', armOnce, { once: true });
  window.addEventListener('keydown', armOnce, { once: true });

  window._sfx = {
    clack: playLamp,         // lamp pull cord
    drawer: playDrawer,      // pull drawer open
    whoosh: playCard,        // click a card
    thunk: playDrawerClose,  // close drawer / back to desk
  };
})();
