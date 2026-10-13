// Semua suara disintesis lewat Web Audio API — nggak butuh file mp3.
let ctx, sfxOn = true, musicOn = false, timer, step = 0

const ac = () => {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

function tone(f, d = 0.08, type = 'square', v = 0.05, delay = 0, to) {
  const c = ac(), t = c.currentTime + delay
  const o = c.createOscillator(), g = c.createGain()
  o.type = type
  o.frequency.setValueAtTime(f, t)
  if (to) o.frequency.exponentialRampToValueAtTime(to, t + d)
  g.gain.setValueAtTime(v, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + d)
  o.connect(g).connect(c.destination)
  o.start(t); o.stop(t + d)
}

const play = (fn) => () => { if (sfxOn) fn() }

export const sfx = {
  hover: play(() => tone(660, 0.05, 'square', 0.025)),
  click: play(() => tone(440, 0.09, 'square', 0.05, 0, 880)),
  back: play(() => tone(520, 0.1, 'square', 0.05, 0, 260)),
  type: play(() => tone(260 + Math.random() * 120, 0.025, 'square', 0.012)),
  confirm: play(() => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.14, 'square', 0.05, i * 0.08))),
  unlock: play(() => [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.18, 'triangle', 0.07, i * 0.09))),
}

// Musik latar: arpeggio pelan nuansa biru/malam
const notes = [220, 262, 330, 392, 330, 262, 220, 196, 220, 262, 349, 440, 349, 262, 220, 175]
const tick = () => {
  tone(notes[step % notes.length], 0.4, 'triangle', 0.035)
  if (step % 8 === 0) tone(notes[step % notes.length] / 2, 1.4, 'sine', 0.04)
  step++
}
export const setMusic = (on) => {
  musicOn = on
  clearInterval(timer)
  if (on) { ac(); timer = setInterval(tick, 300) }
}
export const setSfx = (on) => { sfxOn = on }
export const isMusic = () => musicOn
