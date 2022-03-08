# LUA API
* The system is implemented using [Lua5.4](https://www.lua.org/manual/5.4/manual.html).
* Supports most native lua functions (except for a few dangerous APIs)
* Can support two file types compiled `.psr` and `.lua`
* The compiled `.psr` is the downloaded finished script, which contains `protected `lua and res` resources`, which cannot be changed
* `.lua` script is written by yourself and can be changed
* After the `.lua` script is written, you can choose to use tools to compile it as a `.psr` file and publish it

## Base library
* [op](#op) provides color recognition function
* [game](#game) provides host operation function

## Host library
* [xbox](./xbox.md)
* [playstation](./playstation.md)

## Basic introduction

### Scripting infrastructure
* The script consists of several LUA files and res directory
* The script must contain a `main` function
* When the script engine starts, it will automatically call the `main` function in the script to start running
A minimal script:
````lua
    function main()
        print("hello world")
    end
````


### Global variables
All variables starting with an underscore are system variables and cannot be modified
````lua
  _APP_VERSION -- system version number
  _PATH -- the directory where the current script is located
  _FILENAME -- the filename of the currently running script (entry file)
````

## Global function
### print
#### Function introduction:
Display information
````lua
print("Hello World!")
````
### wait
#### Function introduction:
Make the script wait for a certain amount of time before running down
````lua
print("Hello World!")
wait(1) -- wait for one second
print("Hello World!")
wait(0.2) -- wait 0.2 seconds
print("Hello World!")
````

### sleep
#### Function introduction:
Let the script wait for a certain amount of time before running down, the same as the function above, but the parameter is milliseconds
````lua
print("Hello World!")
sleep(1000) -- wait for one second
print("Hello World!")
sleep(200) -- wait 0.2 seconds
print("Hello World!")
````


-----
## op
### Ver
Returns the version number of the current op
````lua
print( op.Ver() )
````
### SetPath
Set the global path. After this path is set, in all interface calls, related files are relative to this path. For example, pictures, fonts, etc.
````lua
op.SetPath("C:\\test\\res")
````

### FindPic
#### Function introduction:
Find the picture in the specified area. The bitmap must be in 24-bit color format and support transparent color. When the color of the 4 vertices on the top, bottom, left, and right of the image is the same, this color will be treated as a transparent color.

This function can look up multiple images and only returns the X Y coordinates of the first found.

#### Function prototype:
````vb
long FindPic(x1, y1, x2, y2, pic_name, delta_color,sim, dir,intX, intY)
````
#### Parameter definition:
> x1 integer: the upper left X coordinate of the area
> y1 integer: the upper left Y coordinate of the region
> x2 integer: the lower right X coordinate of the area
> y2 integer: the lower right Y coordinate of the region
> pic_name String: picture name, can be multiple pictures, such as "test.bmp|test2.bmp|test3.bmp"
> delta_color string: color shift such as "203040" indicates that the color shift of RGB is 20 30 40 (here is the hexadecimal representation)
> sim double-precision floating-point number: similarity, value range 0.1-1.0
> dir integer: search direction 0: left to right, top to bottom 1: left to right, bottom to top 2: right to left, top to bottom 3: right to left, bottom to superior  
> intX variable parameter pointer: returns the X coordinate of the upper left corner of the picture
> intY variable parameter pointer: returns the Y coordinate of the upper left corner of the picture

#### return value:

Integer number:
> Return the serial number of the found image, indexed from 0. If not found, return -1

#### Example:
````lua
local idx,x,y = op.FindPic(892,52,906,64,"a.bmp","202020",0.9,0)
if -1 == idx then
    print("Not found")
else
    print("Found, the coordinates are ",x,y)
end
````

### Capture
#### Function introduction:

Grab the image of the specified area (x1, y1, x2, y2) and save it as a file (24-bit bitmap)

#### Function prototype:
````vb
long Capture(x1, y1, x2, y2, file)
````
#### Parameter definition:

> x1 integer: the upper left X coordinate of the area
> y1 integer: the upper left Y coordinate of the region
> x2 integer: the lower right X coordinate of the area
> y2 integer: the lower right Y coordinate of the region
> file String: The name of the file to be saved, the place to save is generally the directory set in SetPath, of course, the full path name can also be specified here.

#### return value:
> 0: failed
> 1: success

#### Example:
````lua
ret = op.Capture(0,0,2000,2000,"screen.bmp")
if 1 == ret then
    print("Successful screenshot")
end
````
 
### SetShowErrorMsg
#### Function introduction:

Set whether to pop up an error message, the default is open.

#### Function prototype:
````vb
long SetShowErrorMsg(show)
````
#### Parameter definition:

show 0 means not open, 1 means open, 2 means write error information to the file

#### return value:
> 0 : failed
> 1 : success

#### Example:
````lua
op_ret = op.SetShowErrorMsg(0)
````





-----



## game

### LoadRes
Load a script module, after loading, you can use the functions provided by the module
````lua
    -- _PATH here is a system variable that specifies the directory where the script is currently running
    -- The parameters are path, format, _ENV (the current format and _ENV are fixed writing, just copy)
    -- Load the base.psr module in the current script directory
    game.LoadRes( _PATH .. "base.psr","bt",_ENV)
    -- After loading, you can call the function in base.psr
````

## Host function
Ok, the basic introduction is over, choose your host below, and start to introduce the special functions of different hosts  
### [XBOX](xbox)  
### [PlayStation](playstation)  
### [Switch](switch)  