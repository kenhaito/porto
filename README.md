# Safitri · RPG Portfolio

Stack: React + Vite. Deploy ke Vercel.

## Jalankan
```
npm install
npm run dev
```

## Yang perlu kamu edit
- `src/data.js` → link Figma (Qureo & Si Juko), GitHub, teks, level skill
- `public/img/` → screenshot proyek, 3 gambar per proyek, nama file sesuai `data.js`
  (simbek-1.png, simbek-2.png, simbek-3.png, basis-1.png, dst). Kalau file belum ada, tampil placeholder.

## Deploy ke Vercel
Push ke GitHub → vercel.com → Add New Project → pilih repo. Preset Vite terdeteksi otomatis (build: `npm run build`, output: `dist`).
