// pages.jsx — four folio content pages, engraving-style
const { CARDS } = window;

function PagePlate({ card, children, onBack }) {
  return (
    <div className="folio-page">
      <button className="back-btn" onClick={onBack}>← Back to Cabinet</button>
      <div className="folio-inner">
        <header className="folio-head">
          <div className="folio-eyebrow">— Folio · Plate {card.roman} —</div>
          <h1 className="folio-title">{card.title}</h1>
          <div className="folio-sub">{card.subtitle}</div>
          <div className="folio-rule">
            <svg viewBox="0 0 400 20" preserveAspectRatio="none">
              <g filter="url(#wobble)" stroke="#2e1e10" fill="none">
                <line x1="20" y1="10" x2="180" y2="10" strokeWidth="1"/>
                <circle cx="200" cy="10" r="3" fill="#2e1e10"/>
                <path d="M 193 10 Q 200 4 207 10 Q 200 16 193 10" fill="none" strokeWidth=".6"/>
                <line x1="220" y1="10" x2="380" y2="10" strokeWidth="1"/>
              </g>
            </svg>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}

function WorkPage({ card, onBack }) {
  const works = [
    { n: 'I',   name: 'The Luminous Ledger',  year: 'MMXXII', kind: 'Interface · Finance', note: 'A dashboard that rewards restraint.' },
    { n: 'II',  name: 'Cabinet N° VII',       year: 'MMXXIII', kind: 'Site · Portfolio',    note: 'Furniture, rendered in pixels.' },
    { n: 'III', name: 'Herbarium',            year: 'MMXXIII', kind: 'App · Taxonomy',      note: 'A field guide for urban flora.' },
    { n: 'IV',  name: 'Vespers',              year: 'MMXXIV',  kind: 'Tool · Writing',      note: 'Longform editor, liturgical calm.' },
    { n: 'V',   name: 'Orrery',               year: 'MMXXIV',  kind: 'Viz · Astronomy',     note: 'A small, faithful solar system.' },
    { n: 'VI',  name: 'Signal Corps',         year: 'MMXXV',   kind: 'Brand · Identity',    note: 'Mark, grid, and a kept promise.' },
  ];
  return (
    <PagePlate card={card} onBack={onBack}>
      <div className="works-grid">
        {works.map((w, i) => (
          <article key={w.n} className="work-card">
            <div className="work-plate">
              <svg viewBox="0 0 200 140" width="100%" height="100%">
                <rect width="200" height="140" fill="#ece2c8"/>
                <rect width="200" height="140" fill="url(#hatch1)" opacity=".2"/>
                <g filter="url(#wobble)" stroke="#2e1e10" fill="none">
                  <rect x="6" y="6" width="188" height="128" strokeWidth="1.2"/>
                  <rect x="10" y="10" width="180" height="120" strokeWidth=".4" opacity=".6"/>
                  {/* stylized plate illustration varies by index */}
                  {i === 0 && <g><rect x="40" y="80" width="30" height="40" fill="url(#hatch2)" strokeWidth="1"/><rect x="80" y="60" width="30" height="60" fill="url(#hatch3)" strokeWidth="1"/><rect x="120" y="40" width="30" height="80" fill="url(#hatch2)" strokeWidth="1"/></g>}
                  {i === 1 && <g><rect x="30" y="30" width="140" height="90" strokeWidth="1.2"/><line x1="100" y1="30" x2="100" y2="120" strokeWidth=".6"/><line x1="30" y1="75" x2="170" y2="75" strokeWidth=".6"/><rect x="36" y="36" width="58" height="33" fill="url(#hatch1)"/><rect x="106" y="81" width="58" height="33" fill="url(#hatch2)"/></g>}
                  {i === 2 && <g><path d="M 100 30 Q 80 60 100 100 Q 120 60 100 30 Z" fill="url(#hatch1)" strokeWidth="1"/><line x1="100" y1="40" x2="100" y2="120" strokeWidth=".8"/><path d="M 100 60 L 82 80" strokeWidth=".6"/><path d="M 100 60 L 118 80" strokeWidth=".6"/><path d="M 100 80 L 78 100" strokeWidth=".6"/><path d="M 100 80 L 122 100" strokeWidth=".6"/></g>}
                  {i === 3 && <g><rect x="30" y="30" width="140" height="90" strokeWidth="1.2" fill="#ece2c8"/><line x1="50" y1="50" x2="150" y2="50" strokeWidth=".5"/><line x1="50" y1="62" x2="150" y2="62" strokeWidth=".5"/><line x1="50" y1="74" x2="140" y2="74" strokeWidth=".5"/><line x1="50" y1="86" x2="150" y2="86" strokeWidth=".5"/><line x1="50" y1="98" x2="130" y2="98" strokeWidth=".5"/></g>}
                  {i === 4 && <g><circle cx="100" cy="75" r="8" fill="#2e1e10"/><circle cx="100" cy="75" r="22" strokeWidth=".6"/><circle cx="100" cy="75" r="38" strokeWidth=".5"/><circle cx="100" cy="75" r="54" strokeWidth=".4"/><circle cx="78" cy="75" r="2" fill="#2e1e10"/><circle cx="138" cy="75" r="3" fill="#2e1e10"/><circle cx="46" cy="75" r="2.5" fill="#2e1e10"/></g>}
                  {i === 5 && <g><circle cx="100" cy="75" r="36" strokeWidth="1.4" fill="url(#hatch1)"/><text x="100" y="83" textAnchor="middle" fontFamily="'IM Fell English', serif" fontSize="30" fill="#2e1e10">S</text></g>}
                </g>
              </svg>
            </div>
            <div className="work-meta">
              <div className="work-n">Fig. {w.n}</div>
              <h3>{w.name}</h3>
              <div className="work-kind">{w.kind} · {w.year}</div>
              <p>{w.note}</p>
            </div>
          </article>
        ))}
      </div>
    </PagePlate>
  );
}

function IntroPage({ card, onBack }) {
  const timeline = [
    { year: 'MMXVIII', t: 'Departed architecture school; took up UI.' },
    { year: 'MMXIX',   t: 'First product shipped: a reading app.' },
    { year: 'MMXXI',   t: 'Joined a small studio; learned restraint.' },
    { year: 'MMXXIII', t: 'Independent practice. Quiet list of clients.' },
    { year: 'MMXXV',   t: 'Teaching, writing, building this cabinet.' },
  ];
  return (
    <PagePlate card={card} onBack={onBack}>
      <div className="intro-cols">
        <section className="intro-bio">
          <p className="dropcap">
            <span className="dc">A</span>uthor and illustrator of interfaces, trained first
            in drawing and later in building. My work sits in the seam between
            the hand and the screen — a long sentence for "I make software that
            feels drawn, not generated."
          </p>
          <p>
            I take small commissions from small teams. I favour clients who read
            their own email, who have the patience for a second draft, and who
            are delighted by craft in places nobody will look.
          </p>
          <p>
            Before this I was briefly a bookbinder, which explains most of my
            preferences. The rest is owed to a cat named Figaro.
          </p>
        </section>
        <aside className="intro-timeline">
          <div className="tl-head">— Chronology —</div>
          <ol>
            {timeline.map(e => (
              <li key={e.year}>
                <span className="tl-year">{e.year}</span>
                <span className="tl-mark"/>
                <span className="tl-t">{e.t}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </PagePlate>
  );
}

function AboutPage({ card, onBack }) {
  const tenets = [
    { n: 'I',   t: 'Begin in pencil. Commit in ink.' },
    { n: 'II',  t: 'The grid is a trellis, not a cage.' },
    { n: 'III', t: 'Prefer specimens to diagrams.' },
    { n: 'IV',  t: 'Every screen is a still life.' },
    { n: 'V',   t: 'Leave the margin wider than you think.' },
  ];
  return (
    <PagePlate card={card} onBack={onBack}>
      <div className="about-cols">
        <div className="about-portrait">
          <svg viewBox="0 0 280 360" width="100%" height="100%">
            <rect width="280" height="360" fill="#ece2c8"/>
            <rect width="280" height="360" fill="url(#hatch1)" opacity=".2"/>
            <g filter="url(#wobble)" stroke="#2e1e10" fill="none" strokeLinecap="round">
              <rect x="14" y="14" width="252" height="332" strokeWidth="1.4"/>
              <rect x="20" y="20" width="240" height="320" strokeWidth=".5" opacity=".5"/>
              {/* engraved portrait */}
              <ellipse cx="140" cy="150" rx="56" ry="72" strokeWidth="1.6" fill="url(#hatch1)"/>
              <ellipse cx="140" cy="150" rx="48" ry="62" fill="url(#stipple2)" opacity=".6"/>
              {/* hair */}
              <path d="M 86 120 Q 96 70 140 68 Q 184 70 194 124 Q 190 98 168 92 Q 154 98 140 94 Q 126 98 112 92 Q 90 98 86 120 Z"
                    fill="url(#hatch3)" strokeWidth="1.2"/>
              {/* eyes */}
              <ellipse cx="122" cy="148" rx="5" ry="3" strokeWidth="1" fill="#2e1e10"/>
              <ellipse cx="158" cy="148" rx="5" ry="3" strokeWidth="1" fill="#2e1e10"/>
              {/* brow */}
              <path d="M 114 138 Q 122 134 130 138" strokeWidth="1"/>
              <path d="M 150 138 Q 158 134 166 138" strokeWidth="1"/>
              {/* nose */}
              <path d="M 140 152 Q 138 166 142 176 Q 148 178 146 172" strokeWidth=".9"/>
              {/* mouth */}
              <path d="M 128 194 Q 140 198 152 194" strokeWidth="1"/>
              {/* neck + collar */}
              <path d="M 120 216 L 120 238 L 160 238 L 160 216" strokeWidth="1.2"/>
              <path d="M 100 246 Q 140 238 180 246 L 180 280 L 100 280 Z" strokeWidth="1.3" fill="url(#hatch2)"/>
              {/* collar hatching */}
              <line x1="110" y1="256" x2="170" y2="256" strokeWidth=".5"/>
              <line x1="110" y1="262" x2="170" y2="262" strokeWidth=".5"/>
              {/* shoulder shading */}
              <path d="M 80 280 L 200 280 L 220 340 L 60 340 Z" fill="url(#hatch2)" strokeWidth="1.3"/>
              {/* caption */}
              <line x1="40" y1="314" x2="240" y2="314" strokeWidth=".6" opacity=".5"/>
            </g>
            <text x="140" y="328" textAnchor="middle"
                  fontFamily="'Cormorant Garamond', serif" fontStyle="italic"
                  fontSize="14" fill="#2e1e10">— The Author, æt. XXX —</text>
          </svg>
        </div>
        <div className="about-body">
          <h3 className="tenets-h">Five Tenets of Practice</h3>
          <ol className="tenets">
            {tenets.map(x => (
              <li key={x.n}>
                <span className="tn">{x.n}.</span>
                <span className="tt">{x.t}</span>
              </li>
            ))}
          </ol>
          <div className="about-foot">
            <div className="pair"><span>Based</span><span>Lisbon &amp; by post</span></div>
            <div className="pair"><span>Tools</span><span>Graphite · Figma · Ink</span></div>
            <div className="pair"><span>Reads</span><span>Berger, Tufte, Sei Shōnagon</span></div>
          </div>
        </div>
      </div>
    </PagePlate>
  );
}

function ContactPage({ card, onBack }) {
  return (
    <PagePlate card={card} onBack={onBack}>
      <div className="contact-wrap">
        <div className="envelope-plate">
          <svg viewBox="0 0 640 400" width="100%" height="100%">
            <rect width="640" height="400" fill="#ece2c8"/>
            <rect width="640" height="400" fill="url(#hatch1)" opacity=".15"/>
            <g filter="url(#wobble)" stroke="#2e1e10" fill="none" strokeLinecap="round">
              {/* airmail border stripes */}
              <rect x="10" y="10" width="620" height="380" strokeWidth="1.4" fill="#ece2c8"/>
              <g stroke="none">
                {Array.from({ length: 40 }).map((_, i) => (
                  <rect key={i} x={10 + i * 16} y="10" width="8" height="12"
                        fill={i % 2 ? '#8a2a18' : '#2e1e10'} opacity=".7"/>
                ))}
                {Array.from({ length: 40 }).map((_, i) => (
                  <rect key={i} x={10 + i * 16} y="378" width="8" height="12"
                        fill={i % 2 ? '#8a2a18' : '#2e1e10'} opacity=".7"/>
                ))}
              </g>
              {/* interior border */}
              <rect x="30" y="30" width="580" height="340" strokeWidth=".6" opacity=".5"/>
              {/* stamp */}
              <g transform="translate(510 50)">
                <rect width="90" height="110" strokeWidth="1.4" fill="#ece2c8"/>
                <rect x="4" y="4" width="82" height="102" strokeWidth=".5" opacity=".6"/>
                <g transform="translate(45 55)">
                  <circle r="28" strokeWidth="1" fill="url(#hatch1)"/>
                  <circle r="22" strokeWidth=".6"/>
                  <text textAnchor="middle" y="-2" fontFamily="'IM Fell English', serif" fontSize="18" fill="#2e1e10">✉</text>
                  <text textAnchor="middle" y="18" fontFamily="'Special Elite', monospace" fontSize="7" letterSpacing="1.5" fill="#2e1e10">POSTA</text>
                </g>
                <text x="45" y="98" textAnchor="middle" fontFamily="'Special Elite', monospace" fontSize="8" fill="#2e1e10">— 1 FOLIO —</text>
              </g>
              {/* address lines */}
              <g transform="translate(70 150)">
                <text fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="22" fill="#2e1e10">To the Reader,</text>
                <text y="36" fontFamily="'IM Fell English', serif" fontSize="18" fill="#2e1e10">c/o this Web Page</text>
                <text y="64" fontFamily="'IM Fell English', serif" fontSize="18" fill="#2e1e10">Internet, at large</text>
                <line x1="-4" y1="84" x2="360" y2="84" strokeWidth=".6"/>
              </g>
              {/* postmark circle */}
              <g transform="translate(380 110) rotate(-12)">
                <circle r="42" strokeWidth="1.4" opacity=".7"/>
                <circle r="36" strokeWidth=".6" opacity=".5"/>
                <text textAnchor="middle" y="-8" fontFamily="'Special Elite', monospace" fontSize="9" letterSpacing="2" fill="#2e1e10" opacity=".8">LISBOA</text>
                <text textAnchor="middle" y="6" fontFamily="'IM Fell English', serif" fontSize="14" fill="#2e1e10" opacity=".8">MMXXV</text>
                <text textAnchor="middle" y="20" fontFamily="'Special Elite', monospace" fontSize="8" letterSpacing="2" fill="#2e1e10" opacity=".8">RECIBIDO</text>
                <line x1="-50" y1="0" x2="-44" y2="0" strokeWidth="1"/>
                <line x1="44" y1="0" x2="50" y2="0" strokeWidth="1"/>
              </g>
            </g>
          </svg>
        </div>
        <div className="contact-list">
          <div className="contact-row"><span className="cl">By post</span><span className="cv">Rua das Flores 11, Lisboa</span></div>
          <div className="contact-row"><span className="cl">By wire</span><span className="cv">studio@folio.test</span></div>
          <div className="contact-row"><span className="cl">By telephone</span><span className="cv">+351 XX XXX XXXX</span></div>
          <div className="contact-row"><span className="cl">By pigeon</span><span className="cv">enquire within</span></div>
          <div className="contact-foot">
            Replies typically within three working days. Commissions considered
            year-round. Please describe your project, your deadline, and one
            thing you are reading.
          </div>
        </div>
      </div>
    </PagePlate>
  );
}

function PageLayer({ activeId, onBack }) {
  const card = CARDS.find(c => c.id === activeId);
  if (!card) return null;
  const Page = ({
    work: WorkPage, intro: IntroPage, about: AboutPage, contact: ContactPage
  })[card.id];
  return (
    <div className={`page-layer ${activeId ? 'active' : ''}`}>
      <Page card={card} onBack={onBack}/>
    </div>
  );
}

window.PageLayer = PageLayer;
