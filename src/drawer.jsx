// drawer.jsx — engraved drawer front (closed) and top-down interior (open)
function DrawerClosed({ onOpen, disabled }) {
  return (
    <div className="drawer-closed" onClick={() => !disabled && onOpen()}>
      <svg className="drawer-front" viewBox="0 0 620 140">
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

          {/* central oval engraved name plate "CABINET · N° 1" */}
          <g transform="translate(310, 70)">
            <ellipse cx="0" cy="0" rx="90" ry="22" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.6"/>
            <ellipse cx="0" cy="0" rx="84" ry="17" fill="none" stroke="#2e1e10" strokeWidth=".7"/>
            <ellipse cx="0" cy="0" rx="80" ry="14" fill="url(#hatch1)" opacity=".35"/>
            <text x="0" y="4" textAnchor="middle"
                  fontFamily="'Special Elite', monospace"
                  fontSize="11"
                  letterSpacing="3"
                  fill="#2e1e10">CABINET · N° 1</text>
          </g>

          {/* dual round brass pull handles — left + right */}
          {[140, 480].map((cx) => (
            <g key={cx} transform={`translate(${cx}, 70)`}>
              {/* outer rim */}
              <circle cx="0" cy="0" r="16" fill="#ece2c8" stroke="#2e1e10" strokeWidth="1.6"/>
              {/* inner ring */}
              <circle cx="0" cy="0" r="12" fill="none" stroke="#2e1e10" strokeWidth=".8"/>
              {/* brushed brass hatch */}
              <circle cx="0" cy="0" r="10" fill="url(#hatch1)" opacity=".55"/>
              {/* center bolt */}
              <circle cx="0" cy="0" r="2.4" fill="#2e1e10"/>
              {/* subtle highlight crescent */}
              <path d="M -8 -5 Q -3 -11 5 -9" fill="none" stroke="#2e1e10" strokeWidth=".5" opacity=".5"/>
            </g>
          ))}
        </g>
      </svg>
      <div className="drawer-callout">
        <span className="dash"/>
        <span>Open the Cabinet</span>
        <span className="dash"/>
      </div>
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
