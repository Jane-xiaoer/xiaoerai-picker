// engraving.jsx — reusable engraving primitives: wobbly stroke, hatched fill
// Provides wrappers that emulate hand-inked natural-history plate style.

// InkStroke: an SVG <path> that looks hand-drawn (wobble filter + irregular width).
// Used as a component-level wrapper — caller just supplies `d` and optional stroke.
function InkStroke({ d, sw = 1.6, stroke = '#2e1e10', opacity = 1, filter = 'url(#wobble)', strokeLinecap = 'round' }) {
  return (
    <path d={d}
          fill="none"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap={strokeLinecap}
          strokeLinejoin="round"
          opacity={opacity}
          filter={filter}/>
  );
}

// HatchedShape: draw a shape's silhouette, fill with a hatch pattern.
// `d` is the path data; variants: hatch1 (light), hatch2 (med), hatch3 (heavy), stipple1/2.
function HatchedShape({ d, fill = 'url(#hatch2)', stroke = '#2e1e10', sw = 1.4 }) {
  return (
    <g filter="url(#wobble)">
      <path d={d} fill={fill} stroke="none"/>
      <path d={d} fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round"/>
    </g>
  );
}

window.InkStroke = InkStroke;
window.HatchedShape = HatchedShape;
