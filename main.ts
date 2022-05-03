pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
radio.setGroup(92)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
let enabled = 0
let hlasy = ["None"]
let x = 0
let posilani = 0
forever(function votes() {
    
    while (posilani == 1) {
        for (let i = 0; i < 1; i++) {
            radio.sendValue("ack", control.deviceSerialNumber())
            basic.pause(5000)
            if (hlasy[x] == "A") {
                radio.sendValue("vote", 1)
                console.log("A")
            } else if (hlasy[x] == "B") {
                radio.sendValue("vote", 2)
                console.log("B")
            } else if (hlasy[x] == "C") {
                radio.sendValue("vote", 3)
                console.log("C")
            } else if (hlasy[x] == "D") {
                radio.sendValue("vote", 4)
                console.log("D")
            }
            
            console.log(hlasy[x])
            posilani = 0
            enabled = 0
            x = 0
            basic.clearScreen()
            console.log(hlasy[x])
        }
    }
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (enabled == 1) {
        if (posilani == 1) {
            
        } else {
            posilani = 1
        }
        
        hlasy.push("A")
        basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
        x += 1
        console.log(x)
    } else {
        
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (enabled == 1) {
        if (posilani == 1) {
            
        } else {
            posilani = 1
        }
        
        hlasy.push("B")
        basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
        x += 1
        console.log(x)
    } else {
        
    }
    
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
    if (enabled == 1) {
        if (posilani == 1) {
            
        } else {
            posilani = 1
        }
        
        hlasy.push("C")
        basic.showLeds(`
        . # # . .
        # . . # .
        # . . . .
        # . . # .
        . # # . .
        `)
        x += 1
        console.log(x)
    } else {
        
    }
    
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    
    if (enabled == 1) {
        if (posilani == 1) {
            
        } else {
            posilani = 1
        }
        
        hlasy.push("D")
        basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        `)
        x += 1
        console.log(x)
    } else {
        
    }
    
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "enabled" && value == 1) {
        enabled = 1
    }
    
    if (name == "enabled" && value == 0) {
        enabled = 0
    }
    
    if (name == "ack" && value == control.deviceSerialNumber()) {
        console.log(value)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    }
    
})
