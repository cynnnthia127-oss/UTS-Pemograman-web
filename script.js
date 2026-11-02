document.addEventListener("DOMContentLoaded", () => {
    const formatRupiah = (value) => value.toLocaleString("id-ID");
    const createCell = (row, value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    };

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            if (email === "admin@buku.com" && password === "123456") {
                alert("Login Berhasil!");
                window.location.href = "dashboard.html";
            } else {
                alert("Email atau password yang anda masukkan salah!");
            }
        });

        const modal = document.getElementById("infoModal");
        const closeButton = modal.querySelector(".close");
        const modalText = document.getElementById("modalText");
        const showModal = (event, message) => {
            event.preventDefault();
            modalText.textContent = message;
            modal.style.display = "block";
        };

        document.getElementById("btnLupa").addEventListener("click", (event) => {
            showModal(event, "Silakan hubungi administrator pusat untuk reset password.");
        });
        document.getElementById("btnDaftar").addEventListener("click", (event) => {
            showModal(event, "Fitur pendaftaran akun mandiri belum dibuka.");
        });
        closeButton.addEventListener("click", () => {
            modal.style.display = "none";
        });
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    const greetingMessage = document.getElementById("greetingMessage");
    if (greetingMessage) {
        const jam = new Date().getHours();
        let waktu = "Pagi";
        if (jam >= 11 && jam < 15) {
            waktu = "Siang";
        } else if (jam >= 15 && jam < 18) {
            waktu = "Sore";
        } else if (jam >= 18) {
            waktu = "Malam";
        }
        greetingMessage.textContent = `Selamat ${waktu}, Pengguna!`;
    }

    const tabelStokBody = document.querySelector("#tabelStok tbody");
    if (tabelStokBody && typeof katalogBuku !== "undefined") {
        const renderStok = () => {
            tabelStokBody.replaceChildren();
            katalogBuku.forEach((buku, index) => {
                const row = document.createElement("tr");
                createCell(row, String(index + 1));
                const imageCell = document.createElement("td");
                const cover = document.createElement("img");
                cover.className = "book-cover";
                cover.src = buku.gambar || "img/book-placeholder.svg";
                cover.alt = `Sampul buku ${buku.judul}`;
                imageCell.appendChild(cover);
                row.appendChild(imageCell);
                createCell(row, buku.judul);
                createCell(row, buku.penulis);
                createCell(row, `Rp ${formatRupiah(buku.harga)}`);
                createCell(row, `${buku.stok} pcs`);
                tabelStokBody.appendChild(row);
            });
        };

        renderStok();
        const formTambahStok = document.getElementById("formTambahStok");
        formTambahStok.addEventListener("submit", (event) => {
            event.preventDefault();
            const judul = document.getElementById("inputJudul").value.trim();
            const penulis = document.getElementById("inputPenulis").value.trim();
            const harga = Number(document.getElementById("inputHarga").value);
            const stok = Number(document.getElementById("inputStok").value);

            if (!judul || !penulis || !Number.isSafeInteger(harga) || harga <= 0 ||
                !Number.isSafeInteger(stok) || stok < 0) {
                alert("Judul, penulis, harga, atau jumlah stok tidak valid.");
                return;
            }

            const id = katalogBuku.reduce((highestId, buku) => Math.max(highestId, buku.id), 0) + 1;
            katalogBuku.push({ id, judul, penulis, harga, stok, gambar: "img/book-placeholder.svg" });
            renderStok();
            formTambahStok.reset();
            alert("Stok buku berhasil ditambahkan ke katalog!");
        });
    }

    const pilihBuku = document.getElementById("pilihBuku");
    const formCheckout = document.getElementById("formCheckout");
    if (pilihBuku && formCheckout && typeof katalogBuku !== "undefined") {
        const tabelPesananBody = document.querySelector("#tabelPesanan tbody");
        const tombolPesan = formCheckout.querySelector('button[type="submit"]');

        const renderPilihanBuku = () => {
            pilihBuku.replaceChildren();
            const bukuTersedia = katalogBuku.filter((buku) => buku.stok > 0);

            if (bukuTersedia.length === 0) {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "Tidak ada buku tersedia";
                pilihBuku.appendChild(option);
                pilihBuku.disabled = true;
                tombolPesan.disabled = true;
                return;
            }

            bukuTersedia.forEach((buku) => {
                const option = document.createElement("option");
                option.value = String(buku.id);
                option.textContent = `${buku.judul} - Rp ${formatRupiah(buku.harga)} (Stok: ${buku.stok})`;
                pilihBuku.appendChild(option);
            });
            pilihBuku.disabled = false;
            tombolPesan.disabled = false;
        };

        renderPilihanBuku();
        formCheckout.addEventListener("submit", (event) => {
            event.preventDefault();
            const nama = document.getElementById("namaPemesan").value.trim();
            const buku = katalogBuku.find((item) => item.id === Number(pilihBuku.value));
            const jumlah = Number(document.getElementById("jumlahPesan").value);

            if (!nama || !buku || !Number.isSafeInteger(jumlah) || jumlah < 1) {
                alert("Nama pemesan, buku, atau jumlah pesanan tidak valid.");
                return;
            }
            if (jumlah > buku.stok) {
                alert(`Stok ${buku.judul} tidak mencukupi. Stok tersedia: ${buku.stok}.`);
                return;
            }

            const metode = document.getElementById("metodeBayar").value;
            const row = document.createElement("tr");
            createCell(row, nama);
            createCell(row, buku.judul);
            createCell(row, String(jumlah));
            createCell(row, `Rp ${formatRupiah(buku.harga * jumlah)}`);
            createCell(row, metode);
            tabelPesananBody.appendChild(row);

            buku.stok -= jumlah;
            renderPilihanBuku();
            formCheckout.reset();
            alert("Pesanan berhasil diproses!");
        });
    }

    const btnCariDO = document.getElementById("btnCariDO");
    if (btnCariDO && typeof dataPengiriman !== "undefined") {
        btnCariDO.addEventListener("click", () => {
            const noDO = document.getElementById("inputNoDO").value.trim().toUpperCase();
            const hasilDiv = document.getElementById("hasilTracking");
            const data = dataPengiriman[noDO];

            if (!data) {
                alert("Nomor Delivery Order (DO) tidak ditemukan! Coba gunakan: DO-001 atau DO-002");
                hasilDiv.style.display = "none";
                return;
            }

            document.getElementById("trackNama").textContent = data.nama;
            document.getElementById("trackStatus").textContent = data.status;
            document.getElementById("trackEkspedisi").textContent = data.ekspedisi;
            document.getElementById("trackTanggal").textContent = data.tanggal;
            document.getElementById("trackPaket").textContent = data.paket;
            document.getElementById("trackTotal").textContent = formatRupiah(data.total);
            hasilDiv.style.display = "block";
        });
    }
});
