// app.jsx — root app; orchestrates scene states, lamp, drawer, cards, pages, tweaks
const { Lamp, DeskLine, Book, Mug, Pen, Inkwell, PlateTitle, CornerOrnaments, Dust,
        DrawerClosed, DrawerOverlay, Cards, PageLayer, Tweaks } = window;

const DEFAULT_TWEAKS = /*EDITMODE-BEGIN*/{
  "hue": 38,
  "sat": 55,
  "light": 58,
  "intensity": 1
}/*EDITMODE-END*/;

function App() {
  const [lampOn, setLampOn] = React.useState(false);
  const [view, setView] = React.useState('room'); // room | drawer | card | page
  const [flyingId, setFlyingId] = React.useState(null);
  const [activePageId, setActivePageId] = React.useState(null);
  const [tweaks, setTweaks] = React.useState({ ...DEFAULT_TWEAKS });
  const [tweaksOpen, setTweaksOpen] = React.useState(false);
  const [sceneMoving, setSceneMoving] = React.useState(false);

  // apply tweak vars
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--lamp-hue', tweaks.hue);
    r.setProperty('--lamp-sat', tweaks.sat + '%');
    r.setProperty('--lamp-light', tweaks.light + '%');
    r.setProperty('--lamp-intensity', tweaks.intensity);
  }, [tweaks]);

  // tweaks host protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  React.useEffect(() => {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: tweaks }, '*');
  }, [tweaks]);

  const toggleLamp = () => {
    window._sfx?.clack();
    setLampOn(v => !v);
  };

  const openDrawer = () => {
    if (!lampOn || view !== 'room') return;
    window._sfx?.drawer();
    setSceneMoving(true);
    setView('drawer');
    setTimeout(() => setSceneMoving(false), 2200);
  };

  const closeDrawer = () => {
    if (view !== 'drawer') return;
    window._sfx?.thunk();
    setView('room');
  };

  const pickCard = (id) => {
    if (flyingId) return;
    window._sfx?.whoosh();
    // immediate redirect — no fly-to-center / flip intermediate state
    const card = (window.CARDS || []).find(c => c.id === id);
    if (card && card.href) window.location.href = card.href;
  };

  const backFromPage = () => {
    setActivePageId(null);
    setFlyingId(null);
    setView('drawer');
  };

  const sceneViewCls =
    view === 'room' ? 'view-room' :
    view === 'drawer' ? 'view-drawer' :
    'view-card';

  return (
    <>
      <div className={`stage ${lampOn ? 'on' : ''}`}>
        <div className="paper-ground"/>
        <div className={`lamp-glow`}/>

        <PlateTitle lampOn={lampOn} drawerOpen={view === 'drawer'}/>
        <CornerOrnaments/>

        <div className={`room-scene ${sceneViewCls} ${sceneMoving ? 'moving' : ''}`}>
          <DeskLine/>
          <Book/>
          <Mug/>
          <Pen/>
          <Inkwell/>
          <Lamp on={lampOn} onToggle={toggleLamp}/>
          <DrawerClosed onOpen={openDrawer} disabled={!lampOn || view !== 'room'}/>
          <Dust on={lampOn}/>
        </div>

        <DrawerOverlay open={view === 'drawer' || view === 'card' || view === 'page'}
                       dimmed={view === 'page'}>
          <Cards open={view === 'drawer'} flyingId={flyingId} onPick={pickCard}/>
        </DrawerOverlay>

        {/* Back to room from drawer */}
        <button
          className={`back-to-room ${view === 'drawer' ? 'show' : ''}`}
          onClick={closeDrawer}>← Back to Desk</button>
      </div>

      <PageLayer activeId={activePageId} onBack={backFromPage}/>

      <Tweaks visible={tweaksOpen} state={tweaks} setState={setTweaks}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
