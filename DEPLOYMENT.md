# 🚀 Deployment Checklist untuk Vercel

## ✅ File yang Sudah Disiapkan

### 1. **vercel.json** ✅
File konfigurasi Vercel sudah dibuat dengan:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support (rewrites)
- Framework detection: Vite

### 2. **.gitignore** ✅
File `.env` sudah ditambahkan ke `.gitignore` untuk keamanan

### 3. **.env.example** ✅
Template environment variables sudah dibuat untuk dokumentasi

---

## 📋 Langkah Deploy ke Vercel

### **Step 1: Push ke GitHub**
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### **Step 2: Import Project ke Vercel**
1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Klik **"Add New Project"**
4. Import repository: `raka-s-digital-canvas`

### **Step 3: Configure Project**
Vercel akan auto-detect Vite, tapi pastikan:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### **Step 4: Set Environment Variables**
Di Vercel Dashboard → Settings → Environment Variables, tambahkan:

```
VITE_SUPABASE_PROJECT_ID=lkhlgpofydkollgmrzvz
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_URL=https://lkhlgpofydkollgmrzvz.supabase.co
VITE_RAKABACKEND_URL=https://rakadevbackend.onrender.com
```

> ⚠️ **PENTING**: Jangan commit file `.env` ke Git! Environment variables harus diset di Vercel Dashboard.

### **Step 5: Deploy**
Klik **"Deploy"** dan tunggu proses build selesai (±2-3 menit)

---

## 🔍 Verifikasi Setelah Deploy

### Cek Fitur-Fitur Utama:
- [ ] Homepage loading dengan baik
- [ ] Navigation menu berfungsi (smooth scroll)
- [ ] About section menampilkan foto
- [ ] Skills section menampilkan semua skills
- [ ] Projects section menampilkan semua project dengan link GitHub/Demo
- [ ] Experience section berfungsi
- [ ] Contact form bisa mengirim email (test kirim pesan)
- [ ] AI Chat widget berfungsi (test chat dengan AI)
- [ ] Dark/Light mode toggle berfungsi
- [ ] Responsive di mobile dan desktop

### Cek API Integration:
- [ ] Supabase connection (AI Chat)
- [ ] Backend API (Contact Form)

---

## 🐛 Troubleshooting

### Jika Build Gagal:
1. Cek error message di Vercel build logs
2. Pastikan semua dependencies ada di `package.json`
3. Test build locally: `npm run build`

### Jika Environment Variables Tidak Bekerja:
1. Pastikan prefix `VITE_` ada di semua env vars
2. Redeploy setelah menambah env vars
3. Clear cache: Settings → Clear Build Cache

### Jika Routing Tidak Bekerja:
- File `vercel.json` sudah menghandle SPA routing
- Refresh halaman seharusnya tidak error 404

---

## 🎯 Custom Domain (Opsional)

Setelah deploy berhasil, Anda bisa:
1. Beli domain (Namecheap, GoDaddy, dll)
2. Di Vercel: Settings → Domains
3. Tambahkan custom domain
4. Update DNS records sesuai instruksi Vercel

---

## 📊 Performance Tips

### Setelah Deploy:
1. Test dengan Lighthouse (Chrome DevTools)
2. Cek loading speed di [PageSpeed Insights](https://pagespeed.web.dev/)
3. Monitor analytics di Vercel Dashboard

### Optimasi (Jika Perlu):
- Compress images yang besar
- Enable Vercel Analytics
- Setup Vercel Speed Insights

---

## ✨ Selesai!

Setelah deploy berhasil, Anda akan mendapat URL seperti:
- **Production**: `https://raka-s-digital-canvas.vercel.app`
- **Preview**: URL unik untuk setiap commit

Setiap push ke `main` branch akan auto-deploy! 🎉
