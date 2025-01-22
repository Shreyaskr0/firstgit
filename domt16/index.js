// Write your code below:
function handleFormSubmit(event) {

    event.preventDefault();
    const ul = document.querySelector("ul");
    ul.id = "listofitems";
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {
        username, 
        email,
        phone 
    };
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    const parentElem = document.getElementById('listofitems');
    const childElem = document.createElement('li');
    childElem.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';

    deleteButton.onclick = function () {
        
        localStorage.removeItem(obj.email);
       
        parentElem.removeChild(childElem);
    };

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = 'Edit';

    editButton.onclick = function () {

        document.getElementById('username').value = obj.username;
        document.getElementById('email').value = obj.email;
        document.getElementById('phone').value = obj.phone;

        
        localStorage.removeItem(obj.email);
       
        parentElem.removeChild(childElem);
    };

    
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);

    
    parentElem.appendChild(childElem);
}

module.exports = handleFormSubmit