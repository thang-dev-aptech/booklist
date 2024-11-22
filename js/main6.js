let ds = [];

function addBook(){
    const id = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = document.getElementById("price").value;
    const obj = {id, title, author, price};
    ds.push(obj);
    displayBooks();
    clearForm();
    
    
}

function displayBooks(){
    const list = document.getElementById("bookList");
    list.innerHTML = `<h3>Book List</h3>`;
    ds.forEach((book) => {
        const newBook = document.createElement("div");
        newBook.className = "newBook";
        newBook.innerHTML = 
        `id: <strong>${book.id}</strong> - title: ${book.title} - author: ${book.author} - price: ${book.price}`;
        
        const container = document.createElement("div");
        container.className = "actionContainer";
        list.appendChild(container);
        const editButton = document.createElement("button");
        editButton.className = "edit"
        editButton.textContent = "Edit";    
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () =>{
            const index = ds.findIndex((b) => b.id === book.id);
            if(index!== -1){
                ds.splice(index, 1);
            }
            displayBooks();
            clearForm();
        }
        container.appendChild(newBook);
        container.appendChild(editButton);
        container.appendChild(deleteButton);

        list.appendChild(container);
        


        
    });
}
function clearForm(){
    document.getElementById("id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    document.getElementById("error").textContent = "";
}
