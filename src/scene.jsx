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

function Book() {
  return (
    <svg className="book" viewBox="0 0 260 70">
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
  );
}

function Mug() {
  return (
    <svg className="mug" viewBox="0 0 140 160">
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
  const title = drawerOpen ? 'Cabinet, Open' : "Xiaoer's Desk";
  const fig = drawerOpen ? 'PL. II — INTERIOR' : 'PL. I — ARRANGEMENT';
  const state = lampOn ? 'LIT' : 'UNLIT';
  return (
    <div className="plate-title">
      <div className="orn-row top">
        <span className="orn-rule"/>
        <span className="orn-fleuron">❦</span>
        <span className="orn-rule"/>
      </div>
      <h1>{title}</h1>
      <div className="orn-row bottom">
        <span className="orn-rule with-caps"/>
      </div>
      <div className="fig">{fig} · {state}</div>
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

window.DeskLine = DeskLine;
window.Book = Book;
window.Mug = Mug;
window.Pen = Pen;
window.Inkwell = Inkwell;
window.PlateTitle = PlateTitle;
window.CornerOrnaments = CornerOrnaments;
window.Dust = Dust;
