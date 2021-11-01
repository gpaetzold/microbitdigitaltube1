def on_button_pressed_a():
    tm.on()
    tm.showbit(1, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    tm.on()
    tm.showbit(2, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

tm: TM1637.TM1637LEDs = None
tm = TM1637.create(DigitalPin.P1, DigitalPin.P2, 7, 4)