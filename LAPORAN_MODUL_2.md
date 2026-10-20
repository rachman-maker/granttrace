# LEMBAR PENGUMPULAN TUGAS PRAKTIKUM
## Modul 2 — Build dengan AI Agent (GrantTrace Web3 dApp)

- **Nama Mahasiswa:** Aulia Rachman  
- **NIM:** G.231.24.0065  
- **Mata Kuliah:** Praktikum Keamanan Data dan Blockchain  
- **Nama Project:** GrantTrace — Decentralized Education Grant Audit Trail  
- **Repository GitHub:** `https://github.com/[username-anda]/granttrace` *(Dapat disesuaikan setelah push ke GitHub)*  

---

### 1. Problem Statement (Pernyataan Masalah Resmi)
> *“Untuk donatur dan mahasiswa penerima beasiswa yang mengalami ketidakpastian dan ketidakterbukaan alur pencairan dana pendidikan, kami membangun GrantTrace agar mereka dapat memantau dan memverifikasi penyaluran dana termin secara transparan dan akuntabel. Berbeda dari pencatatan spreadsheet internal yang rentan manipulasi, sistem kami memberikan bukti status distribusi dan log riwayat pencairan yang tidak dapat dimanipulasi (tamper-proof) dengan verifikasi instan di blockchain.”*

---

### 2. Daftar 5 Fitur Utama (MVP)
1. **Inisialisasi & Alokasi Program Beasiswa (Admin Role):**
   Formulir input program beasiswa baru dengan alokasi kuota, total dana, termin pencairan, dan validasi keunikan ID Program on-chain.
2. **Penyaluran Dana & Rilis Termin Bertahap On-Chain (Admin Role):**
   Aksi rilis termin yang mengubah status beasiswa dari `Allocated` menjadi `Released` dan mencatat cryptographic hash ke ledger simulasi Solana Devnet.
3. **Konfirmasi Digital Tanda Terima Mahasiswa (Beneficiary Role):**
   Mahasiswa memverifikasi pencairan dana ke rekening dan menandatangani bukti terima on-chain melalui wallet Devnet, mengubah status menjadi `Acknowledged`.
4. **Halaman Verifikasi Publik Instan (Observer Role / Tanpa Wallet):**
   Verifikasi cepat keabsahan program atau sertifikat beasiswa menggunakan kode ID Program (menampilkan status VALID, Verification Hash, dan Network).
5. **Feed Log Audit Trail Transparan & Transaction Inspector (Observer Role):**
   Penyajian seluruh riwayat transaksi on-chain secara kronologis dilengkapi modal rincian transaksi (*block slot, signer authority, fee, sanitized memo payload*, dan link Solana Explorer).

---

### 3. Rekayasa Prompt Bertahap (Prompt Engineering Log)

#### A. Prompt Awal (Initial Prototype Prompt)
```text
Buat website responsive bernama GrantTrace.

Tujuan:
Membantu mahasiswa, pengelola kampus, dan donatur memantau distribusi dana beasiswa per termin secara transparan menggunakan simulasi jejak audit terdesentralisasi (Solana Devnet).

Target Pengguna:
1. Admin Pengelola Beasiswa (Kampus)
2. Mahasiswa Penerima Beasiswa
3. Auditor / Publik / Donatur

Halaman:
- Landing Page (Overview, Problem statement, metrik total beasiswa, pencarian audit instan, dan alur bisnis 4 tahap).
- Dashboard Admin (Statistik beasiswa, tabel alokasi program, aksi rilis termin, dan batch hash generator).
- Portal Mahasiswa (Ringkasan beasiswa aktif, visual milestone stepper termin 1-3, dan tombol konfirmasi tanda terima dana).
- Dashboard Audit Publik (Log riwayat transaksi on-chain real-time, filter status, dan modal detail transaksi).
- Halaman Verifikasi Sertifikat / Status (Input ID Program, hasil status Valid, Verification Hash, dan Solana Devnet network).

UI & Ketentuan:
- Desain modern, profesional, dark theme slate dengan aksen emerald green dan Solana purple/green.
- Responsive desktop (sidebar navigasi) dan mobile drawer.
- Gunakan data dummy sintetis. Jangan meminta private key atau data pribadi nyata (PII).
- Terapkan Zero PII on-chain (hanya hash SHA-256 dan ID acak yang dicatat).
- Belum membuat transaksi smart contract nyata (gunakan simulasi antarmuka).
```

#### B. Prompt Perbaikan Tampilan (UI Refinement Prompt)
```text
Perbaiki tampilan dashboard dan navigasi GrantTrace agar lebih terstruktur dan informatif:

Perubahan:
- Tambahkan progress bar visual rasio status program (Allocated, Released, Acknowledged).
- Tambahkan grafik batang frekuensi transaksi per bulan.
- Tambahkan visual milestone stepper pada portal mahasiswa yang menghubungkan Termin 1 (Acknowledged), Termin 2 (Released), dan Termin 3 (Allocated).
- Buat modal interaktif "Solana Devnet Transaction Inspector" yang menampilkan Signature Base58, Block Slot, Timestamp, Signer Wallet, Program ID, dan Memo Payload.
- Tambahkan tombol "Demo Alur Bisnis" di header untuk memandu evaluator mencoba alur 3 role secara cepat.
- Pertahankan role switching mulus tanpa reload halaman.
```

#### C. Prompt Validasi dan Kepatuhan Keamanan
```text
Tambahkan validasi keamanan data dan kepatuhan privasi sesuai Modul 1 & Modul 2:

Perubahan:
- Pastikan form tambah beasiswa memvalidasi input wajib dan keunikan ID program.
- Implementasikan penghitungan hash kriptografis nyata menggunakan Web Crypto API (crypto.subtle.digest('SHA-256')) pada menu SHA-256 Batch Generator.
- Samarkan seluruh nama dan NIM mahasiswa pada daftar penerima (Masked PII) untuk mematuhi UU PDP.
- Berikan label penafian (disclaimer) yang jelas di footer dan modal wallet: "Fitur blockchain pada Modul 2 masih berupa simulasi antarmuka dan belum melakukan transaksi nyata."
- Jangan pernah meminta private key atau seed phrase pengguna.
```

---

### 4. Catatan Fitur yang Masih Berupa Simulasi
Sesuai instruksi **Modul 2 Bagian 6**:
1. **Koneksi Dompet (Wallet Connection):** Adapter Phantom, Solflare, dan Backpack bersifat mock simulasi (menghasilkan public key dan saldo airdrop Devnet dummy tanpa memasang ekstensi browser riil).
2. **Pencatatan Ledger On-Chain:** Disimpan pada memori reaktif frontend dan diformat persis menyerupai JSON RPC Solana Devnet.
3. **Smart Contract Deployment:** Belum meng-compile program Rust/Anchor ke testnet validator, melainkan mensimulasikan instruksi memo program `GrantTrace1111111111111111111111111111111111`.

---

### 5. Checklist Kesiapan Repository GitHub (Modul 2 Bagian 8)
- [x] Repository siap diinisialisasi (`git init -b main`)
- [x] Nama project & repository: `granttrace`
- [x] File project lengkap (`index.html`, `README.md`, `.gitignore`, `LAPORAN_MODUL_2.md`)
- [x] README.md memuat lengkap 11 poin yang diwajibkan
- [x] Bebas dari Private Key, Seed Phrase, dan Password
- [x] Bebas dari data pribadi nyata (PII Masked: `Au*** Ra***** / G.231.24.0065`)
- [x] Memiliki commit awal (*initial commit*)
