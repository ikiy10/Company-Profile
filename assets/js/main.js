
    document.addEventListener('DOMContentLoaded', function(){
        let typed = new Typed('.typed-text', {
            strings: ["Welcome to ArCe"],
            typeSpeed: 100, // Kecepatan ketik (ms)
            backSpeed: 50, // Kecepatan menghapus teks (ms)
            loop: false // Tidak mengulang animasi
        });

        let typed2 = new Typed('.typed-text-2', {
            strings: ["Aman, Cepat dan Terpercaya"],
            typeSpeed: 50, // Kecepatan ketik (ms)
            backSpeed: 50, // Kecepatan menghapus teks (ms)
            loop: false // Tidak mengulang animasi
        });
    });
