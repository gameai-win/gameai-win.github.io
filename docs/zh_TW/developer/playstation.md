   
# Playstation API 列表  
   
## 按钮  
### 按钮列表  
```lua  
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
 playstation.VIEW          -- 切换视图，两个小框的小按钮   
 playstation.MENU          -- 三横那个按钮  
 playstation.PLS           -- 按下左摇杆    
 playstation.PRS           -- 按下右摇杆    
```  
   
   
### reset  
手柄重置为默认状态，放开所有按钮与摇杆  
```lua  
    playstation.reset()  
```  
   
### ok  
单击确认按钮,目前默认为单击 `X`  
```lua  
    playstation.ok()  
```  
### cancel  
单击取消按钮，目前默认为 `B`  
```lua  
    playstation.cancle()  
```  
### up  
左摇杆向上操作一次  
```  
    playstation.up()  
```  
### down  
左摇杆向下操作一次  
```  
    playstation.down()  
```  
### left  
左摇杆向左操作一次  
```  
    playstation.left()  
```  
### right  
左摇杆向事操作一次  
```  
    playstation.right()  
```  
   
### tap  
单击按钮    
参数：    
> key: 按键名称，可选值为：[按钮列表](#按钮列表)    
> hold_time : 按键按下后保持的时间，单位毫秒，默认为50毫秒      
```lua  
    playstation.tap(xbkx.B)  
```  
   
### key_down()  
按下按钮五定的时间，时间到了后会自动放开 ,也可以调用 [key_up](#key_up) 来提前放开按钮  
参数：    
> key: 按键名称，可选值为：[按钮列表](#按钮列表)    
> hold_time : 按键按下后保持的时间，单位毫秒，默认为50毫秒    
```lua  
    -- 按下B按钮 50  毫秒  
    playstation.key_down(xbkx.B)  
   
    -- 按下A按钮 100 毫秒  
    playstation.key_down(xbkx.A,100)  
```  
   
### key_up()  
放开按钮  
参数：    
> key: 按键名称，可选值为：[按钮列表](#按钮列表)    
```lua  
    playstation.key_up(xbkx.B)  
```  
   
--------------------------------------------  
## 摇杆  
   
## 摇杆列表  
```lua  
 playstation.LEFT    -- 左摇杆  
 playstation.RIGHT   -- 右摇杆  
   
```  
### 角度  
```  
           90  
            |  
    0  -----------  180  
            |  
           270   
```  
   
## 摇杆操作  
### axix    
把摇杆掰到指定角度，参数：    
> axis:    摇杆名称，可选值为：[摇杆列表](#摇杆列表)    
> angle:   摇杆角度，取值范围为0-360 [角度](#角度)  
> time_ms: 到指定角度后保持的时间，单位毫秒，默认为50毫秒    
   
```lua  
-- 左摇杆掰到90度位置，并保持 1000 毫秒  
playstation.axis(playstation.LEFT, 90, 1000)  
   
-- 左摇杆掰到180度位置，并保持 200 毫秒  
playstation.axis(playstation.LEFT, 180, 200)  
   
-- 右摇杆掰到270度位置，并保持 200 毫秒  
playstation.axis(playstation.RIGHT, 270, 200)  
   
```  
   
   
   
   