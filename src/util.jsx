// util.jsx — small shared helpers
window._util = {
  clamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
  rand: (a, b) => a + Math.random() * (b - a),
};

// Simple web-audio sfx: two-tap wooden clack for the pull cord, drawer rumble, card whoosh.
(function() {
  let ctx;
  const getCtx = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  };
  // also resume on the very first user gesture anywhere on the page (safety net)
  const armOnce = () => {
    getCtx();
    window.removeEventListener('pointerdown', armOnce);
    window.removeEventListener('keydown', armOnce);
  };
  window.addEventListener('pointerdown', armOnce, { once: true });
  window.addEventListener('keydown', armOnce, { once: true });
  function envBurst({ freq = 800, dur = .04, type = 'triangle', gain = .3, decay = .03, fDecay = 0, delay = 0 }) {
    const c = getCtx();
    const t = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (fDecay) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq - fDecay), t + dur);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + .004);
    g.gain.exponentialRampToValueAtTime(.0001, t + dur + decay);
    osc.connect(g).connect(c.destination);
    osc.start(t); osc.stop(t + dur + decay + .05);
  }
  function noiseBurst({ dur = .15, gain = .15, filter = 1200, delay = 0, q = 1 }) {
    const c = getCtx();
    const t = c.currentTime + delay;
    const buf = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = c.createBufferSource(); src.buffer = buf;
    const bp = c.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.value = filter; bp.Q.value = q;
    const g = c.createGain(); g.gain.value = gain;
    src.connect(bp).connect(g).connect(c.destination);
    src.start(t);
  }
  window._sfx = {
    clack() {
      // lamp-chain pull: tiny shimmer → crisp metallic click → soft resonance
      noiseBurst({ dur: .045, gain: .12, filter: 5000, q: 2.2 });
      envBurst({ freq: 3400, dur: .025, type: 'triangle', gain: .28, decay: .05 });
      envBurst({ freq: 1900, dur: .04, type: 'sine', gain: .18, decay: .09, fDecay: 1000, delay: .008 });
      envBurst({ freq: 620, dur: .07, type: 'sine', gain: .1, decay: .15, fDecay: 240, delay: .025 });
    },
    drawer() {
      // wood-on-wood slide: longer textured rumble, softer stop
      noiseBurst({ dur: 1.2, gain: .22, filter: 820, q: 1.5 });
      envBurst({ freq: 115, dur: 1.05, type: 'sine', gain: .2, decay: .35 });
      envBurst({ freq: 230, dur: .85, type: 'triangle', gain: .07, decay: .3, delay: .05 });
      noiseBurst({ dur: .18, gain: .12, filter: 1400, q: 1, delay: 1.05 });
      envBurst({ freq: 75, dur: .15, type: 'sine', gain: .18, decay: .3, delay: 1.05 });
    },
    whoosh() {
      noiseBurst({ dur: .5, gain: .08, filter: 2200, q: .8 });
    },
    thunk() {
      envBurst({ freq: 70, dur: .08, type: 'sine', gain: .28, decay: .22, fDecay: 30 });
    },
  };
})();
