const username = prompt('Login');
const time = 20;

/* ask for the username */
if (username === 'User') {
    /* if the username is correct, ask for the password */
   
    const password = prompt('Password');

    if (password === 'SuperUser') {
        /* success */
        alert(new Date().getHours() < time ? 'Good day!' : 'Good evening!');
    } else if (password === '' || password === null) {
        /* empty string or cancelled input*/ 
        alert('Canceled.');
    } else {
        /* verification error*/
        alert('Wrong password');
    }
} else if (username === '' || username === null) {
    alert('Canceled.');
} else if (username.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else {
    alert("I don't know you");
}