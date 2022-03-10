#XBOX  
   
## Button  
### Button list  
````lua  
 xbox.X  
 xbox.Y  
 xbox.A  
 xbox.B  
 xbox.DPAD_LEFT  
 xbox.DPAD_RIGHT  
 xbox.DPAD_UP  
 xbox.DPAD_DOWN  
 xbox.LT  
 xbox.RT  
 xbox.LB  
 xbox.RB  
 xbox.XBOX  
 xbox.VIEW -- toggle view, small buttons for two small boxes  
 xbox.MENU -- the three-horizontal button  
 xbox.PLS -- press left stick  
 xbox.PRS -- press the right stick  
````  
   
## Button action  
### reset  
Reset the handle to the default state, release all buttons and joysticks  
````lua  
    xbox.reset()  
````  
   
### ok  
Click the confirm button, currently the default is to click `X`  
````lua  
    xbox.ok()  
````  
### cancel  
Click the Cancel button, currently defaults to `B`  
````lua  
    xbox.cancle()  
````  
### up  
Move the left joystick up once  
````  
    xbox.up()  
````  
### down  
Move the left joystick down once  
````  
    xbox.down()  
````  
### left  
Move the left joystick to the left once  
````  
    xbox.left()  
````  
### right  
Left joystick to move once  
````  
    xbox.right()  
````  
   
### tap  
Click the button  
Parameters:  
> key: key name, optional value: [button list](#button-list)  
> hold_time : The time to hold the button after the button is pressed, in milliseconds, the default is 50 milliseconds  
````lua  
    xbox.tap(xbkx.B)  
````  
   
### key_down()  
Press the button for five set time, and it will be released automatically when the time is up. You can also call [key_up](#key_up) to release the button in advance  
Parameters:  
> key: key name, optional value: [button list](#button-list)  
> hold_time : The time to hold the button after the button is pressed, in milliseconds, the default is 50 milliseconds  
````lua  
    -- Press the B button for 50 ms  
    xbox.key_down(xbkx.B)  
   
    -- Press the A button for 100 ms  
    xbox.key_down(xbkx.A,100)  
````  
   
### key_up()  
release the button  
Parameters:  
> key: key name, optional value: [button list](#button list)  
````lua  
    xbox.key_up(xbkx.B)  
````  
   
## Joystick  
   
### Joystick list  
````lua  
 xbox.LEFT -- left stick  
 xbox.RIGHT -- right joystick  
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
xbox.axis(xbox.LEFT, 90, 1000)  
   
-- move the left stick to 180 degrees and hold it for 200 ms  
xbox.axis(xbox.LEFT, 180, 200)  
   
-- move the right stick to 270 degrees and hold it for 200 ms  
xbox.axis(xbox.RIGHT, 270, 200)  
   
````  
   
   
## Let's try it out?  
* In the lua directory we create a study directory    
* Create a challenge.lua file and a res directory in the study directory just suggested     
--------------  
   
```lua  
--challenge.lua  
   
-- The function of the following function is to set the resource directory to the newly created res directory  
-- Copy this function directly into it without changing it  
function init()  
    -- judge whether it is currently packaged lua,   
    -- packaged Lua does not need to set the resource directory,   
    -- and does not need to manually load other Lua files  
    if not PACKED_LUA then   
        op.SetPath(_PATH .. "res") -- set the resource directory  
        load_module( PATH .. "map.lua" , _ENV ) -- load the map.lua file  
    end  
end  
   
function main()  
    init()  
end  
   
```  
   
--------------  