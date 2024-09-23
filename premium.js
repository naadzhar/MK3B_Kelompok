const menuButton = document.getElementById('menu');
const navList = document.getElementById('list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('active'); // Tambah atau hapus kelas 'active' saat tombol diklik
});

// Optional: If you want to log the current image index while scrolling
const sliderContainer = document.getElementById('sliderWrapper');
const images = document.querySelectorAll('.slider-image');

sliderContainer.addEventListener('scroll', () => {
    const index = Math.round(sliderContainer.scrollLeft / sliderContainer.clientWidth);
    console.log(`Current image index: ${index}`); // Log the current index
});