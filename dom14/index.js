// formHandler.js

function handleFormSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let user = {
        username: username,
        email: email,
        phone: phone
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    displayUsers(users);
    event.target.reset(); // Reset form fields
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear existing list

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
        userList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    displayUsers(users);
});

module.exports = {
    handleFormSubmit,
    displayUsers
};
