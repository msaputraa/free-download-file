document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menyalin URL
    window.copyToClipboard = function() {
        const baseUrlText = document.getElementById('base-url-text').innerText;
        navigator.clipboard.writeText(baseUrlText).then(() => {
            alert('URL berhasil disalin!');
        }).catch(err => {
            console.error('Gagal menyalin:', err);
        });
    }

    // Fungsi untuk menyaring item berdasarkan kategori
    window.filterItems = function(category, element) {
        const cards = document.querySelectorAll('.endpoint-card');
        const filterItems = document.querySelectorAll('.filter-item');

        // Menghapus kelas 'active' dari semua tombol filter
        filterItems.forEach(item => item.classList.remove('active'));

        // Menambahkan kelas 'active' pada tombol yang diklik
        if (element) {
            element.classList.add('active');
        }

        // Menyembunyikan atau menampilkan card
        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Tampilkan semua card secara default saat halaman dimuat
    const activeFilter = document.querySelector('.filter-item.active');
    if (activeFilter) {
        filterItems('all', activeFilter);
    }
});