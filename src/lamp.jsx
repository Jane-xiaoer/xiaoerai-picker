// lamp.jsx — engraving-style oil/brass lamp with pull cord physics
const { clamp } = window._util;

function Lamp({ on, onToggle }) {
  const [cordY, setCordY] = React.useState(0);
  const [pulling, setPulling] = React.useState(false);
  const startRef = React.useRef({ y: 0, cordY: 0 });

  React.useEffect(() => {
    const onMove = (e) => {
      if (!pulling) return;
      const dy = e.clientY - startRef.current.y;
      setCordY(clamp(startRef.current.cordY + dy / 90, 0, 1));
    };
    const onUp = () => {
      if (!pulling) return;
      setPulling(false);
      if (cordY > 0.6) onToggle();
      let from = cordY;
      const start = performance.now();
      const a = (t) => {
        const k = Math.min(1, (t - start) / 320);
        const ease = 1 - Math.pow(1 - k, 3);
        const overshoot = Math.sin(k * Math.PI * 2) * 0.08 * (1 - k);
        setCordY(from * (1 - ease) + overshoot);
        if (k < 1) requestAnimationFrame(a);
        else setCordY(0);
      };
      requestAnimationFrame(a);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [pulling, cordY, onToggle]);

  const onDown = (e) => {
    e.preventDefault();
    startRef.current = { y: e.clientY, cordY };
    setPulling(true);
  };

  const pull = cordY * 80;
  const ink = '#2e1e10';

  return (
    <div className="lamp-holder">
      <svg viewBox="0 0 260 520">
        {/* ===== shade (trapezoid banker-style) with hatching for volume ===== */}
        <g filter="url(#wobble)">
          {/* shade shadow side (hatched) */}
          <path d="M 30 40 L 230 40 L 210 150 L 50 150 Z" fill={on ? '#ece2c8' : 'url(#hatch2)'}/>
          {/* cross-hatching on left and right sides for volume */}
          <path d="M 30 40 L 230 40 L 222 82 L 38 82 Z" fill="url(#hatchHoriz)" opacity=".3"/>
          <path d="M 38 82 L 222 82 L 210 150 L 50 150 Z" fill="url(#hatch2)" opacity={on ? .25 : .6}/>
          {/* inside rim shows glow when on */}
          {on && (
            <path d="M 50 150 L 210 150 L 202 160 L 58 160 Z"
                  fill="hsla(var(--lamp-hue), 70%, 60%, calc(.7 * var(--lamp-intensity)))"/>
          )}
          {/* shade outline */}
          <path d="M 30 40 L 230 40 L 210 150 L 50 150 Z" fill="none" stroke={ink} strokeWidth="1.8" strokeLinejoin="round"/>
          {/* trim lines */}
          <line x1="30" y1="46" x2="230" y2="46" stroke={ink} strokeWidth="1"/>
          <line x1="34" y1="52" x2="226" y2="52" stroke={ink} strokeWidth=".6" opacity=".6"/>
          <line x1="50" y1="144" x2="210" y2="144" stroke={ink} strokeWidth="1"/>
          <line x1="52" y1="148" x2="208" y2="148" stroke={ink} strokeWidth=".6" opacity=".6"/>
          {/* top cap */}
          <ellipse cx="130" cy="40" rx="18" ry="4" fill="#ece2c8" stroke={ink} strokeWidth="1.2"/>
          <ellipse cx="130" cy="40" rx="12" ry="2.5" fill="url(#hatch2)"/>
        </g>

        {/* ===== light beams removed — lamp-on shows as brighter warmer paper halo instead ===== */}

        {/* ===== neck / rod with hatching ===== */}
        <g filter="url(#wobble)">
          <rect x="124" y="150" width="12" height="280" fill="#ece2c8" stroke={ink} strokeWidth="1.3"/>
          <rect x="126" y="150" width="10" height="280" fill="url(#hatch1)" opacity=".45"/>
          {/* decorative rings */}
          {[180, 240, 300, 360].map(y => (
            <g key={y}>
              <rect x="118" y={y} width="24" height="7" fill="#ece2c8" stroke={ink} strokeWidth="1.1"/>
              <rect x="120" y={y+1} width="20" height="2" fill="url(#hatch1)" opacity=".5"/>
            </g>
          ))}
          {/* collar at top of rod */}
          <rect x="118" y="150" width="24" height="14" fill="#ece2c8" stroke={ink} strokeWidth="1.2"/>
          <rect x="120" y="155" width="20" height="4" fill="url(#hatch1)" opacity=".5"/>
        </g>

        {/* ===== base (heavy weighted disc) ===== */}
        <g filter="url(#wobble)">
          <ellipse cx="130" cy="475" rx="94" ry="18" fill="#ece2c8" stroke={ink} strokeWidth="1.6"/>
          <ellipse cx="130" cy="475" rx="94" ry="18" fill="url(#hatch2)" opacity=".4"/>
          <rect x="60" y="448" width="140" height="22" fill="#ece2c8" stroke={ink} strokeWidth="1.4"/>
          <rect x="62" y="450" width="136" height="18" fill="url(#hatch2)" opacity=".35"/>
          <ellipse cx="130" cy="450" rx="70" ry="8" fill="#ece2c8" stroke={ink} strokeWidth="1.2"/>
          <ellipse cx="130" cy="450" rx="66" ry="5" fill="url(#hatch1)" opacity=".5"/>
          {/* cast shadow ellipse on desk */}
          <ellipse cx="130" cy="498" rx="110" ry="8" fill="url(#stipple2)" opacity=".35"/>
        </g>

        {/* ===== pull cord ===== */}
        <g transform={`translate(196, 150)`}>
          <line x1="0" y1="0" x2="0" y2={100 + pull} stroke={ink} strokeWidth="1" filter="url(#wobble)"/>
          {/* beads */}
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={i} cx="0"
                    cy={10 + i * 10 + pull * (i / 10)}
                    r="1.8" fill="#ece2c8" stroke={ink} strokeWidth=".8"/>
          ))}
          {/* tassel */}
          <g transform={`translate(0, ${108 + pull})`} filter="url(#wobble)">
            <rect x="-5" y="0" width="10" height="20" fill="#ece2c8" stroke={ink} strokeWidth="1"/>
            <line x1="-5" y1="6" x2="5" y2="6" stroke={ink} strokeWidth=".6"/>
            <line x1="-5" y1="14" x2="5" y2="14" stroke={ink} strokeWidth=".6"/>
            <path d="M -7 20 L 7 20 L 5 36 L -5 36 Z" fill="#ece2c8" stroke={ink} strokeWidth="1"/>
            <line x1="-3" y1="22" x2="-3" y2="36" stroke={ink} strokeWidth=".5"/>
            <line x1="0" y1="22" x2="0" y2="38" stroke={ink} strokeWidth=".5"/>
            <line x1="3" y1="22" x2="3" y2="36" stroke={ink} strokeWidth=".5"/>
          </g>
        </g>
      </svg>
      <div className="pull-cord"
           onPointerDown={onDown}
           style={{ top: 240 + pull * .9 }}/>
    </div>
  );
}

window.Lamp = Lamp;
