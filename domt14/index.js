function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;

    const obj = {
        name,
        email,
        phonenumber 
    };
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    const parentElem = document.getElementById('listofitems');
    const childElem = document.createElement('li');
    childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber;
    parentElem.appendChild(childElem);
}
