var form = document.getElementById("myForm");
var listGroup = document.getElementById("items");
var filter = document.getElementById('filter');

form.addEventListener("submit" , addItem);
//delet event
listGroup.addEventListener("click", removeItem);
//filter event
filter.addEventListener('keyup' , filterItem)


//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById("inputtext").value;

    //Create New Li Element
    var li = document.createElement('li');
    //Add ClassName
    li.className="list-group-item";
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //append child to ul
    listGroup.appendChild(li);

    //add delete btn
    var deleteBtn = document.createElement('button');
    //add class to deletBtn
    deleteBtn.className = 'btn btn-danger btn-sm delete';
    // add X in deleteBtn 
    deleteBtn.appendChild(document.createTextNode("X"));

    //appent chil to li
    li.appendChild(deleteBtn)
}



function removeItem(e){
     if(e.target.classList.contains('delete')){
         if(confirm('Are You Sure ?')){
             var li = e.target.parentElement;
             listGroup.removeChild(li);
         }
     }
}


function filterItem(e){
    //convert in lowercase
    var text = e.target.value.toLowerCase();
    //get items list
    var items = listGroup.getElementsByTagName('li');

    //convert in array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }
    })
}