# GrantTrace — Decentralized Education Grant Audit Trail

> **Praktikum Keamanan Data dan Blockchain — Modul 1 & Modul 2**  
> **Nama Pengusul:** Aulia Rachman  
> **NIM:** G.231.24.0065  
> **Jaringan Simulasi:** Solana Devnet Simulation  

---

## 1. Nama Project
**GrantTrace** (Decentralized Education Grant Audit Trail)

---

## 2. Deskripsi Singkat
**GrantTrace** adalah aplikasi berbasis web yang menyediakan jejak rekam audit terdesentralisasi (*decentralized audit trail*) untuk memantau alokasi, rilis termin, dan konfirmasi penerimaan dana beasiswa pendidikan. Sistem ini memanfaatkan prinsip transparansi dan integritas kriptografis blockchain (simulasi Solana Devnet) agar setiap tahap pencairan dana dapat diverifikasi secara publik, akuntabel, dan bebas manipulasi (*tamper-proof*).

---

## 3. Masalah yang Diselesaikan (*Problem Statement*)
> *“Untuk donatur dan mahasiswa penerima beasiswa yang mengalami ketidakpastian dan ketidakterbukaan alur pencairan dana pendidikan, kami membangun GrantTrace agar mereka dapat memantau dan memverifikasi penyaluran dana termin secara transparan dan akuntabel. Berbeda dari pencatatan spreadsheet internal yang rentan manipulasi, sistem kami memberikan bukti status distribusi dan log riwayat pencairan yang tidak dapat dimanipulasi (tamper-proof) dengan verifikasi instan di blockchain.”*

---

## 4. Target Pengguna
Sistem GrantTrace dirancang dengan 3 peran (*multi-role*) yang saling melengkapi:
1. **Admin Pengelola Beasiswa (Kampus / Issuer):**
   - Bertanggung jawab mengalokasikan program beasiswa baru ke dalam sistem.
   - Mengunggah batch data penerima dan menghitung hash SHA-256.
   - Menandatangani rilis termin pencairan dana on-chain setelah dana fiat ditransfer ke rekening mahasiswa.
2. **Mahasiswa Penerima Beasiswa (Beneficiary):**
   - Memantau status aktif hak beasiswa dan tahapan termin (*Milestone Stepper*).
   - Menandatangani konfirmasi digital tanda terima dana secara mandiri menggunakan wallet Devnet setelah dana masuk rekening.
3. **Auditor / Donatur / Publik (Observer):**
   - Mengakses feed transparansi log transaksi on-chain secara *real-time*.
   - Melakukan verifikasi keabsahan program beasiswa atau kode sertifikat tanpa perlu menghubungkan dompet kripto (*permissionless public audit*).

---

## 5. Fitur Utama (Maksimal 5 Fitur Sesuai Modul 2)
1. **Inisialisasi & Alokasi Program Beasiswa (Admin):** Formulir pendaftaran beasiswa on-chain dengan penentuan jadwal termin dan validasi keunikan ID program.
2. **Penyaluran Dana & Rilis Termin Bertahap On-Chain (Admin):** Mekanisme pelepasan status termin dari `Allocated` menjadi `Released` yang tercatat permanen di ledger.
3. **Konfirmasi Digital Tanda Terima Mahasiswa (Mahasiswa):** Penandatanganan bukti terima dana termin menggunakan wallet Devnet yang memperbarui status menjadi `Acknowledged`.
4. **Halaman Verifikasi Instan Status & Sertifikat Beasiswa (Publik):** Pengecekan instan keabsahan program berdasarkan ID program/sertifikat (menampilkan Certificate ID, Status Valid/Pending, Verification Hash, dan Network).
5. **Feed Log Audit Trail Transparan & Transaction Inspector (Publik):** Penelusuran riwayat seluruh mutasi transaksi on-chain dengan detail *signature, slot, timestamp, aktor authority, memo instruction*, dan tautan langsung ke Solana Explorer Devnet.

---

## 6. Teknologi yang Digunakan
- **Antarmuka (Frontend):** HTML5, Modern Vanilla JavaScript (ES6+), Tailwind CSS via CDN, Google Fonts (Inter & JetBrains Mono).
- **Arsitektur:** Responsive Single-Page Application (SPA) dengan *Zero-Dependency Build* (dapat langsung dibuka di browser apa pun).
- **Kriptografi:** Web Crypto API bawaan browser (`window.crypto.subtle.digest('SHA-256')`) untuk perhitungan hash batch mahasiswa secara nyata (*native cryptographic hashing*).
- **Blockchain Adapter Simulation:** Solana Devnet Transaction Inspector, Base58 Signature Generator, dan Mock Wallet Connector (Phantom, Solflare, Backpack).

---

## 7. Cara Menjalankan Project
Project ini dibuat secara mandiri (*self-contained*) tanpa membutuhkan instalasi *node_modules* yang rumit:

### Opsi 1: Buka Langsung (Paling Cepat)
Cukup klik dua kali (*double click*) file `index.html` atau buka file tersebut menggunakan browser modern pilihan Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave).

### Opsi 2: Jalankan via Local Web Server
Jika ingin menjalankan melalui local server:
```bash
# Menggunakan Python 3:
python -m http.server 3000

# Atau menggunakan Node.js (npx serve):
npx serve .
```
Lalu buka browser di alamat: `http://localhost:3000`.

---

## 8. Data yang Masih Berupa Dummy
Untuk memenuhi kepatuhan keamanan data dan privasi (UU PDP):
- Seluruh data mahasiswa disamarkan (*Masked PII*, contoh: `Au*** Ra*****`, `G.231.24.0065`).
- Nomor rekening bank disamarkan (contoh: `Bank Mandiri Rek: ****-****-4491`).
- Saldo kripto SOL pada wallet merupakan saldo simulasi Devnet Airdrop (`2.450 SOL`).

---

## 9. Fitur Blockchain yang Masih Berupa Simulasi
Sesuai dengan ketentuan **Modul 2 Bagian 6**:
> *“Fitur blockchain pada Modul 2 masih berupa simulasi antarmuka dan belum melakukan transaksi nyata.”*

- **Koneksi Wallet:** Modal adapter Phantom/Solflare menghasilkan Public Key simulasi non-custodial tanpa memanggil RPC wallet ekstensi sungguhan.
- **Penyimpanan Transaksi:** Ledger transaksi disimpan dalam memori reaktif browser (*in-memory synchronized state*) dengan format struktur transaksi standar Solana Devnet.
- **Program ID & Signature:** Program ID (`GrantTrace1111111111111111111111111111111111`) dan Signature 64-karakter Base58 merupakan representasi simulasi identik Devnet.

---

## 10. Batasan Project
- Tidak memproses transaksi mata uang fiat nyata atau token crypto bernilai riil.
- Tidak meminta, menyimpan, atau mengekspos *Private Key* maupun 12-kata *Seed Phrase* pengguna.
- Belum terhubung dengan validator cluster Solana Mainnet (hanya prototipe Devnet).
- Data simulasi kembali ke kondisi awal jika halaman di-refresh penuh (*stateless in-memory prototype*).

---

## 11. Identitas Pengusul
- **Nama:** Aulia Rachman  
- **NIM:** G.231.24.0065  
- **Mata Kuliah:** Praktikum Keamanan Data dan Blockchain  
- **Tugas:** Modul 1 (Konseptual & Arsitektur) dan Modul 2 (Build Prototype AI Web & GitHub Repository)  
- **Tahun Akademik:** 2025/2026  
