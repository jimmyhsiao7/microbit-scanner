let j = 0
let i = 0
let c = 1
basic.forever(function () {
    i = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            if (c % 2 == 0) {
                led.plot(j, i)
            } else {
                led.plot(i, j)
            }
            j += 1
            basic.pause(100)
            basic.clearScreen()
        }
        j = 0
        i += 1
    }
    c += 1
})
