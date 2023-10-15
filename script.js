const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click',()=> {
	wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=> {
	wrapper.classList.remove('active');
})


/*read in email and password when trying to log in*/
document.getElementById('login_button').addEventListener('click', async () =>  {
  const login_email = document.getElementById('login_email_value').value;
  console.log(login_email)

  const login_password = document.getElementById('login_password_value').value;
  console.log(login_password)
});