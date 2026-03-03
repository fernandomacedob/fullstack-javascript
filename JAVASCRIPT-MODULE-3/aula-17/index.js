const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = 'Hello, world!'
    input.getAttribute('value')
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'radio' ? 'radio' : 'text'

})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Type something...'
})

document.getElementById('disable').addEventListener('click', function () {
    input.disabled = !input.disabled
})

document.getElementById('changeData').addEventListener('click', () => {
    const data = input.dataset.something
    console.log("The attribute value of the something-data is " + data)
    input.dataset.something = 'Another value'
    console.log("The attribute value of the something-data is " + input.dataset.something)

})