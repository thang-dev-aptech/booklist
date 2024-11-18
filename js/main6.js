let ds = [];
const addBook = () => {
    let id  = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    let checkId = false;
    for(let i = 0; i < ds.length; i++){
        if(ds[i].id === id){ 
            checkId = true;
            alert('ID này đã tồn tại');
            break;
        }
    }
    if(!checkId){
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
        const book = document.getElementById('bookList');
        book.appendChild(addBook);
        
        ds.push({id, title, author, price});
    }
    document.getElementById('id').value = "";
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('price').value = "";
    
}