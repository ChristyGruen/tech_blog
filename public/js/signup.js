// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   // Collect values from the login form
//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/user/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();

  console.log( username, password)

  if ( username && password) {
    console.log('made it to here')
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-btn')
  .addEventListener('click', signupFormHandler);
