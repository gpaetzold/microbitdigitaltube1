input.onButtonPressed(Button.A, function () {
    tm.on()
    tm.showbit(1, 0)
})
input.onButtonPressed(Button.B, function () {
    tm.on()
    tm.showbit(2, 0)
})
let tm: TM1637.TM1637LEDs = null
tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
