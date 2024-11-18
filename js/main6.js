let ds = [];
const addBook = () => {
    let id  = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    const addBook = document.createElement('div');
    let obj = {id, title, author, price};
    addBook.className = 'book';
    addBook.style.marginTop='10px';
    addBook.style.textAlign = 'left';
    addBook.style.marginBottom = '10px';
    addBook.style.padding = '7px';
    addBook.style.borderBottom = '1px solid #ccc';    
    addBook.style.fontSize = '17px';
    addBook.style.fontWeight= 'normal';
    addBook.innerHTML = 
    `ID: <strong>${id}</strong> - Title: ${title} - Author: ${author}, Price: ${price}`
    const booklist = document.getElementById('bookList');
    booklist.appendChild(addBook);
    ds.push({id, title, author, price});
    for(let i = 0; i < Object.keys(obj).length; i++){
        if(obj[0] == id){
            alert('ID này đã tồn tại');
            return;
        }
    }
    document.getElementById('id').value = "";
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('price').value = "";
}