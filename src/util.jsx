// util.jsx — small shared helpers
window._util = {
  clamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
  rand: (a, b) => a + Math.random() * (b - a),
};

// Simple web-audio sfx: two-tap wooden clack for the pull cord, drawer rumble, card whoosh.
(function() {
  let ctx;
  const getCtx = () => ctx || (ctx = new (window.AudioContext || window.webkitAudioContext)());
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
      // high tick + low wooden thunk, double-tap
      envBurst({ freq: 2200, dur: .015, type: 'square', gain: .08, decay: .02 });
      envBurst({ freq: 180, dur: .04, type: 'triangle', gain: .22, decay: .08, fDecay: 120 });
      envBurst({ freq: 2000, dur: .015, type: 'square', gain: .06, decay: .02, delay: .09 });
      envBurst({ freq: 160, dur: .05, type: 'triangle', gain: .18, decay: .1, fDecay: 100, delay: .09 });
    },
    drawer() {
      noiseBurst({ dur: .9, gain: .12, filter: 600, q: 1.2 });
      envBurst({ freq: 90, dur: .7, type: 'sine', gain: .15, decay: .2 });
      envBurst({ freq: 60, dur: .2, type: 'triangle', gain: .25, decay: .3, delay: .85 });
    },
    whoosh() {
      noiseBurst({ dur: .5, gain: .08, filter: 2200, q: .8 });
    },
    thunk() {
      envBurst({ freq: 70, dur: .08, type: 'sine', gain: .28, decay: .22, fDecay: 30 });
    },
  };
})();
