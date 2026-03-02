const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="deliveryAddress"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += "- " + item.value + "\n"
    })

    console.log(({
        name,
        address,
        breadType,
        main,
        salad,
        observations
    }))

    alert(
        "Order done!" +
        "\nClient: " + name +
        "\nDelivery Address: " + address +
        "\nBread Type: " + breadType +
        "\nFilling: \n- " + main + "\n" + salad +
        "Observations: " + observations
    )
})