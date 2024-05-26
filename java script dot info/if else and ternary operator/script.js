// write the following in ternary operator form

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt("Who are you", "Employee");

let message = login == 'Employee' ? 'hello' :
              login == 'Director' ? 'Greetings':
              login == '' ? 'No login' : '';

alert(login);

alert(1 && 2 && 3);