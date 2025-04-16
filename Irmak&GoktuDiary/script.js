// Tüm kutuları seçiyoruz
const kutular = document.querySelectorAll('.kutu');

// Her kutuya tıklama olayı ekliyoruz
kutular.forEach(kutu => {
    // Her kutu için data-img'den fotoğraf URL'sini alıyoruz
    const imgURL = kutu.getAttribute('data-img');
    
    // Kutunun stiline, fotoğraf URL'sini ekliyoruz
    kutu.style.setProperty('--img-url', `url(${imgURL})`);
    
    // Tıklama olayını dinliyoruz
    kutu.addEventListener('click', () => {
        // Kutunun üzerine tıklanınca 'acik' sınıfını ekliyoruz
        kutu.classList.toggle('acik');

        // Fotoğrafın gösterileceği URL'yi ayarlıyoruz
        kutu.style.setProperty('--img-url', `url(${imgURL})`);
        kutu.style.backgroundImage = kutu.classList.contains('acik') ? `url(${imgURL})` : "none";
    });
});
