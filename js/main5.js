
function display(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    let book = `Title: <strong>${title}</strong> - Author: ${author}, Price: ${price}`;
    document.getElementById('display').innerHTML = book;
    setTimeout(() => {
        window.location.href = 'bai6.html';
    },2000);
        
        

}