function editCard() {   
    alert('Please write a name!');
}

function deleteCard() {    
    if (confirm('Do you want to delete this card')) {
        document.querySelector('.Card').remove();
    }
}