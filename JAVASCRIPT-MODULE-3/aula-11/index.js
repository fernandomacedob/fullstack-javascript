function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirm = sectionElement.children.passwordConfirm.value

    if (password === passwordConfirm) {
        alert("User " + username + " registered!")
    } else {
        alert("Password doesn't match")
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListener() {
    button.removeEventListener('click', register)
    alert("Event removed")
}

button.addEventListener('mouseover', function(ev) {
    console.log(ev.currentTarget)
})