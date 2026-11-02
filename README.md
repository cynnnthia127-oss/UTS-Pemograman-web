# 📚 Aplikasi Web Pemesanan Buku Online (Toko Buku)
> **Tugas UTS Pemrograman Web 1**

Aplikasi web sederhana untuk sistem pemesanan buku toko online berbasis *Front-End* menggunakan HTML5 Semantik, CSS3, dan JavaScript (DOM Manipulation, Array JSON Data, Form Validation, & Dynamic UI).

---

## 📑 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Struktur Folder](#-struktur-folder)
- [Persyaratan & Instalasi](#-persyaratan--instalasi)
- [Panduan Penggunaan Fitur](#-panduan-penggunaan-fitur)
- [Petunjuk Video Penjelasan](#-petunjuk-video-penjelasan)

---

## ✨ Fitur Utama

1. **Halaman Login (`index.html`)**
   - Autentikasi sederhana pengguna.
   - Feedback kesalahan login menggunakan `alert()`.
   - Pop-up modal box interaktif untuk opsi **Lupa Password** dan **Daftar Akun**.

2. **Dashboard Menu (`dashboard.html`)**
   - Navigasi cepat ke seluruh modul aplikasi.
   - Ucapan salam (*dynamic greeting*) otomatis berdasarkan waktu lokal pengguna (Pagi, Siang, Sore, Malam).

3. **Informasi Stok / Katalog (`stok.html`)**
   - Menampilkan daftar katalog buku secara dinamis dari file JSON statis (`data.js`).
   - Fitur manipulasi DOM untuk menambah baris stok buku baru secara real-time lengkap dengan gambar sampel.

4. **Halaman Pemesanan / Checkout (`checkout.html`)**
   - Selection menu dinamis berisi daftar buku yang tersedia.
   - Perhitungan total biaya otomatis berdasarkan jumlah pesanan.
   - Penambahan riwayat transaksi pesanan ke tabel menggunakan JS DOM.

5. **Tracking Pengiriman (`tracking.html`)**
   - Pencarian status pengiriman berdasarkan Nomor Delivery Order (DO).
   - Menampilkan detail ekspedisi, status pengiriman, tanggal kirim, dan total pembayaran.

---

## 📁 Struktur Folder

```text
tugas-uts-web1/
│
├── index.html         # Halaman Utama / Login
├── dashboard.html     # Dashboard Navigasi & Greeting
├── stok.html          # Informasi Stok Katalog Buku
├── checkout.html      # Halaman Checkout / Pemesanan
├── tracking.html      # Tracking Status Pengiriman
│
├── css/
│   └── style.css      # Custom CSS Styling (Responsive & Clean UI)
│
├── js/
│   ├── data.js        # File Data Dummy (Array JSON)
│   └── script.js      # Logika JS, Manipulasi DOM, & Event Handling
│
└── img/
    ├── buku1.png      # Assets Gambar Cover Buku 1
    └── buku2.png      # Assets Gambar Cover Buku 2
```

---

## 🚀 Persyaratan & Instalasi

Aplikasi ini berjalan sepenuhnya pada sisi klien (*Client-Side / Front-End*), sehingga tidak memerlukan server atau database backend.

1. **Download / Clone** direktori proyek `tugas-uts-web1`.
2. Pastikan file gambar (`buku1.png`, `buku2.png`) telah dimasukkan ke dalam folder `img/`.
3. Buka file `index.html` langsung di browser favorit Anda (Google Chrome, Mozilla Firefox, Microsoft Edge, dll.).

---

## 🔑 Credential / Data Dummy Pengujian

### 1. Kredensial Login
- **Email:** `admin@buku.com`
- **Password:** `123456`

### 2. Nomor Delivery Order (DO) untuk Tracking
- `DO-001` (Status: Sedang Dikirim)
- `DO-002` (Status: Paket Telah Diterima)

---
---

## 📝 Lisensi & Penulis

Tugas UTS Pemrograman Web 1 - Pemrograman Front-End Dasar (HTML, CSS, JavaScript).



Link Youtube: https://youtu.be/1i6g0YymsPs
