---
id: light_tracker
title: Light Tracker with Camera
sidebar_label:  Light Tracker
---

## What is the tutorial about?

![Light Tracker](/img/community/light_track_2.jpg)

In this tutorial you learn how to use a camera and servos. The white parts of the camera image are detected and with two servos the camera is turned into the direction of the light.

## What you need

**Important:** This are only links for the german products.<br/>

1.  [VHDPlus Core MAX10](/docs/components/vhdpcore_max10)
2.  [Camera and Display Extension](/docs/components/camera)
3.  [OV5647 camera*](https://amzn.to/39laTEX)
4.  [2 Servo Motors*](https://amzn.to/3cZKzlN)
5.  [HDMI Display*](https://amzn.to/2wr6NfW)

*This links are Affiliate Links. By purchasing with them you support us and our work, because we get a part of the revenue as commission. You still pay the same price.

## Hardware

I used hot glue, the 2 sevos and an unused pcb as base plate. <br/>
Realy nothing special. 

## The Electronics

![Light Tracker Electronics](/img/community/light_track_1.jpg)

Just add the Camera Extension on the top and connect the servos. The red and black cable has to be connected with 5V and GND and the yellow cable with a standard IO.

## Program the Tracker

You can find the code [here](https://github.com/leonbeier/Light_Tracker). 

Here are some important lines:

With 50Hz the Servo is turned in the direction of the light. After detection, Center_Direction_Move_Up/Down/Left/Right is set true if the light is not in the center.

```vhdp
Process ()
{
    Thread
    {
        If(Center_Direction_Move_Up AND Servo_Controller_Pos_Y < 127)
        {
            Servo_Controller_Pos_Y <= Servo_Controller_Pos_Y + 1;
        }
        Elsif(Center_Direction_Move_Down AND Servo_Controller_Pos_Y > 0)
        {
            Servo_Controller_Pos_Y <= Servo_Controller_Pos_Y - 1;
        }

        If(Center_Direction_Move_Left AND Servo_Controller_Pos_X > 0)
        {
            Servo_Controller_Pos_X <= Servo_Controller_Pos_X - 1;
        }
        Elsif(Center_Direction_Move_Right AND Servo_Controller_Pos_X < 127)
        {
            Servo_Controller_Pos_X <= Servo_Controller_Pos_X + 1;
        }

        Wait(20ms); --50Hz like framerate
    }
}
```

With the Min and Max values you can set the color to detect. 

```vhdp
NewComponent Color_Threshold_HSV_Filter
(
    CLK_Edge => false,

    H_Min    => 0,        --Min Hue (0°-180°)
    H_Max    => 255,      --Max Hue (0°-180°)
    S_Min    => 0,        --Min Saturation (0-255)
    S_Max    => 5,        --Max Saturation (0-255)
    V_Min    => 240,      --Min Brightness (0-255)
    V_Max    => 255,      --Max Brightness (0-255)

    iStream  => HSV_Stream,
    oStream  => Red_Threshold_Stream,
);
```

Here you can set the HDMI output settings (not important for the tracking)

```vhdp
--HDMI Output
    CONSTANT Force_Mono          : BOOLEAN := true;  --true forces the image to monochrome
    CONSTANT Capture_Color_Depth : NATURAL := 1;      --How many bits for each color
    CONSTANT Capture_Compression : NATURAL := 2;      --Higher value = less RAM but also less resolution
    CONSTANT Full_Image          : BOOLEAN := true;   --true -> full image with less resolution | false -> part of image with full resolution
```

And here you can select what should be shown with the display.

```vhdp
Camera_Capture_iStream <= Red_Threshold_Stream;
--Camera_Capture_iStream <= Camera_Stream;
```

We hope you enjoyed the tutorial and feel free to check out 
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vhdp) if you have problems
- [Youtube](https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw) if you are interested in more tutorials
- [Github](https://github.com/search?utf8=%E2%9C%93&q=vhdplus) for more examples and inspiration