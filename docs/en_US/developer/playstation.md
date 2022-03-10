# Playstation API List  
   
## Button list  
````lua  
 playstation.X  
 playstation.Y  
 playstation.A  
 playstation.B  
 playstation.DPAD_LEFT  
 playstation.DPAD_RIGHT  
 playstation.DPAD_UP  
 playstation.DPAD_DOWN  
 playstation.LT  
 playstation.RT  
 playstation.LB  
 playstation.RB  
 playstation.XBOX  
 playstation.VIEW -- toggle view, small buttons for two small boxes  
 playstation.MENU -- the button with three horizontal lines  
 playstation.PLS -- press left stick  
 playstation.PRS -- press the right stick  
````  
   
   
### reset  
Reset the handle to the default state, release all buttons and joysticks  
````lua  
    playstation.reset()  
````  
   
### ok  
Click the confirm button, currently the default is to click `X`  
````lua  
    playstation.ok()  
````  
### cancel  
Click the Cancel button, currently defaults to `B`  
````lua  
    playstation.cancle()  
````  
### up  
Move the left joystick up once  
````  
    playstation.up()  
````  
### down  
Move the left joystick down once  
````  
    playstation.down()  
````  
### left  
Move the left joystick to the left once  
````  
    playstation.left()  
````  
### right  
Left joystick to move once  
````  
    playstation.right()  
````  
   
### tap  
Click the button  
Parameters:  
> key: key name, optional value: [button list](#button list)  
> hold_time : The time to hold the button after the button is pressed, in milliseconds, the default is 50 milliseconds  
````lua  
    playstation.tap(xbkx.B)  
````  
   
### key_down()  
Press the button for five set time, and it will be released automatically when the time is up. You can also call [key_up](#key_up) to release the button in advance  
Parameters:  
> key: key name, optional value: [button list](#button list)  
> hold_time : The time to hold the button after the button is pressed, in milliseconds, the default is 50 milliseconds  
````lua  
    -- Press the B button for 50 ms  
    playstation.key_down(xbkx.B)  
   
    -- Press the A button for 100 ms  
    playstation.key_down(xbkx.A,100)  
````  
   
### key_up()  
release the button  
Parameters:  
> key: key name, optional value: [button list](#button list)  
````lua  
    playstation.key_up(xbkx.B)  
````  
   
--------------------------------------------  
## Joystick  
   
## joystick list  
````lua  
 playstation.LEFT -- left stick  
 playstation.RIGHT -- right joystick  
   
````  
### angle  
````  
           90  
            |  
    0 ------------- 180  
            |  
           270  
````  
   
## Joystick operation  
###axix  
Bend the joystick to the specified angle, parameters:  
> axis: joystick name, optional value: [joystick list](#joystick list)  
> angle: joystick angle, the value range is 0-360 [angle](#angle)  
> time_ms: The time to keep after reaching the specified angle, in milliseconds, the default is 50 milliseconds  
   
````lua  
-- move the left stick to 90 degrees and hold it for 1000 ms  
playstation.axis(playstation.LEFT, 90, 1000)  
   
-- move the left stick to 180 degrees and hold it for 200 ms  
playstation.axis(playstation.LEFT, 180, 200)  
   
-- move the right stick to 270 degrees and hold it for 200 ms  
playstation.axis(playstation.RIGHT, 270, 200)  
   
````  