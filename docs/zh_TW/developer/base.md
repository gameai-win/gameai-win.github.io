#  LUA API  
* 系统采用[Lua5.4](https://www.lua.org/manual/5.4/manual.html)实现。  
* 支持大部分原生lua函数(少数危险API例外)  
* 可以支持两种文件类型  编译好的 `.psr` 和 `.lua`  
* 编译好的 `.psr` 是下载的成品脚本,里面包含了`受保护的`lua和res`资源`，无法改动  
* `.lua` 脚本是自己写的，可以改动  
* `.lua` 脚本写好后，你可以选择使用工具编译为 `.psr` 文件发布  
   
## 基础库  
* [op](#op) 提供图色识别功能  
* [game](#game) 提供主机操作功能  
   
## 主机库  
* [xbox](./xbox.md)  
* [playstation](./playstation.md)  
   
## 基础介绍   
   
### 脚本基础结构  
* 脚本由若干 LUA 文件与 res 目录组成  
* 脚本必须包含一个 `main` 函数  
* 脚本引擎启动时，会自动调用脚本中的 `main` 函数开始运行    
一个最简单的脚本:  
```lua  
    function main()  
        print("hello world")  
    end  
```  
   
   
### 全局变量  
所有以下划线开头的变量都是系统变量，不能修改  
```lua  
  _APP_VERSION      -- 系统版本号  
  _PATH             -- 当前脚本所在目录  
  _FILENAME         -- 当前运行脚本的文件名(入口文件)  
```  
   
## 全局函数  
### print  
#### 函数简介:  
显示信息  
```lua  
print("Hello World!")  
```  
### wait  
#### 函数简介:  
让脚本等待一定时间再向下运行  
```lua  
print("Hello World!")  
wait(1)   -- 等待一秒  
print("Hello World!")  
wait(0.2) -- 等待0.2秒  
print("Hello World!")  
```  
   
### sleep  
#### 函数简介:  
让脚本等待一定时间再向下运行,与上面的函数一样，只不过参数是毫秒  
```lua  
print("Hello World!")  
sleep(1000)   -- 等待一秒  
print("Hello World!")  
sleep(200) -- 等待0.2秒  
print("Hello World!")  
```  
   
### load_module  
#### Load a module  
加载一个三方库，成功加载以后，你可以使用三方库提供的功能函数  
````lua  
local ret = load_module( _PATH  .. "base.psr",_ENV)  
if ret then  
    print("load module success")  
else  
    print("load module failed")  
end  
````  
-----  
##  op  
### Ver    
返回当前op的版本号  
```lua  
print( op.Ver() )   
```  
### SetPath   
设置全局路径,设置了此路径后,所有接口调用中,相关的文件都相对于此路径. 比如图片,字库等.  
```lua  
op.SetPath("C:\\test\\res")  
```  
   
### FindPic  
#### 函数简介:  
查找指定区域内的图片,位图必须是24位色格式,支持透明色,当图像上下左右4个顶点的颜色一样时,则这个颜色将作为透明色处理.  
   
这个函数可以查找多个图片,只返回第一个找到的X Y坐标.  
   
#### 函数原型:  
```vb  
long FindPic(x1, y1, x2, y2, pic_name, delta_color,sim, dir,intX, intY)  
```  
#### 参数定义:  
> x1 整形数:区域的左上X坐标    
> y1 整形数:区域的左上Y坐标    
> x2 整形数:区域的右下X坐标    
> y2 整形数:区域的右下Y坐标    
> pic_name 字符串:图片名,可以是多个图片,比如"test.bmp|test2.bmp|test3.bmp"    
> delta_color 字符串:颜色色偏比如"203040" 表示RGB的色偏分别是20 30 40 (这里是16进制表示)    
> sim 双精度浮点数:相似度,取值范围0.1-1.0    
> dir 整形数:查找方向 0: 从左到右,从上到下 1: 从左到右,从下到上 2: 从右到左,从上到下 3: 从右到左, 从下到上    
> intX 变参指针:返回图片左上角的X坐标    
> intY 变参指针:返回图片左上角的Y坐标    
   
#### 返回值:  
   
整形数:  
> 返回找到的图片的序号,从0开始索引.如果没找到返回-1    
   
#### 示例:  
```lua  
local idx,x,y = op.FindPic(892,52,906,64,"a.bmp","202020",0.9,0)  
if -1 == idx then   
    print("没找到哦")  
else  
    print("找到了，坐标在",x,y)  
end  
```  
   
### Capture  
#### 函数简介:  
   
抓取指定区域(x1, y1, x2, y2)的图像,保存为file(24位位图)  
   
#### 函数原型:  
```vb  
long Capture(x1, y1, x2, y2, file)  
```  
#### 参数定义:  
   
> x1 整形数:区域的左上X坐标    
> y1 整形数:区域的左上Y坐标    
> x2 整形数:区域的右下X坐标    
> y2 整形数:区域的右下Y坐标    
> file 字符串:保存的文件名,保存的地方一般为SetPath中设置的目录,当然这里也可以指定全路径名.    
   
#### 返回值:  
> 0:失败    
> 1:成功    
   
#### 示例:  
```lua  
ret = op.Capture(0,0,2000,2000,"screen.bmp")  
if 1 == ret then   
    print("截图成功")  
end  
```  
   
### SetShowErrorMsg  
#### 函数简介:  
   
设置是否弹出错误信息,默认是打开.  
   
#### 函数原型:  
```vb  
long SetShowErrorMsg(show)  
```  
#### 参数定义:  
   
show  0表示不打开,1表示打开，2表示将错误信息写入文件  
   
#### 返回值:  
> 0 : 失败     
> 1 : 成功     
   
#### 示例:  
```lua  
op_ret = op.SetShowErrorMsg(0)  
```  
   
   
   
   
   
   
-----  
   
   
   
## game  
   
### LoadRes  
加载一个脚本模块,加载之后便可以使用模块提供的函数  
```lua  
    -- 此处的 _PATH 是一个系统变量，指定当前运行脚本的目录  
    -- 参数为路径，格式，_ENV (目前格式与_ENV为固定写法，照抄即可)  
    -- 加载当前脚本目录下的 base.psr 模块    
    game.LoadRes( _PATH .. "base.psr","bt",_ENV)  
    -- 加载后便可以调用base.psr中的函数了  
```  
   
## 主机函数   
好了，基础介绍完了，下面选择你的主机吧，开始介绍不同主机的特殊函数     
### [XBOX](xbox)    
### [PlayStation](playstation)    
### [Switch](switch)    