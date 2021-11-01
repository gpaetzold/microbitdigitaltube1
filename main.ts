input.onButtonPressed(Button.A, function () {
    tm.on()
    tm.showbit(1, 0)
})
input.onButtonPressed(Button.B, function () {
    tm.on()
    tm.showbit(2, 0)
})
let tm: TM1637.TM1637LEDs = null
basic.showIcon(IconNames.Happy)
tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P3))
    tm.on()
    tm.showNumber(pins.analogReadPin(AnalogPin.P3))
    basic.pause(1000)
    tm.clear()
    tm.off()
    basic.pause(1000)
})
