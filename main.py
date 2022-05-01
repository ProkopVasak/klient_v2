pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
radio.set_group(69)
radio.set_transmit_serial_number(True)
radio.set_transmit_power(7)
enabled = 0
hlasy = ["None"]
x = 0
posilani = 0 
def votes(): 
    global posilani, hlasy, x, enabled   
    while posilani == 1:
        
        for i in range(1):
            basic.pause(5000)
            if hlasy[x] == "A":
                radio.send_value("vote", 1)
                print("A")
            elif hlasy[x] == "B":
                radio.send_value("vote", 2)
                print("B")
            elif hlasy[x] == "C":
                radio.send_value("vote", 3)
                print("C")
            elif hlasy[x] == "D":
                radio.send_value("vote", 4)
                print("D")
            print(hlasy[x]) 
            posilani = 0
            enabled = 0 
            x = 0 
            print(hlasy[x])         
forever(votes)

def on_button_pressed_a():
    global enabled, hlasy, x, posilani
    if enabled == 1:
        if posilani == 1:
            pass
        else:
            posilani = 1  
        hlasy.append("A")
        x += 1
        print(x)
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_b():
    global enabled, hlasy, x, posilani
    if enabled == 1:
        if posilani == 1:
            pass
        else:
            posilani = 1    
        hlasy.push("B")
        x += 1
        print(x)

    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)
def on_pin_pressed_p1():
    global enabled, x, hlasy, posilani
    if enabled == 1:
        if posilani == 1:
            pass
        else:
            posilani = 1    
        hlasy.push("C")
        x += 1
        print(x)
    else:
        pass
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
def on_pin_pressed_p2():
    global enabled, hlasy, x, posilani
    if enabled == 1:
        if posilani == 1:
            pass
        else:
            posilani = 1    
        hlasy.push("D")
        x += 1
        print(x)
    else:
        pass
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_received_value(name, value):
    global enabled
    if name == "vote" and value == 1:

        basic.show_icon(IconNames.HEART)
    if name == "enabled" and value == 1:
        enabled = 1
        
    if name == "enabled" and value == 0:
        enabled = 0
        
    if name == "ack" and value == control.device_serial_number():
        print(value)
        basic.show_icon(IconNames.HEART)
        basic.pause(300)
        basic.clear_screen()
radio.on_received_value(on_received_value)

def on_received_number(receivedNumber):
    basic.show_icon(IconNames.HEART)
    basic.pause(3000)
    basic.clear_screen()
radio.on_received_number(on_received_number)
print(control.device_serial_number())