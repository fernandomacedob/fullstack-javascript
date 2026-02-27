function addContact() {
    const newContact = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contact"

    const ul = document.createElement('ul')
    
    const nameLi = document.createElement('li')
    nameLi.innerText = "Name: "
    
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullName'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))
    
    const phoneLi = document.createElement('li')
    phoneLi.innerHTML = "<label for='phone'>Phone: </label>"
    
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneInput.id = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Address: </label>'
    
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    newContact.append(h3, ul)
}

function removeContact() {
    const newContact = document.getElementById('contact-list')

    const titles = document.querySelectorAll('#contact-list h3')
    const contacts = document.querySelectorAll('#contact-list ul')

    newContact.removeChild(titles[titles.length - 1])
    newContact.removeChild(contacts[contacts.length -1])
}