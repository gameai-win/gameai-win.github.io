
# XBOX

## 按钮
### 按钮列表
```lua
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
 xbox.VIEW          -- 切换视图，两个小框的小按钮 
 xbox.MENU          -- 三横那个按钮
 xbox.PLS           -- 按下左摇杆  
 xbox.PRS           -- 按下右摇杆  
```

## 按钮操作
### reset
手柄重置为默认状态，放开所有按钮与摇杆
```lua
    xbox.reset()
```

### ok
单击确认按钮,目前默认为单击 `X`
```lua
    xbox.ok()
```
### cancel
单击取消按钮，目前默认为 `B`
```lua
    xbox.cancle()
```
### up
左摇杆向上操作一次
```
    xbox.up()
```
### down
左摇杆向下操作一次
```
    xbox.down()
```
### left
左摇杆向左操作一次
```
    xbox.left()
```
### right
左摇杆向事操作一次
```
    xbox.right()
```

### tap
单击按钮  
参数：  
> key: 按键名称，可选值为：[按钮列表](#按钮列表)  
> hold_time : 按键按下后保持的时间，单位毫秒，默认为50毫秒    
```lua
    xbox.tap(xbkx.B)
```

### key_down()
按下按钮五定的时间，时间到了后会自动放开 ,也可以调用 [key_up](#key_up) 来提前放开按钮
参数：  
> key: 按键名称，可选值为：[按钮列表](#按钮列表)  
> hold_time : 按键按下后保持的时间，单位毫秒，默认为50毫秒  
```lua
    -- 按下B按钮 50  毫秒
    xbox.key_down(xbkx.B)

    -- 按下A按钮 100 毫秒
    xbox.key_down(xbkx.A,100)
```

### key_up()
放开按钮
参数：  
> key: 按键名称，可选值为：[按钮列表](#按钮列表)  
```lua
    xbox.key_up(xbkx.B)
```

## 摇杆

### 摇杆列表
```lua
 xbox.LEFT    -- 左摇杆
 xbox.RIGHT   -- 右摇杆
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
xbox.axis(xbox.LEFT, 90, 1000)

-- 左摇杆掰到180度位置，并保持 200 毫秒
xbox.axis(xbox.LEFT, 180, 200)

-- 右摇杆掰到270度位置，并保持 200 毫秒
xbox.axis(xbox.RIGHT, 270, 200)

```


## 让我们来实战一下?
* 在lua目录下我们建一个 study 目录
* 在刚刚建议的 study 目录下创建一个 challenge.lua 文件 和一个 res 目录   

--------------

```lua
-- challenge.lua

-- 下面个函数的作用是把资源目录设置到刚刚新建的 res 目录
-- 这个函数直接抄进去别改动
function init()
    --[[ 判断一下当前是否是打包好的lua，
    打包好的Lua不需要设置资源目录,
    也不需要手动加载其它Lua文件 ]]
    if not PACKED_LUA then  
        op.SetPath(_PATH .. "res")  -- 设置资源目录
        load_module( PATH .. "map.lua" , _ENV ) -- 加载 map.lua 文件
    end
end

function main()
    init()
end

```


--------------