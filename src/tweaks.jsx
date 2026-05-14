// tweaks.jsx — floating tweaks panel (engraving-consistent)
function Tweaks({ visible, state, setState }) {
  if (!visible) return null;
  const presets = [
    { name: 'Candle',   hue: 28, sat: 70, light: 55 },
    { name: 'Tungsten', hue: 38, sat: 55, light: 58 },
    { name: 'Moon',     hue: 210, sat: 20, light: 62 },
    { name: 'Aged',     hue: 46, sat: 50, light: 52 },
    { name: 'Phthisic', hue: 130, sat: 30, light: 50 },
    { name: 'Dusk',     hue: 12, sat: 65, light: 48 },
  ];
  const hslPreview = (p) => `hsl(${p.hue} ${p.sat}% ${p.light}%)`;
  const isActive = (p) => p.hue === state.hue && p.sat === state.sat && p.light === state.light;
  return (
    <div className="tweaks">
      <h4>Tweaks · Lamp</h4>
      <div className="row">
        <label>Presets</label>
        <div className="swatches">
          {presets.map(p => (
            <div key={p.name}
                 className={`sw ${isActive(p) ? 'on' : ''}`}
                 style={{ background: hslPreview(p) }}
                 title={p.name}
                 onClick={() => setState({ ...state, ...p })}/>
          ))}
        </div>
      </div>
      <div className="row">
        <label>Hue <span className="value">{state.hue}</span></label>
        <input type="range" min="0" max="360" value={state.hue}
               onChange={e => setState({ ...state, hue: +e.target.value })}/>
      </div>
      <div className="row">
        <label>Saturation <span className="value">{state.sat}%</span></label>
        <input type="range" min="0" max="100" value={state.sat}
               onChange={e => setState({ ...state, sat: +e.target.value })}/>
      </div>
      <div className="row">
        <label>Intensity <span className="value">{state.intensity.toFixed(2)}</span></label>
        <input type="range" min="0.2" max="1.6" step="0.05" value={state.intensity}
               onChange={e => setState({ ...state, intensity: +e.target.value })}/>
      </div>
    </div>
  );
}
window.Tweaks = Tweaks;
