import { useEffect, useRef, useState } from 'react'
import { sfx, setMusic, setSfx } from './sound.js'
import { LINKS, HERO, STATS, PROJECTS, APPROACH, HISTORY, EDU, ACHIEVEMENTS } from './data.js'

const NAV = [
  ['hero', 'Character'], ['quests', 'Quests'], ['approach', 'Approach'], ['history', 'History'], ['awards', 'Awards'], ['contact', 'Contact'],
]

function useTypewriter(text, speed = 22, run = true) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    setN(0)
    const id = setInterval(() => {
      setN((v) => {
        if (v >= text.length) { clearInterval(id); return v }
        if (v % 3 === 0) sfx.type()
        return v + 1
      })
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, run])
  return text.slice(0, n)
}

function Shot({ src, label }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div className="ph"><span>🖼️</span><small>Taruh gambar di<br />public{src}</small></div>
  return <img src={src} alt={label} onError={() => setBad(true)} loading="lazy" />
}

/* ---------- Title screen ---------- */
function Title({ onStart }) {
  const introText = useTypewriter("Hi! I'm Fitri. Press 'Start' to enter my professional quest log, review my inventory of skills, and explore my developer journey.", 20)
  
  return (
    <div className="title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '24px', position: 'relative', overflow: 'hidden', gap: '14px' }}>
      <div className="stars" />
      
      <div style={{ display: 'flex', gap: '16px', fontSize: '60px', animation: 'float 2.8s ease-in-out infinite', zIndex: 2, marginBottom: '2px' }}>
        <span>🧙‍♀️</span>
      </div>

      <p className="blip" style={{ color: 'var(--gold)', zIndex: 2, margin: 0 }}>▶ SYSTEM READY: WELCOME TRAVELER</p>
      <p className="cls" style={{ color: 'var(--sky)', zIndex: 2, margin: 0 }}>{HERO.cls}</p>

      <div className="panel dialog" style={{ maxWidth: '600px', width: '100%', padding: '20px', textAlign: 'left', zIndex: 2, margin: '4px 0' }}>
        <p className="speech" style={{ minHeight: '4.5em', fontSize: '15px', color: 'var(--mute)', textAlign: 'justify', textJustify: 'inter-word', margin: 0 }}>
          {introText}<span className="caret">▌</span>
        </p>
      </div>

      <div style={{ display: 'flex', marginTop: '18px', marginBottom: '20px', justifyContent: 'center', zIndex: 2, margin: 0 }}>
        <div className="panel stat" style={{ padding: '10px 24px', textAlign: 'center' }}>
          <b style={{ fontSize: '10px', display: 'block', color: 'var(--violet)' }}>CLASS</b>
          <span style={{ fontSize: '13px', color: '#fff' }}>Software Dev</span>
        </div>
      </div>

      <button className="start" style={{ zIndex: 2, marginTop: '8px' }} onMouseEnter={sfx.hover} onClick={onStart}>
        Start Adventure ⚔️
      </button>
    </div>
  )
}

/* ---------- HUD dengan Hamburger Menu Mobile ---------- */
function Hud({ music, sound, setMusicOn, setSoundOn }) {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  const handleNavClick = (id) => {
    sfx.click()
    setMenuOpen(false) // Tutup menu setelah diklik di HP
  }

  return (
    <header className="hud">
      <div className="hud-brand">
        <span className="hud-title">Portofolio</span>
      </div>

      {/* Navigasi Desktop & Mobile Dropdown */}
      <nav aria-label="Main menu" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV.map(([id, l]) => (
          <a 
            key={id} 
            href={`#${id}`} 
            className={active === id ? 'on' : ''} 
            onMouseEnter={sfx.hover} 
            onClick={() => handleNavClick(id)}
          >
            {l}
          </a>
        ))}
      </nav>

      <div className="hud-right">
        <div className="toggles">
          <button aria-pressed={music} title="Music" onClick={() => { sfx.click(); setMusicOn(!music) }}>{music ? '🎵' : '🔇'}</button>
          <button aria-pressed={sound} title="Sound effects" onClick={() => { setSoundOn(!sound); !sound && sfx.click() }}>{sound ? '🔊' : '🔈'}</button>
        </div>

        {/* Tombol Hamburger */}
        <button 
          className="hamburger-btn" 
          onClick={() => { sfx.click(); setMenuOpen(!menuOpen) }}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  const text = useTypewriter(HERO.intro, 18)
  return (
    <section id="hero" className="sec hero">
      <div className="panel dialog">
        <div className="avatar" aria-hidden="true" style={{ overflow: 'hidden', borderRadius: '8px', width: '140px', height: '180px', flex: 'none' }}>
          <img src="/img/profil.jpg" alt="Safitri Mutiara Putri" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <h2>{HERO.name}</h2>
          <p className="cls">{HERO.cls}</p>
          <h3 className="headline">{HERO.headline}</h3>
          <p className="speech" style={{ textAlign: 'justify', textAlignLast: 'left', textJustify: 'inter-word', maxWidth: '100%' }}>
            {text}<span className="caret">▌</span>
          </p>
        </div>
      </div>
      <div className="stats">
        {STATS.map((s) => (
          <div className="panel stat" key={s.k} onMouseEnter={sfx.hover}>
            <b>{s.k}</b><span>{s.v}</span><small>{s.label}</small>
          </div>
        ))}
      </div>
      <p 
        className="more" 
        style={{ 
          textAlign: 'justify', 
          marginTop: '16px',
          textAlignLast: 'left', 
          MozTextAlignLast: 'left',
          textJustify: 'inter-word',
          lineHeight: '1.6',
          maxWidth: '100%'
        }}
      >
        {HERO.more}
      </p>
    </section>
  )
}

/* ---------- Quests ---------- */
function Quests({ onOpen }) {
  return (
    <section id="quests" className="sec">
      <h2 className="h">Quest Log</h2>
      <p className="sub">Click a quest to see the details and a preview of how it looks.</p>
      <div className="quests">
        {PROJECTS.map((p) => (
          <button key={p.id} className="panel quest" onMouseEnter={sfx.hover} onClick={() => { sfx.confirm(); onOpen(p) }}>
            <div className="thumb"><Shot src={p.images[0]} label={`${p.title} cuplikan`} /></div>
            <div className="qbody">
              <span className={`tag ${p.type}`}>{p.type === 'ui' ? 'Design' : 'Code'}</span>
              <h3>{p.icon} {p.title}</h3>
              <p>{p.sub}</p>
              <small>{p.status}</small>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function Block({ b }) {
  if (b.p) return <p>{b.p}</p>
  if (b.ul) return <ul>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>
  if (b.users) return <ul className="users">{b.users.map(([r, d]) => <li key={r}><b>{r}:</b> {d}</li>)}</ul>
  if (b.results) return (
    <div className="results">{b.results.map(([l, v, n]) => (
      <div className="panel res" key={l}><b>{v}</b><span>{l}</span><small>{n}</small></div>
    ))}</div>
  )
  return null
}

function QuestModal({ p, onClose }) {
  const [i, setI] = useState(0)
  const [tab, setTab] = useState(0)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  })
  const close = () => { sfx.back(); onClose() }
  const go = (d) => { sfx.click(); setI((i + d + p.images.length) % p.images.length) }
  const sec = p.sections[tab]
  return (
    <div className="overlay" onClick={close}>
      <div className="panel modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}>
        
        {/* Header Modal Sticky (Tombol X dan Judul Ikut Scroll / Menempel di Atas) */}
        <div className="modal-sticky-header">
          <div>
            <h3>{p.icon} {p.title}</h3>
            <p className="role">{p.role}</p>
          </div>
          <button className="x" onClick={close} aria-label="Close">✕</button>
        </div>

        <div className="gallery">
          <button onClick={() => go(-1)} aria-label="Previous">◀</button>
          <div className="frame" key={i}><Shot src={p.images[i]} label={`${p.title} ${i + 1}`} /></div>
          <button onClick={() => go(1)} aria-label="Next">▶</button>
        </div>
        <div className="dots">{p.images.map((_, n) => <i key={n} className={n === i ? 'on' : ''} />)}</div>
        
        {/* Tab Sub Menu dengan Style Kotak & Shadow yang Jelas */}
        <div className="tabs" role="tablist">
          {p.sections.map((s, n) => (
            <button key={s.h} role="tab" aria-selected={n === tab} className={n === tab ? 'on' : ''}
              onMouseEnter={sfx.hover} onClick={() => { sfx.click(); setTab(n) }}>{s.h}</button>
          ))}
        </div>

        <div className="scroll" key={tab}>{sec.blocks.map((b, n) => <Block b={b} key={n} />)}</div>
        <h4>Skills shown</h4>
        <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
        {p.figma ? (
  <a className="btn" href={p.figma} target="_blank" rel="noreferrer" onClick={sfx.confirm}>
    Open in Figma
  </a>
) : p.note ? (
  <p className="lock">🔒 {p.note}</p>
) : null}
      </div>
    </div>
  )
}

/* ---------- Approach ---------- */
const Approach = () => (
  <section id="approach" className="sec">
    <h2 className="h">How I Approach Digital Solutions</h2>
    <div className="approach">
      {APPROACH.map((a, n) => (
        <div className="panel step" key={a.t} onMouseEnter={sfx.hover}>
          <span className="ico">{a.icon}</span>
          <small>Stage {n + 1}</small>
          <h3>{a.t}</h3>
          <p>{a.d}</p>
        </div>
      ))}
    </div>
  </section>
)

/* ---------- History ---------- */
const History = () => (
  <section id="history" className="sec">
    <h2 className="h">Adventure History</h2>
    <div className="timeline">
      <div className="panel entry edu" onMouseEnter={sfx.hover}>
        <small>{EDU.years}</small>
        <h3>{EDU.degree}</h3>
        <p className="role">{EDU.school} · GPA {EDU.gpa}</p>
        <ul>{EDU.certs.map((c) => <li key={c}>{c}</li>)}</ul>
      </div> 
      {HISTORY.map((h) => (
        <div className="panel entry" key={h.title} onMouseEnter={sfx.hover}>
          <small>{h.when}</small>
          <h3>{h.title}</h3>
          <p className="role">{h.where}</p>
          <ul>{h.pts.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ))}
    </div>
  </section>
)

/* ---------- Achievements ---------- */
function Awards() {
  const [open, setOpen] = useState({})
  return (
    <section id="awards" className="sec">
      <h2 className="h">Achievements</h2>
      <p className="sub">Click to unlock each achievement.</p>
      <div className="awards">
        {ACHIEVEMENTS.map((a, n) => (
          <button key={n} className={`panel award ${open[n] ? 'got' : ''}`} onMouseEnter={sfx.hover}
            onClick={() => { if (!open[n]) sfx.unlock(); else sfx.click(); setOpen({ ...open, [n]: true }) }}>
            <span className="ico">{open[n] ? a.icon : '❔'}</span>
            <b>{open[n] ? a.t : 'Locked'}</b>
            <small>{open[n] ? a.d : 'Click to unlock'}</small>
          </button>
        ))}
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */
const Contact = () => (
  <section id="contact" className="sec contact">
    <div className="panel save" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="h" style={{ textAlign: 'center', width: '100%' }}>Contact</h2>
      <p style={{ textAlign: 'justify', textAlignLast: 'center', textJustify: 'inter-word', maxWidth: '65ch', margin: '0 auto 16px auto' }}>
        I'm interested in opportunities across web and mobile development, UI/UX design, software testing, and systems analysis. I enjoy understanding user needs, working with teams, and building digital solutions that are useful, reliable, and easy to use.
      </p>
      <div className="links" style={{ display: 'flex', justifyContent: 'center', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
        <a className="btn" href={`mailto:${LINKS.email}`} onMouseEnter={sfx.hover} onClick={sfx.confirm}>Email</a>
        <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer" onMouseEnter={sfx.hover} onClick={sfx.confirm}>LinkedIn</a>
        {LINKS.github && <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer" onMouseEnter={sfx.hover} onClick={sfx.confirm}>GitHub</a>}
      </div>
    </div>
    <footer>Portofolio - Safitri Mutiara Putri</footer>
  </section>
)

/* ---------- App ---------- */
export default function App() {
  const [started, setStarted] = useState(false)
  const [music, setMusicState] = useState(true)
  const [sound, setSoundState] = useState(true)
  const [quest, setQuest] = useState(null)

  const start = () => { sfx.confirm(); setMusic(music); setStarted(true) }
  const setMusicOn = (v) => { setMusicState(v); setMusic(v) }
  const setSoundOn = (v) => { setSoundState(v); setSfx(v) }

  if (!started) return <Title onStart={start} />
  return (
    <>
      <div className="stars" />
      <Hud music={music} sound={sound} setMusicOn={setMusicOn} setSoundOn={setSoundOn} />
      <main>
        <Hero />
        <Quests onOpen={setQuest} />
        <Approach />
        <History />
        <Awards />
        <Contact />
      </main>
      {quest && <QuestModal p={quest} onClose={() => setQuest(null)} />}
    </>
  )
}