import {viewModule} from './ViewModule.js';
class BookModule{
    createNewBook(){
        const bookname = document.getElementById('bookname').value;
        const publishedyear = document.getElementById('publishedyear').value;
        const quantity = document.getElementById('quantity').value;
        const newBook = {
            "bookname": bookname,
            "count": quantity,
            "publishedyear": publishedyear,
            "quantity": quantity,
        }
        const promise = fetch('createNewBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            body: JSON.stringify(newBook)
        });
        promise.then(response => response.json())
                .then(response => {
                if(response.status) {
                    document.getElementById('info').innerHTML = response.info;
                    document.getElementById('info').value = bookname + "успешно добавлена";
                    console.log("sdfsdfds");
                    viewModule.showNewBookForm();
                }else{
                    document.getElementById('info').innerHTML = response.info;
                    bookname = response.bookname;
                    publishedyear = response.publishedyear;
                    quantity = response.quantity;
                }
            })
            .catch(error => {
                document.getElementById('info').innerHTML = 'Ошибка сервера: '+ error;
            });
    }
    insertListBooks(){
        const promiseListBooks = fetch('getListBooks',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            }
        });
        promiseListBooks
                .then(response => response.json())
                .then(response =>{
                    if(response.status){
                        const select = document.getElementById('select_books');
                        select.options.length=0;
                        let option = document.createElement('option');
                            option.text = "Выберите книгу";
                            option.value = '';
                            select.add(option);
                        for(let i=0; i<response.books.length; i++){
                            option = document.createElement('option');
                            option.text = response.books[i].bookname;
                            option.value = response.books[i].id;
                            select.add(option);
                        }
                    }else{
                       document.getElementById('info').innerHTML = response.info;  
                    }
                })
                .catch(error=>{
                    document.getElementById('info').innerHTML = 'Ошибка сервера: '+error;
                });
    }
    
    editBook(){
        const bookId = document.getElementById('select_books').value;
        const object = {
            "bookId":bookId
        }
        const promiseBook = fetch('getBook',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            body: JSON.stringify(object)
        });
        promiseBook
                .then(response => response.json())
                .then(response =>{
                   if(response.status){
                       document.getElementById('info').value = response.info;
                       document.getElementById('book_id').value = response.book.id
                       document.getElementById('bookname').value = response.book.bookname;
                       document.getElementById('quantity').value = response.book.quantity;
                       document.getElementById('publishedyear').value = response.book.publishedyear;
                   }else{
                       document.getElementById('info').value = response.info;
                   }
                })
                .catch(error=>{
                    document.getElementById('info').innerHTML = 'Ошибка сервера: '+error;
                });
    }
    
    updateBook(){
        const bookId = document.getElementById("book_id").value;
        const bookname = document.getElementById("bookname").value;
        const quantity = document.getElementById("quantity").value;
        const publishedyear = document.getElementById("publishedyear").value;
        const updateBook = {
            "bookId": bookId,
            "bookname": bookname,
            "quantity": quantity,
            "publishedyear": publishedyear,
        };
        const promiseBook = fetch('updateBook',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset:utf8'
            },
            body: JSON.stringify(updateBook)
        });
        promiseBook
                .then(response => response.json())
                .then(response =>{
                   if(response.status){
                       document.getElementById('info').innerHTML = 'Книга изменена';
                       viewModule.showNewBookForm();
                   }else{
                       document.getElementById('info').innerHTML = 'Книгу изменить не удалось';
                   }
                })
                .catch(error=>{
                    document.getElementById('info').innerHTML = 'Ошибка сервера: '+error;
                });
    }
}
const bookModule = new BookModule();
export {bookModule};