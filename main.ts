let ret = false
let i = 0
let j = 0
let c = 1
basic.forever(function () {
    j = 0
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
    i = 0
    ret = false
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(j, i)
            if (ret) {
                j += -1
            } else {
                j += 1
            }
            basic.pause(100)
            basic.clearScreen()
        }
        if (j >= 5) {
            ret = true
            j += -1
        } else {
            ret = false
            j += 1
        }
        i += 1
    }
})
