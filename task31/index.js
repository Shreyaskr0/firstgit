const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
   axios
    .get("https://crudcrud.com/api/08bd994b821e41d38d4396a9812f2096/todo")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

function postTodo() {
  // Write your code here
   axios
    .post("https://crudcrud.com/api/08bd994b821e41d38d4396a9812f2096/todo", {
      title: "Learn Axios",
      completed: false,
    })
    .then((res) => console.log(res.data)) 
    .catch((err) => console.log(err));
}
const id="679752e5df661d03e81cbce6"
function putTodo() {
  // Write your code here
  axios
    .put(`https://crudcrud.com/api/08bd994b821e41d38d4396a9812f2096/todo/${id}`, {
      title: "Learn Axios",
      completed: true,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

}

function deleteTodo() {  
  // Write your code here
  axios
    .delete("https://crudcrud.com/api/08bd994b821e41d38d4396a9812f2096/todo/67975297df661d03e81cbce5")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
