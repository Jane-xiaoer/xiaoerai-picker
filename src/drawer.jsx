// drawer.jsx — engraved drawer front (closed) and top-down interior (open)
function DrawerClosed({ onOpen, disabled }) {
  return (
    <div className="drawer-closed" onClick={() => !disabled && onOpen()}>
      <svg viewBox="0 0 620 140">
        <g filter="url(#wobble)">
          {/* panel */}
          <rect x="4" y="4" width="612" height="132" fill="#ece2c8" stroke="#2e1e10" strokeWidth="2"/>
          {/* woodgrain */}
          <rect x="8" y="8" width="604" height="124" fill="url(#woodgrain)" opacity=".7"/>
          {/* dense hatch shadow under top edge */}
          <rect x="8" y="8" width="604" height="18" fill="url(#hatchHoriz)" opacity=".35"/>
          <rect x="8" y="114" width="604" height="18" fill="url(#hatchHoriz)" opacity=".25"/>
          {/* inner bevel rectangle */}
          <rect x="20" y="20" width="580" height="100" fill="none" stroke="#2e1e10" strokeWidth="1.4"/>
          <rect x="24" y="24" width="572" height="92" fill="none" stroke="#2e1e10" strokeWidth=".6" opacity=".6"/>

          {/* brass handle — oval pull */}
          <g transform="translate(310, 70)">
            <ellipse cx="0" cy="0" rx="58" ry="18" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.6"/>
            <ellipse cx="0" cy="0" rx="52" ry="14" fill="none" stroke="#2e1e10" strokeWidth=".8"/>
            <ellipse cx="0" cy="0" rx="48" ry="12" fill="url(#hatch1)" opacity=".5"/>
            {/* bolts */}
            <circle cx="-44" cy="0" r="3" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1"/>
            <circle cx="-44" cy="0" r="1.2" fill="#2e1e10"/>
            <circle cx="44" cy="0" r="3" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1"/>
            <circle cx="44" cy="0" r="1.2" fill="#2e1e10"/>
            {/* engraved flourish above handle */}
            <path d="M -30 -24 Q 0 -30 30 -24" fill="none" stroke="#2e1e10" strokeWidth=".8"/>
            <circle cx="0" cy="-26" r="1.3" fill="#2e1e10"/>
          </g>

          {/* escutcheons left + right */}
          {[100, 520].map((x) => (
            <g key={x} transform={`translate(${x}, 70)`}>
              <rect x="-16" y="-18" width="32" height="36" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.3"/>
              <rect x="-13" y="-15" width="26" height="30" fill="none" stroke="#2e1e10" strokeWidth=".6"/>
              <circle cx="0" cy="-4" r="4" fill="#2e1e10"/>
              <rect x="-1.5" y="-4" width="3" height="14" fill="#2e1e10"/>
              {/* hatching */}
              <rect x="-14" y="-16" width="28" height="32" fill="url(#hatch1)" opacity=".35"/>
            </g>
          ))}

          {/* engraved label plate */}
          <g transform="translate(310, 26)">
            <rect x="-50" y="-9" width="100" height="14" fill="#ece2c8" stroke="#2e1e10" strokeWidth=".8"/>
            <text x="0" y="1.5" textAnchor="middle"
                  fontFamily="'Special Elite', monospace"
                  fontSize="8"
                  letterSpacing="2"
                  fill="#2e1e10">CABINET · N° 11</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

// Drawer interior (top-down view). Rendered as a single SVG that frames the whole overlay.
function DrawerOverlay({ open, dimmed, children }) {
  return (
    <div className={`drawer-overlay ${open ? 'open' : ''} ${dimmed ? 'dimmed' : ''}`}>
      <div className="drawer-box">
        <svg className="drawer-svg" viewBox="0 0 1100 680" preserveAspectRatio="none">
          <g filter="url(#wobble)">
            {/* outer drawer frame */}
            <rect x="4" y="4" width="1092" height="672" fill="#ece2c8" stroke="#2e1e10" strokeWidth="2.4"/>
            {/* outer plank grain */}
            <rect x="4" y="4" width="1092" height="672" fill="url(#woodgrain)" opacity=".6"/>
            {/* inner well — darker (velvet lining) */}
            <rect x="36" y="36" width="1028" height="608" fill="#c8b488" stroke="#2e1e10" strokeWidth="1.8"/>
            {/* velvet texture via cross-hatch */}
            <rect x="40" y="40" width="1020" height="600" fill="url(#hatch3)" opacity=".5"/>
            <rect x="40" y="40" width="1020" height="600" fill="url(#stippleDense)" opacity=".35"/>
            {/* inner bevel */}
            <rect x="40" y="40" width="1020" height="600" fill="none" stroke="#2e1e10" strokeWidth=".8" opacity=".6"/>

            {/* compartment dividers — wood strips */}
            <rect x="540" y="40" width="20" height="600" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
            <rect x="542" y="42" width="16" height="596" fill="url(#woodgrain)" opacity=".7"/>
            <rect x="40" y="330" width="1020" height="20" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.4"/>
            <rect x="42" y="332" width="1016" height="16" fill="url(#woodgrain)" opacity=".7"/>

            {/* compartment numerals in the corners */}
            {[
              { x: 70, y: 80, label: 'I' },
              { x: 1030, y: 80, label: 'II' },
              { x: 70, y: 660, label: 'III' },
              { x: 1030, y: 660, label: 'IV' },
            ].map((n, i) => (
              <text key={i} x={n.x} y={n.y}
                    textAnchor={n.x < 500 ? 'start' : 'end'}
                    fontFamily="'IM Fell English', 'Cormorant Garamond', serif"
                    fontStyle="italic"
                    fontSize="22"
                    opacity=".35"
                    fill="#2e1e10">{n.label}</text>
            ))}

            {/* warm light spill from above (since lamp is lit) */}
            <ellipse cx="550" cy="120" rx="520" ry="220"
                     fill="hsla(var(--lamp-hue), 60%, 68%, calc(.3 * var(--lamp-intensity)))"
                     opacity=".8"/>
          </g>
        </svg>
        {children}
      </div>
    </div>
  );
}

window.DrawerClosed = DrawerClosed;
window.DrawerOverlay = DrawerOverlay;
