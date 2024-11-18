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
        const book = document.getElementById('bookList');
        const addBook = document.createElement('div');
        let obj = {id, title, author, price};
        addBook.className = 'book';
        
        addBook.innerHTML = 
        `ID: <strong>${id}</strong> - Title: ${title} - Author: ${author}, Price: ${price}`;
        const actionButton = document.createElement('div');
        actionButton.className = 'action';
        const editBook = document.createElement('button');
        editBook.className = 'editBook';
        editBook.innerHTML = 'Edit';
        
        actionButton.appendChild(addBook);
        actionButton.appendChild(editBook);
        book.appendChild(actionButton);
        ds.push({id, title, author, price});
    }
    document.getElementById('id').value = "";
    document.getElementById('title').value ="";
    document.getElementById('author').value ="";
    document.getElementById('price').value ="";
    
}
