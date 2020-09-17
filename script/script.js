
//creating function to get elements
function $(element) {
	return document.querySelector(element);
}
	

 //input and form 
    // taking the text input box
      let inputBox = $('input[type="text"]');
    //taking the form 
      let form= $('form');
    //item container
      let container = $('.itemContainer');
    //sumbit button
      let submit = $('#add-item-btn');


//the function to execute
function addItem(e) {
  if (inputBox.value.length > 0 ) {
  	
     //creating the item
        newItem = document.createElement('li');
     
     //giving it a class
        newItem.className = 'items';
     
     //putting it inside DOM
        container.appendChild(newItem);
     
     //adding user input inside the new item
        newItem.appendChild(document.createTextNode(inputBox.value));
     
     //adding a delete button inside
        let deleteBtn = document.createElement('p') ;
        deleteBtn.appendChild(document.createTextNode('X') );
        deleteBtn.className = 'delete';
        newItem.appendChild(deleteBtn);
    
     //making it delete items when delete button is pressed
       console.log('aaaahhh');
        
     //preventing auto refresh on submit
	     e.preventDefault();
	     
	  // adding event listener for every delete button
       list = document.querySelectorAll('.delete');
	    for (let i=0; i<list.length; i++) {
		    list[i].addEventListener('click',deleteItem)
		      }

     //function to delete 
       function deleteItem(e) {
       let removed = e.target.parentElement;
       let itemContainer = $('.itemContainer');
       itemContainer.removeChild(removed);
       }
       
	 }
	 
}
    //linking our function with the event
    submit.addEventListener('click',addItem );

// adding event listener for every delete button
       list = document.querySelectorAll('.delete');
	    for (let i=0; i<list.length; i++) {
		    list[i].addEventListener('click',deleteItem)
		      }

     //function to delete 
       function deleteItem(e) {
       let removed = e.target.parentElement;
       let itemContainer = $('.itemContainer');
       itemContainer.removeChild(removed);
       }


