 function book(title,author,isbn){
     this.title=title;
     this.author=author;
     this.isbn=isbn;

 } 
 function ui(){}
 //first
 ui.prototype.disp=function(book){
    const list=document.getElementById('book-list');
    //create row n inserting the data
    const rowData=document.createElement('tr');
    rowData.innerHTML = `
                       <td>${book.title} </td>
                        <td>${book.author} </td>
                        <td>${book.isbn} </td>
                        <td><a href="#" class="delete">X</a></td>
                        `
    list.appendChild(rowData);
 }

 ui.prototype.clear=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
 }

ui.prototype.showAlert=function(message,errType){
    const div= document.createElement('div');
    div.className= `alert ${errType}`;
    //addtext!
    div.appendChild(document.createTextNode(message));
    
    const container=document.querySelector('.container');
    //form
    const form=document.querySelector('#book-form');
    container.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();//once the tine is 3sec it will remove the added class!
    },
    3000
    )
}

ui.prototype.del=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
        
    }
}

 //event listerners
document.getElementById('book-form').addEventListener('submit',function(e){
    const title=document.getElementById('title').value;
    const auth= document.getElementById('author').value;
    const isbn=document.getElementById('isbn').value;
    alert("pressed");
    const books=new book(title,auth,isbn);
    const ui1=new ui();
    if(title=== ''|| auth=== '' || isbn=== ''){
        ui1.showAlert('Fill in the fields','error');
    }else{
    ui1.disp(books);
    ui1.clear();
    ui1.showAlert('ADDED SUCCESSFULY','success');
    }
    e.preventDefault();
});

//deleting the object;

document.getElementById('book-list').addEventListener('click',function(e){
    console.log('clicked');
    const ui2=new ui();
    ui2.del(e.target);
    if(e.target.className==="delete")
{    ui2.showAlert('Deleted Successful','success');
}
    e.preventDefault();
})