function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("Select " + name + " as " + position + "?")

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const newPlayer = document.createElement('li')
        newPlayer.id = 'player-' + number
        newPlayer.innerText = position + ": " + name + " (" + number + ")"
        teamList.appendChild(newPlayer)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const removePlayer = document.getElementById('player-' + number)

    const confirmation = confirm("Remove player " + removePlayer.innerText + "?")

    if (confirmation) {
        removePlayer.remove()
        document.getElementById('numberToRemove').value = ''
    }
}