
const form=document.getElementById('regform')
form.addEventListener('submit',(event)=>{
  event.preventDefault();

  const Username=event.target.username.value;
  const Email=event.target.email.value;
  const Phone=event.target.phone.value;

  localStorage.setItem('Username',Username);
   localStorage.setItem('Email',Email);
   localStorage.setItem('Phone',Phone);
})
