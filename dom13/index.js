// Write your code below:
/*const form=document.getElementById('regform')
form.addEventListener('submit',(event)=>{
  event.preventDefault();
const name=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
console.log(name);

let obj={
  name:name,
  email:email,
  phone:phone
};
let objserialized=JSON.stringify(obj);
localStorage.setItem("myobj",objserialized);
});*/
// index.js
function handleFormSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
 
  
    let obj = {
      username: username,
      email: email,
      phone: phone
    };
  
    let objSerialized = JSON.stringify(obj);
    localStorage.setItem("myobj", objSerialized);
  }
  
  document.getElementById('regform').addEventListener('submit', handleFormSubmit);
  