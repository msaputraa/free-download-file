document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const overlay = document.getElementById('overlay');

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

        filterItems.forEach(item => item.classList.remove('active'));
        if (element) {
            element.classList.add('active');
        }

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Event listener untuk membuka sidebar
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Event listener untuk menutup sidebar (tombol silang)
    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Event listener untuk menutup sidebar (klik di luar sidebar)
    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Tampilkan semua card secara default saat halaman dimuat
    const activeFilter = document.querySelector('.filter-item.active');
    if (activeFilter) {
        filterItems('all', activeFilter);
    }
});