function editCard() {
    alert('Write name please!');
}

function deleteCard() {
    
    if (confirm('Do you want to delete this card')) {
        document.querySelector('.Card').remove();
    }
}