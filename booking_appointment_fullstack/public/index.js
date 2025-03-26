document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
});

document.getElementById("userForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const user = { username, email, phone };

    try {
        const response = await fetch("http://localhost:3000/users/adduser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            document.getElementById("userForm").reset();
            fetchUsers();  
        } else {
            console.error("Error adding user");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

async function fetchUsers() {
    try {
        const response = await fetch("http://localhost:3000/users/getuser");
        const users = await response.json();

        const userList = document.getElementById("userList");
        userList.innerHTML = ""; 

        users.forEach(user => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerHTML = `${user.username} - ${user.email} - ${user.phone} 
                <button class="btn btn-danger btn-sm float-right" onclick="deleteUser(${user.id})">Delete</button>
                <button class="btn btn-primary btn-sm float-right mr-2" onclick="editUser(${user.id}, '${user.username}', '${user.email}', '${user.phone}')">Edit</button>`;

            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

async function deleteUser(id) {
    try {
        await fetch(`http://localhost:3000/users/deleteuser/${id}`, { method: "DELETE" });
        fetchUsers(); 
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

function editUser(id, username, email, phone) {
    document.getElementById("username").value = username;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;

    document.getElementById("userForm").onsubmit = async function (event) {
        event.preventDefault();
        const updatedUser = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        };

        try {
            await fetch(`http://localhost:3000/users/edituser/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser)
            });

            document.getElementById("userForm").reset();
            document.getElementById("userForm").onsubmit = submitUser; 
            fetchUsers(); 
        } catch (error) {
            console.error("Error editing user:", error);
        }
    };
}

function submitUser(event) {
    event.preventDefault();
}
