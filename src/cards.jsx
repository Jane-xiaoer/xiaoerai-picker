// cards.jsx — four engraved folio cards in the drawer, with flip+fly-to-center animation
const CARDS = [
  { id: 'arsenal',  title: '弹药库', subtitle: 'Arsenal · 350+ Tools',   roman: 'I',   symbol: 'anvil',    href: 'https://tools.xiaoerai.xyz' },
  { id: 'zoetrope', title: '走马灯', subtitle: 'Zoetrope · AI Videos',   roman: 'II',  symbol: 'scroll',   href: 'https://video.xiaoerai.xyz' },
  { id: 'curio',    title: '百物匣', subtitle: 'Curio Box · Artifacts',  roman: 'III', symbol: 'envelope', href: 'https://store.xiaoerai.xyz' },
];

// Layout: 3 cards in a fan across the drawer (percent of overlay)
const LAYOUT = [
  { x: 22, y: 50, rot: -3.5 },
  { x: 50, y: 46, rot:  1.5 },
  { x: 78, y: 52, rot:  4.5 },
];

function CardSymbol({ symbol }) {
  // engraved central emblem for the card front
  const ink = '#2e1e10';
  if (symbol === 'anvil') return (
    <g filter="url(#wobble)" stroke={ink} fill="none" strokeLinecap="round">
      <path d="M 30 52 L 90 52 L 96 58 L 24 58 Z" fill="url(#hatch2)" strokeWidth="1.4"/>
      <path d="M 34 58 L 86 58 L 82 72 L 38 72 Z" fill="url(#hatch1)" strokeWidth="1.2"/>
      <path d="M 50 72 L 70 72 L 68 84 L 52 84 Z" strokeWidth="1.3"/>
      <path d="M 44 84 L 76 84 L 80 90 L 40 90 Z" strokeWidth="1.3" fill="url(#hatch2)"/>
      <path d="M 24 52 Q 14 48 20 40 Q 30 38 32 48" strokeWidth="1.2"/>
    </g>
  );
  if (symbol === 'scroll') return (
    <g filter="url(#wobble)" stroke={ink} fill="none" strokeLinecap="round">
      <rect x="28" y="32" width="64" height="60" strokeWidth="1.4" fill="#ece2c8"/>
      <rect x="30" y="34" width="60" height="56" fill="url(#hatch1)" opacity=".3"/>
      <line x1="36" y1="42" x2="84" y2="42" strokeWidth=".6"/>
      <line x1="36" y1="50" x2="84" y2="50" strokeWidth=".4"/>
      <line x1="36" y1="58" x2="80" y2="58" strokeWidth=".4"/>
      <line x1="36" y1="66" x2="84" y2="66" strokeWidth=".4"/>
      <line x1="36" y1="74" x2="76" y2="74" strokeWidth=".4"/>
      <line x1="36" y1="82" x2="82" y2="82" strokeWidth=".4"/>
      <circle cx="60" cy="28" r="3" strokeWidth="1.2" fill={ink}/>
    </g>
  );
  if (symbol === 'owl') return (
    <g filter="url(#wobble)" stroke={ink} fill="none" strokeLinecap="round">
      <path d="M 40 36 Q 60 22 80 36 Q 86 60 80 84 Q 60 96 40 84 Q 34 60 40 36 Z"
            strokeWidth="1.5" fill="url(#hatch1)"/>
      {/* feather stippling */}
      <path d="M 44 46 Q 60 42 76 46 Q 78 60 76 74 Q 60 80 44 74 Q 42 60 44 46 Z"
            fill="url(#stipple2)" opacity=".7"/>
      {/* eyes */}
      <circle cx="52" cy="52" r="6" strokeWidth="1.3" fill="#ece2c8"/>
      <circle cx="68" cy="52" r="6" strokeWidth="1.3" fill="#ece2c8"/>
      <circle cx="52" cy="52" r="2.2" fill={ink}/>
      <circle cx="68" cy="52" r="2.2" fill={ink}/>
      {/* beak */}
      <path d="M 60 58 L 56 64 L 64 64 Z" fill={ink}/>
      {/* tufts */}
      <path d="M 44 38 L 46 30" strokeWidth="1.2"/>
      <path d="M 76 38 L 74 30" strokeWidth="1.2"/>
    </g>
  );
  if (symbol === 'envelope') return (
    <g filter="url(#wobble)" stroke={ink} fill="none" strokeLinecap="round">
      <rect x="22" y="40" width="76" height="50" strokeWidth="1.5" fill="#ece2c8"/>
      <rect x="24" y="42" width="72" height="46" fill="url(#hatch1)" opacity=".25"/>
      <path d="M 22 40 L 60 70 L 98 40" strokeWidth="1.4"/>
      <path d="M 22 90 L 48 65 M 98 90 L 72 65" strokeWidth="1"/>
      {/* wax seal */}
      <circle cx="60" cy="78" r="8" fill={ink} stroke={ink} strokeWidth="1"/>
      <path d="M 56 74 L 64 82 M 64 74 L 56 82" stroke="#ece2c8" strokeWidth="1"/>
    </g>
  );
  return null;
}

function CardFace({ card, back }) {
  const ink = '#2e1e10';
  if (back) {
    // back: monogram pattern
    return (
      <svg viewBox="0 0 280 400" width="100%" height="100%">
        <rect width="280" height="400" fill="#ece2c8"/>
        <rect width="280" height="400" fill="url(#hatch1)" opacity=".25"/>
        <g filter="url(#wobble)">
          <rect x="16" y="16" width="248" height="368" fill="none" stroke={ink} strokeWidth="1.3"/>
          <rect x="22" y="22" width="236" height="356" fill="none" stroke={ink} strokeWidth=".5" opacity=".5"/>
          {/* repeating monogram */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 4 }).map((__, c) => (
              <text key={`${r}-${c}`} x={50 + c * 60} y={70 + r * 55}
                    fontFamily="'IM Fell English', serif" fontStyle="italic"
                    fontSize="20" fill={ink} opacity=".3"
                    textAnchor="middle">✦</text>
            ))
          )}
          <text x="140" y="210" textAnchor="middle"
                fontFamily="'Cormorant Garamond', serif" fontStyle="italic"
                fontSize="26" fill={ink}>Folio</text>
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 280 400" width="100%" height="100%">
      <rect width="280" height="400" fill="#ece2c8"/>
      {/* paper texture */}
      <rect width="280" height="400" fill="url(#hatch1)" opacity=".18"/>
      <g filter="url(#wobble)">
        {/* double border */}
        <rect x="14" y="14" width="252" height="372" fill="none" stroke={ink} strokeWidth="1.6"/>
        <rect x="20" y="20" width="240" height="360" fill="none" stroke={ink} strokeWidth=".5" opacity=".6"/>
        {/* corner flourishes */}
        <g><use href="#cornerOrn" x="14" y="14" width="36" height="36" opacity=".7"/></g>
        <g transform="translate(266 14) scale(-1 1)"><use href="#cornerOrn" width="36" height="36" opacity=".7"/></g>
        <g transform="translate(14 386) scale(1 -1)"><use href="#cornerOrn" width="36" height="36" opacity=".7"/></g>
        <g transform="translate(266 386) scale(-1 -1)"><use href="#cornerOrn" width="36" height="36" opacity=".7"/></g>

        {/* Roman numeral badge */}
        <g transform="translate(140 58)">
          <circle r="22" fill="#ece2c8" stroke={ink} strokeWidth="1.3"/>
          <circle r="18" fill="none" stroke={ink} strokeWidth=".5"/>
          <text textAnchor="middle" y="7"
                fontFamily="'IM Fell English', serif"
                fontSize="22" fill={ink}>{card.roman}</text>
        </g>

        {/* rule */}
        <line x1="50" y1="92" x2="230" y2="92" stroke={ink} strokeWidth=".8"/>

        {/* central emblem */}
        <g transform="translate(80 130)">
          <CardSymbol symbol={card.symbol}/>
        </g>

        {/* title */}
        <text x="140" y="280" textAnchor="middle"
              fontFamily="'Cormorant Garamond', serif" fontStyle="italic"
              fontSize="32" fill={ink}>{card.title}</text>
        {/* ornament line */}
        <g transform="translate(140 298)">
          <line x1="-60" y1="0" x2="-12" y2="0" stroke={ink} strokeWidth=".8"/>
          <line x1="12" y1="0" x2="60" y2="0" stroke={ink} strokeWidth=".8"/>
          <circle r="2" fill={ink}/>
        </g>
        {/* subtitle */}
        <text x="140" y="322" textAnchor="middle"
              fontFamily="'Special Elite', monospace"
              fontSize="10" letterSpacing="3" fill={ink}>
          {card.subtitle.toUpperCase()}
        </text>
        {/* bottom plate number */}
        <text x="140" y="360" textAnchor="middle"
              fontFamily="'Special Elite', monospace"
              fontSize="9" letterSpacing="2" fill={ink} opacity=".55">
          — FIG. {card.roman} —
        </text>
      </g>
    </svg>
  );
}

function Card({ card, i, selectedId, flyingId, onPick }) {
  const pos = LAYOUT[i];
  const isFlying = flyingId === card.id;
  const isSelected = selectedId === card.id;
  const isOther = flyingId && flyingId !== card.id;

  let style = {
    left: `calc(${pos.x}% - 140px)`,
    top: `calc(${pos.y}% - 200px)`,
    transform: `rotate(${pos.rot}deg)`,
  };
  let cls = 'card-slot';
  if (isFlying) {
    cls += ' flying flipping';
    style = {
      left: '50%', top: '50%',
      transform: `translate(-50%, -50%) scale(1.8) rotate(0deg)`,
      zIndex: 50,
    };
  } else if (isOther) {
    style.opacity = 0;
    style.transform = `rotate(${pos.rot}deg) translateY(40px) scale(.8)`;
    style.filter = 'blur(3px)';
  }

  return (
    <div className={cls} style={style}
         onClick={() => !flyingId && onPick(card.id)}>
      <div className="card-inner">
        <div className="face front">
          <CardFace card={card}/>
        </div>
        <div className="face back">
          <CardFace card={card} back/>
        </div>
      </div>
    </div>
  );
}

function Cards({ open, flyingId, onPick }) {
  return (
    <div className={`cards-layer ${open ? 'active' : ''}`}>
      {CARDS.map((c, i) => (
        <Card key={c.id} card={c} i={i} flyingId={flyingId} onPick={onPick}/>
      ))}
    </div>
  );
}

window.CARDS = CARDS;
window.Cards = Cards;
