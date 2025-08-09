# CO2 Labs Website Clone

Repositori ini merupakan hasil kloning dari website resmi [CO2 Labs](https://labsco2.com/) yang dibuat menggunakan React.js dan TypeScript. Website ini menampilkan layanan teknologi dan solusi pengembangan yang ditawarkan oleh CO2 Labs.

## 📋 Deskripsi Project

CO2 Labs Website Clone adalah implementasi ulang dari website resmi CO2 Labs yang mencakup:

- **Landing Page** dengan animasi scroll yang menarik
- **Halaman Layanan** untuk berbagai service yang ditawarkan
- **Portfolio Section** menampilkan project-project terdahulu
- **Team Section** memperkenalkan tim CO2 Labs
- **Contact Form** terintegrasi dengan WhatsApp
- **Responsive Design** yang optimal di semua perangkat

## 🛠️ Teknologi yang Digunakan

- **React.js** - Library frontend utama
- **TypeScript** - Type safety dan better development experience
- **Tailwind CSS** - Styling dan responsive design
- **AOS (Animate On Scroll)** - Animasi scroll yang smooth
- **React Router** - Navigasi antar halaman
- **Vite** - Build tool dan development server

## 🚀 Cara Instalasi

### Prasyarat

Pastikan Anda sudah menginstall:

- **Node.js** (versi 16 atau lebih baru)
- **npm** atau **yarn**
- **Git**

### Langkah Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/your-username/co2-labs-clone.git
   cd co2-labs-clone
   ```

2. **Install Dependencies**

   Menggunakan npm:

   ```bash
   npm install
   ```

   Atau menggunakan yarn:

   ```bash
   yarn install
   ```

3. **Install AOS Library** (jika belum terinstall)

   ```bash
   npm install aos
   npm install @types/aos
   ```

4. **Jalankan Development Server**

   Menggunakan npm:

   ```bash
   npm run dev
   ```

   Atau menggunakan yarn:

   ```bash
   yarn dev
   ```

5. **Buka Browser**

   Buka browser dan akses: `http://localhost:5173`

## 📁 Struktur Project

```
src/
├── components/
│   └── layouts/
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Footer component
│       ├── Hero.tsx            # Hero section component
│       ├── Labs.tsx            # CO2 Labs section
│       └── WeHere.tsx          # About section
├── pages/
│   ├── Home.tsx               # Halaman utama
│   ├── WebDev.tsx             # Halaman Web Development
│   ├── WebMain.tsx            # Halaman Web Maintenance
│   ├── ItSupport.tsx          # Halaman IT Support
│   └── AiSolution.tsx         # Halaman AI Solutions
├── assets/                    # Gambar dan aset lainnya
├── data/                      # Data dummy untuk content
└── App.tsx                    # Main app component
```

## ✨ Fitur Utama

### 🎯 Homepage

- Hero section dengan animasi menarik
- Service cards dengan hover effects
- Team showcase dengan profile cards
- Portfolio gallery
- Contact form terintegrasi WhatsApp

### 📱 Responsive Design

- Mobile-first approach
- Hamburger menu untuk mobile
- Adaptive layouts untuk semua screen size

### 🎨 Animasi & Interaksi

- Smooth scroll animations menggunakan AOS
- Hover effects pada cards dan buttons
- Loading states dan transitions

### 🚀 Performance

- Optimized bundle dengan Vite
- Lazy loading untuk images
- Efficient re-rendering dengan React best practices

## 🔧 Scripts yang Tersedia

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview build hasil
npm run preview

# Lint code
npm run lint
```

## 📞 Kontak & Support

Jika Anda memiliki pertanyaan atau membutuhkan bantuan:

- **WhatsApp**: +65-8118-1595
- **Email**: info@co2labs.com
- **Website**: [labsco2.com](https://labsco2.com/)

## 📄 Lisensi

Project ini dibuat untuk tujuan pembelajaran dan demonstrasi. Semua hak cipta konten dan desain tetap milik CO2 Labs.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambah fitur baru'`)
4. Push ke branch (`git push origin feature/fitur-baru`)
5. Buat Pull Request

## 📝 Changelog

### Version 1.0.0

- ✅ Clone layout dari website asli
- ✅ Implementasi responsive design
- ✅ Integrasi AOS animations
- ✅ Setup routing untuk multiple pages
- ✅ WhatsApp integration
- ✅ Contact form functionality

---

**Dibuat dengan ❤️ oleh Tim Developer**

_Inspired by [CO2 Labs](https://labsco2.com/)_
