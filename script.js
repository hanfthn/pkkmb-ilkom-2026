const buttons = document.querySelectorAll(".menu-button");

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});

// ================= WHATSAPP AUTO MESSAGE =================

function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 4 && hour < 11) {
        return "Selamat Pagi";
    } else if (hour >= 11 && hour < 15) {
        return "Selamat Siang";
    } else if (hour >= 15 && hour < 18) {
        return "Selamat Sore";
    } else {
        return "Selamat Malam";
    }
}

const message =
`${getGreeting()} kak.

Perkenalkan saya [Nama Lengkap], Mahasiswa Baru Program Studi Ilmu Komputer UNJ tahun 2026.

Saya ingin mengonfirmasi keikutsertaan saya dalam kegiatan PKKMB Program Studi Ilmu Komputer UNJ tahun 2026.

Terima kasih.`;

document.getElementById("cp1").href =
`https://wa.me/6287710534740?text=${encodeURIComponent(message)}`;

document.getElementById("cp2").href =
`https://wa.me/6281315727041?text=${encodeURIComponent(message)}`;
