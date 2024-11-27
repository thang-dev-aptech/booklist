let ds = [];
let editIndex = -1;

// add hoặc upadate
function addOrUpdate(){
    const id = document.getElementById('Id').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    // kiểm tra add or update
    if(editIndex === -1){
        const obj = {id, title, author, price};
        ds.push(obj);
    }
    else{
        ds[editIndex] = {id, title, author, price};
        editIndex = -1;
    }
    displayBook();
    clearBook();
}

// in ra màn hình dữ liệu 
function displayBook(){
    const list = document.getElementById('bookList');
    list.innerHTML = '<h3>Book List</h3>';
    ds.forEach((item, index) => {
        const book = document.createElement('div');
        book.className = "book";
        book.innerHTML = 
        `id: <strong>${item.id}</strong> - 
        title: ${item.title} - 
        author: ${item.author} - 
        price: ${item.price}`;

        const action = document.createElement('div');
        action.className = "container_action";

        // tạo ra nút sửa 
        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        edit.className = 'Edit';

        // tạo ra nút xoá
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'Delete';

        // thêm tính năng sửa xoá cho edit và delete

        edit.onclick = () => editBooks(index);
        deleteBtn.onclick = () => deleteBooks(index);

        action.appendChild(book);
        action.appendChild(edit);
        action.appendChild(deleteBtn);
        list.appendChild(action);
    });

}
// hàm sửa
function editBooks(index){
    const book = ds[index];
    document.getElementById('Id').value = book.id;
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('price').value = book.price;
    document.getElementById('add').innerText = 'Update';
    editIndex = index;
    document.getElementById('add').onclick = addOrUpdate;
}
// hàm xoá 
function deleteBooks(index){
    const check = confirm('ban co muon xoa hay ko');
    if(check){
        ds.splice(index, 1);
        displayBook();
        clearBook();
    }
}

// hàm tìm kiếm
function searchBook(){
    const searchValue = document.getElementById('searchInput').value;
    const List = document.getElementById('bookList');

    // check id 
    const checkId = ds.filter(book => book.id === searchValue);

    if(checkId.length > 0){
        // xoá dữ liệu trên màn hình
        List.innerHTML = '';
        // hiển thị dữ liệu tìm kiếm
        checkId.forEach(item => {
            const newBook = document.createElement('div');
            newBook.className = "book";
            newBook.innerHTML = 
            `id: <strong>${item.id}</strong> - 
            title: ${item.title} - 
            author: ${item.author} - 
            price: ${item.price}`;
            List.appendChild(newBook);
        });
    }
}


function clearBook(){
    document.getElementById('Id').value = '';
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('price').value = '';
}