let speed = 80

while (speed > 0) {
    alert("The car speed is " + speed + " km/h")
    speed -= 20
    alert("Decreasing 20 km/h")

    if (speed === 40) {
        break
    }
}

alert("The car stopped!!!")