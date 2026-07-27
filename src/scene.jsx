// scene.jsx — desk band + engraved objects + dust + plate ornaments
function DeskLine() {
  return (
    <svg className="desk-line" viewBox="0 0 1600 70" preserveAspectRatio="none">
      <g filter="url(#wobble)">
        {/* desk top surface — thick edge line */}
        <path d="M 0 8 Q 400 6 800 10 T 1600 8"
              fill="none" stroke="#2e1e10" strokeWidth="2.4"/>
        {/* faint inner top line (depth shadow on surface) */}
        <path d="M 0 16 Q 400 18 800 14 T 1600 16"
              fill="none" stroke="#2e1e10" strokeWidth=".5" opacity=".35"/>
        {/* desk front face (thickness band — subtle hatch) */}
        <rect x="0" y="20" width="1600" height="26" fill="url(#hatchHoriz)" opacity=".42"/>
        {/* desk front bottom edge */}
        <path d="M 0 48 Q 400 50 800 46 T 1600 48"
              fill="none" stroke="#2e1e10" strokeWidth="1.5"/>
        {/* small leg hints — short strokes at far left + right */}
        <path d="M 22 48 L 18 66 M 46 48 L 42 66"
              stroke="#2e1e10" strokeWidth=".9" opacity=".55" fill="none"/>
        <path d="M 1578 48 L 1582 66 M 1554 48 L 1558 66"
              stroke="#2e1e10" strokeWidth=".9" opacity=".55" fill="none"/>
      </g>
    </svg>
  );
}

function Book({ onOpen }) {
  const lang = window.useLang();
  return (
    <div className="book book-door" onClick={onOpen} role="button" tabIndex={0}
         title={window.T.story[lang]} aria-label={window.T.story[lang]}
         onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}>
      <div className="book-cap">
        <span className="gc-eyebrow">{window.T.storyEyebrow[lang]}</span>
        <span className="gc-name">{window.T.story[lang]} <span className="gc-arrow">↗</span></span>
      </div>
      <svg className="book-svg" viewBox="0 0 260 70">
      <g filter="url(#wobble)">
        {/* stacked books */}
        <rect x="10" y="36" width="240" height="22" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
        <rect x="12" y="38" width="236" height="18" fill="url(#hatch1)" opacity=".4"/>
        <rect x="6" y="18" width="220" height="18" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
        <rect x="8" y="20" width="216" height="14" fill="url(#hatch2)" opacity=".35"/>
        <rect x="22" y="0" width="180" height="20" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
        <rect x="24" y="2" width="176" height="16" fill="url(#hatch1)" opacity=".3"/>
        {/* spine details */}
        <line x1="30" y1="8" x2="194" y2="8" stroke="#2e1e10" strokeWidth=".6"/>
        <line x1="40" y1="12" x2="184" y2="12" stroke="#2e1e10" strokeWidth=".4" opacity=".6"/>
        <line x1="20" y1="26" x2="210" y2="26" stroke="#2e1e10" strokeWidth=".6"/>
        <line x1="20" y1="44" x2="248" y2="44" stroke="#2e1e10" strokeWidth=".6"/>
      </g>
      </svg>
    </div>
  );
}

function Mug({ onOpen }) {
  const lang = window.useLang();
  return (
    <div className="mug mug-door" onClick={onOpen} role="button" tabIndex={0}
         title={window.T.worldMap[lang]} aria-label={window.T.worldMap[lang]}
         onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}>
      <div className="mug-cap">
        <span className="gc-eyebrow">{window.T.worldMapEyebrow[lang]}</span>
        <span className="gc-name">{window.T.worldMapName[lang]} <span className="gc-arrow">↗</span></span>
      </div>
      <svg className="mug-svg" viewBox="0 0 140 160">
      <g filter="url(#wobble)">
        {/* handle */}
        <path d="M 100 62 Q 130 64 130 96 Q 130 120 102 120"
              fill="none" stroke="#2e1e10" strokeWidth="2.4"/>
        <path d="M 100 70 Q 120 72 120 96 Q 120 112 102 112"
              fill="none" stroke="#2e1e10" strokeWidth="1.2"/>
        {/* body */}
        <path d="M 18 50 L 108 50 L 104 146 Q 104 154 92 154 L 34 154 Q 22 154 22 146 Z"
              fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.6"/>
        {/* stippled shading on side */}
        <path d="M 68 56 L 104 56 L 102 146 Q 102 152 92 152 L 76 152 Z"
              fill="url(#stipple2)" opacity=".55"/>
        {/* vertical hatch on right */}
        <path d="M 88 58 L 104 58 L 102 148 L 90 148 Z"
              fill="url(#hatchVert)" opacity=".45"/>
        {/* top rim */}
        <ellipse cx="63" cy="50" rx="45" ry="6" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
        <ellipse cx="63" cy="50" rx="41" ry="3.5" fill="url(#hatch2)" opacity=".7"/>
      </g>
      {/* steam — wobbly ink curls */}
      <g filter="url(#wobbleHeavy)" opacity=".6">
        <path d="M 40 42 Q 45 28 38 18 Q 32 6 40 -6"
              fill="none" stroke="#2e1e10" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M 60 44 Q 55 30 62 20 Q 68 8 58 -4"
              fill="none" stroke="#2e1e10" strokeWidth="1" strokeLinecap="round" opacity=".7"/>
      </g>
      </svg>
    </div>
  );
}

function Pen() {
  return (
    <svg className="pen" viewBox="0 0 280 40">
      <g filter="url(#wobble)">
        {/* barrel */}
        <rect x="50" y="12" width="180" height="16" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
        <rect x="52" y="14" width="176" height="12" fill="url(#hatchHoriz)" opacity=".55"/>
        {/* cap */}
        <rect x="46" y="10" width="10" height="20" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.3"/>
        {/* nib section */}
        <rect x="230" y="14" width="32" height="12" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.3"/>
        <rect x="232" y="16" width="28" height="8" fill="url(#hatch2)" opacity=".5"/>
        {/* nib tip */}
        <path d="M 262 14 L 278 20 L 262 26 Z" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.2"/>
        <line x1="262" y1="20" x2="276" y2="20" stroke="#2e1e10" strokeWidth=".5"/>
        {/* decorative rings */}
        <circle cx="72" cy="20" r="3" fill="#ece2c8" stroke="#2e1e10" strokeWidth=".8"/>
        <line x1="100" y1="14" x2="100" y2="26" stroke="#2e1e10" strokeWidth=".5"/>
        <line x1="160" y1="14" x2="160" y2="26" stroke="#2e1e10" strokeWidth=".5"/>
      </g>
    </svg>
  );
}

function Inkwell() {
  return (
    <svg className="inkwell" viewBox="0 0 110 120">
      <g filter="url(#wobble)">
        {/* base */}
        <ellipse cx="55" cy="110" rx="46" ry="7" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
        {/* body */}
        <path d="M 16 42 L 94 42 L 88 106 Q 88 114 78 114 L 32 114 Q 22 114 22 106 Z"
              fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.6"/>
        <path d="M 58 48 L 88 48 L 86 106 Q 86 112 78 112 L 62 112 Z"
              fill="url(#hatch2)" opacity=".6"/>
        {/* neck */}
        <rect x="36" y="26" width="38" height="18" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.5"/>
        <rect x="38" y="28" width="34" height="14" fill="url(#hatch1)" opacity=".4"/>
        {/* opening */}
        <ellipse cx="55" cy="26" rx="19" ry="4" fill="#2e1e10"/>
        <ellipse cx="55" cy="25" rx="16" ry="2.5" fill="#2e1e10"/>
        {/* quill in it */}
        <g transform="translate(55, 25)">
          <line x1="0" y1="0" x2="-22" y2="-80" stroke="#2e1e10" strokeWidth="1.3"/>
          <path d="M -22 -80 Q -36 -74 -34 -50 Q -28 -34 -18 -36 Z"
                fill="url(#hatch1)" stroke="#2e1e10" strokeWidth="1.1"/>
          <line x1="-28" y1="-70" x2="-22" y2="-74" stroke="#2e1e10" strokeWidth=".5"/>
          <line x1="-30" y1="-62" x2="-22" y2="-66" stroke="#2e1e10" strokeWidth=".5"/>
          <line x1="-30" y1="-54" x2="-22" y2="-56" stroke="#2e1e10" strokeWidth=".5"/>
          <line x1="-26" y1="-44" x2="-20" y2="-46" stroke="#2e1e10" strokeWidth=".5"/>
        </g>
      </g>
    </svg>
  );
}

function PlateTitle({ lampOn, drawerOpen }) {
  const lang = window.useLang();
  const title = drawerOpen ? window.T.cabinetOpen[lang] : window.T.deskTitle[lang];
  const figEn = drawerOpen ? 'PL. II — INTERIOR' : 'PL. I — ARRANGEMENT';
  const figZh = drawerOpen ? 'PL. II · 室内' : 'PL. I · 安排';
  const stateEn = lampOn ? 'LIT' : 'UNLIT';
  const stateZh = lampOn ? '灯光' : '未点燃';
  return (
    <div className="plate-title">
      <div className="plate-eyebrow">— FOLIO OF CURIOSITIES · 珍奇收藏集 —</div>
      <div className="orn-row top">
        <span className="orn-rule"/>
        <span className="orn-fleuron">❦</span>
        <span className="orn-rule"/>
      </div>
      <h1>{title}</h1>
      <div className="orn-row bottom">
        <span className="orn-rule with-caps"/>
      </div>
      <div className="fig">{figEn} · {stateEn}</div>
      <div className="fig fig-zh">{figZh} · {stateZh}</div>
    </div>
  );
}

function CornerOrnaments() {
  return (
    <>
      <svg className="corner-orn tl" viewBox="0 0 80 80"><use href="#cornerOrn"/></svg>
      <svg className="corner-orn tr" viewBox="0 0 80 80"><use href="#cornerOrn"/></svg>
      <svg className="corner-orn bl" viewBox="0 0 80 80"><use href="#cornerOrn"/></svg>
      <svg className="corner-orn br" viewBox="0 0 80 80"><use href="#cornerOrn"/></svg>
    </>
  );
}

function Dust({ on }) {
  const motes = React.useMemo(() => (
    Array.from({ length: 18 }, () => ({
      left: 40 + Math.random() * 45,
      top: 25 + Math.random() * 50,
      delay: Math.random() * 6,
      dur: 12 + Math.random() * 10,
      dx: (Math.random() - .5) * 60,
      dy: -100 - Math.random() * 140,
      size: 1.5 + Math.random() * 2,
    }))
  ), []);
  return (
    <div className={`dust ${on ? 'on' : ''}`}>
      {motes.map((m, i) => (
        <span key={i} className="mote" style={{
          left: m.left + '%', top: m.top + '%',
          width: m.size, height: m.size,
          animationDelay: m.delay + 's',
          animationDuration: m.dur + 's',
          '--dx': m.dx + 'px',
          '--dy': m.dy + 'px',
        }}/>
      ))}
    </div>
  );
}

// Globe — a desk globe = 小耳的世界; clicking it sails to the whole-site map at /me.
// Drawn in the same engraving hand as the other desk objects (wobble + hatch).
function Globe({ onOpen }) {
  const lang = window.useLang();
  const ink = '#2e1e10';
  return (
    <div className="globe" onClick={onOpen} role="button" tabIndex={0}
         title={window.T.worldMap[lang]} aria-label={window.T.worldMap[lang]}
         onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}>
      <svg className="globe-svg" viewBox="0 0 170 214">
        {/* wooden stand */}
        <g filter="url(#wobble)" stroke={ink} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="85" cy="204" rx="44" ry="7" fill="#ece2c8" strokeWidth="1.5"/>
          <path d="M 64 204 Q 68 190 76 186 L 94 186 Q 102 190 106 204 Z" fill="#ece2c8" strokeWidth="1.4"/>
          <rect x="79" y="156" width="12" height="30" fill="#ece2c8" strokeWidth="1.3"/>
          <rect x="81" y="158" width="8" height="26" fill="url(#hatchVert)" opacity=".4"/>
          <circle cx="85" cy="156" r="4" fill="#ece2c8" strokeWidth="1"/>
        </g>
        {/* brass meridian ring */}
        <ellipse cx="85" cy="90" rx="61" ry="63" fill="none" stroke={ink} strokeWidth="1.6" filter="url(#wobble)"/>
        {/* the sphere */}
        <g filter="url(#wobble)" stroke={ink} fill="none" strokeLinecap="round">
          <circle cx="85" cy="90" r="56" fill="#ece2c8" strokeWidth="1.7"/>
          {/* longitude meridians */}
          <ellipse cx="85" cy="90" rx="19" ry="56" strokeWidth=".7"/>
          <ellipse cx="85" cy="90" rx="38" ry="56" strokeWidth=".55" opacity=".8"/>
          {/* latitude parallels */}
          <line x1="30" y1="90" x2="140" y2="90" strokeWidth=".8"/>
          <path d="M 38 64 Q 85 58 132 64" strokeWidth=".5" opacity=".75"/>
          <path d="M 38 116 Q 85 122 132 116" strokeWidth=".5" opacity=".75"/>
          <path d="M 52 45 Q 85 41 118 45" strokeWidth=".45" opacity=".6"/>
          <path d="M 52 135 Q 85 139 118 135" strokeWidth=".45" opacity=".6"/>
          {/* hinted land masses */}
          <path d="M 48 60 Q 66 50 82 60 Q 92 72 76 82 Q 58 86 50 72 Z" fill="url(#hatch1)" strokeWidth="1"/>
          <path d="M 96 98 Q 118 92 121 110 Q 118 124 101 123 Q 90 116 92 104 Z" fill="url(#hatch1)" strokeWidth="1"/>
          <path d="M 66 106 Q 80 102 83 114 Q 78 123 67 119 Z" fill="url(#hatch1)" strokeWidth=".8"/>
          {/* soft volume shade on the right limb */}
          <path d="M 128 58 A 56 56 0 0 1 122 130" stroke={ink} strokeWidth="7" opacity=".05"/>
          {/* tilted axis with knobs */}
          <line x1="107" y1="30" x2="63" y2="150" strokeWidth="1.2"/>
          <circle cx="107" cy="30" r="2.6" fill="#ece2c8" strokeWidth="1"/>
          <circle cx="63" cy="150" r="2.6" fill="#ece2c8" strokeWidth="1"/>
        </g>
      </svg>
      <div className="globe-cap">
        <span className="gc-eyebrow">{window.T.worldMapEyebrow[lang]}</span>
        <span className="gc-name">{window.T.worldMapName[lang]} <span className="gc-arrow">↗</span></span>
      </div>
    </div>
  );
}

// HeroDesk — the rendered engraving desk (raster hero) + 2.5D parallax + ambient life.
// Alternate raster desk concept. The live room uses one About entry leading to /me.
function HeroDesk({ onStory, onWorld }) {
  const lang = window.useLang();
  const T = window.T;
  const wrapRef = React.useRef(null);
  React.useEffect(() => {
    const onMove = (e) => {
      const w = wrapRef.current; if (!w) return;
      const tx = (e.clientX / window.innerWidth - .5), ty = (e.clientY / window.innerHeight - .5);
      w.style.transform =
        `perspective(1500px) rotateY(${tx * 2.4}deg) rotateX(${-ty * 1.7}deg) scale(1.07)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  const Hot = ({ cls, x, y, eyebrow, name, onClick, aria }) => (
    <button className={`hotspot ${cls}`} style={{ left: x, top: y }} onClick={onClick} aria-label={aria}>
      <span className="hs-dot" aria-hidden="true"/>
      <span className="hs-cap">
        <span className="gc-eyebrow">{eyebrow}</span>
        <span className="gc-name">{name} <span className="gc-arrow">↗</span></span>
      </span>
    </button>
  );
  return (
    <div className="hero-desk">
      <div className="hero-wrap" ref={wrapRef}>
        <img className="hero-img" src="maps/desk-A.jpg" alt=""/>
        <div className="hero-lampglow" aria-hidden="true"/>
        <div className="hero-vig" aria-hidden="true"/>
        <Hot cls="hs-story" x="27%" y="72%"
             eyebrow={T.storyEyebrow[lang]} name={T.story[lang]}
             onClick={onStory} aria={T.story[lang]}/>
        <Hot cls="hs-world" x="63%" y="46%"
             eyebrow={T.worldMapEyebrow[lang]} name={T.worldMapName[lang]}
             onClick={onWorld} aria={T.worldMap[lang]}/>
      </div>
    </div>
  );
}

window.DeskLine = DeskLine;
window.Globe = Globe;
window.HeroDesk = HeroDesk;
window.Book = Book;
window.Mug = Mug;
window.Pen = Pen;
window.Inkwell = Inkwell;
window.PlateTitle = PlateTitle;
window.CornerOrnaments = CornerOrnaments;
window.Dust = Dust;
