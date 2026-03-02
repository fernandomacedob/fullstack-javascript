function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirm = element.children.passwordConfirm.value

    console.log({username, password, passwordConfirm})

    if (password === passwordConfirm) {
        alert("User " + username + " registered!")
    } else {
        alert("Password doesn't match!")
    }
}