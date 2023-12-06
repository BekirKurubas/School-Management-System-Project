function editCard() {
    // Düzenleme fonksiyonu buraya gelecek
    alert('Düzenleme işlemi başlatıldı.');
}

function deleteCard() {
    // Silme fonksiyonu buraya gelecek
    if (confirm('Bu kartı silmek istediğinizden emin misiniz?')) {
        document.querySelector('.Card').remove();
    }
}