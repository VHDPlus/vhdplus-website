---
id: community_camera
title: Camera and Object Detection
sidebar_label:  Camera
---

## What is the tutorial about?

In this tutorial you learn how to use a camera and HDMI with an FPGA. You learn how to apply filters to the received images 
and finaly create an object detection. 

## Why an FPGA?

While a processor has to:

1.  Save the image from the camera in the RAM
2.  Read the first pixel from the RAM
3.  Apply the first filter
4.  Write the new value back in the RAM
5.  Repeat that for all 300k pixel
6.  Repeat everything for each filter

An FPGA does everything at once. The first pixel from the camera is received and goes to the first filter.
The last pixel goes to the second filter and so on. You have multiple components that all work independantly and 
don't reduce the quality or frame rate. Also the delay between receiving and the last filter is minimal.

<video muted autoPlay loop><source src="/img/community/Camera_Compare_2.webm" type="video/webm"/>Your browser does not support the video tag. You can download the video anyway.</video> 

## What you need

**Important:** This are only links for the german products.<br/>

1.  [VHDPlus Core MAX10](/docs/component_vhdpcore_max10)
2.  [Camera and Display Extension](/docs/components_camera)
3.  [OV5647 camera*](https://amzn.to/39laTEX)
4.  [HDMI Display*](https://amzn.to/2wr6NfW)

*This links are Affiliate Links. By purchasing with them you support us and our work, because we get a part of the revenue as commission. You still pay the same price.

## Structure of the camera libraries

![Demonstration](/img/community/Camera.webp)

## Program own object detection

We have a [really big, but well structured example](https://github.com/leonbeier/VHDPlus_Libraries_and_Examples/tree/master/Examples/Hardware/Input/Object_Recogition) for image detection, where you can see how all components are connected.<br/>
Click [here](https://github.com/leonbeier/VHDPlus_Libraries_and_Examples/tree/master/Examples/Hardware/Input/Object_Recogition) to open the example on GitHub. 

In the example, yellow, black, blue and white blobs are found. If there is a bigger yellow blob on the bottom and a smaller black or yellow blob on the top, these blobs are seen as one object and a cross is displayed at the position. The same for blue and white blobs. Finally Yellow/Black and Blue/White cones should be found in the image.

You have a lot of possibilities to change the HDMI output and optimize the object detection. Here are the first lines:

```vhdp
Main
(
    Camera_CLK_Lane      : IN     STD_LOGIC;
    Camera_Data_Lane     : IN     STD_LOGIC_VECTOR (1 downto 0);
    Camera_Enable        : OUT    STD_LOGIC;
    Camera_SCL           : INOUT  STD_LOGIC;
    Camera_SDA           : INOUT  STD_LOGIC;
    
    oHDMI_TX             : OUT    STD_LOGIC_VECTOR(2 downto 0);
    oHDMI_CLK            : OUT    STD_LOGIC;
    iHDMI_HPD            : IN     STD_LOGIC;
)
{
    CONSTANT CLK_Frequency : NATURAL := 48000000;
    
    --Camera Input
    CONSTANT Row_Buf  : BOOLEAN := true; --Uses more RAM, but helps with less noise
    
    --Color Correction and Threshold
    CONSTANT Debug_Mode  : NATURAL := 0; --To change Threshold and Color Correction parameters with ISSP
    --0 = No debug
    --1 = Color Correction (ISSP1 = G* ISSP2 = G/ ISSP3 = B* ISSP4 = B/ -> R* = 1   R/ = 1)
    --2 = Threshold Yellow (ISSP1 = H- ISSP2 = H+ ISSP3 = S- ISSP4 = V- -> S+ = 255 V+ = 255)
    --3 = Threshold Black  (ISSP1 = H- ISSP2 = H+ ISSP3 = S+ ISSP4 = V+ -> S- = 0   V- = 0)
    --4 = Threshold Blue   (ISSP1 = H- ISSP2 = H+ ISSP3 = S- ISSP4 = V- -> S+ = 255 V+ = 255)
    --5 = Threshold White  (ISSP1 = H- ISSP2 = H+ ISSP3 = S+ ISSP4 = V- -> S- = 0   V+ = 255)
    
    CONSTANT CC_G_Mult : NATURAL := 3;   --(Green * ...) / ...
    CONSTANT CC_G_Div  : NATURAL := 5;
    CONSTANT CC_B_Mult : NATURAL := 1;   --(Blue  * ...) / ...
    CONSTANT CC_B_Div  : NATURAL := 1;
    
    CONSTANT Ye_H_Min : NATURAL := 170;  --Hue mininmum value for yellow
    CONSTANT Ye_H_Max : NATURAL := 45;   --Hue maximum value for yellow
    CONSTANT Ye_S_Min : NATURAL := 100;  --Saturation minimum value for yellow
    CONSTANT Ye_V_Min : NATURAL := 60;   --Brightness minimum value for yellow
    
    CONSTANT Bk_H_Min : NATURAL := 0;    --Hue mininmum value for black
    CONSTANT Bk_H_Max : NATURAL := 255;  --Hue maximum value for black
    CONSTANT Bk_S_Max : NATURAL := 70;   --Saturation maximum value for black
    CONSTANT Bk_V_Max : NATURAL := 60;   --Brightness maximum value for black
    
    CONSTANT Bl_H_Min : NATURAL := 105;  --Hue mininmum value for blue
    CONSTANT Bl_H_Max : NATURAL := 150;  --Hue maximum value for blue
    CONSTANT Bl_S_Min : NATURAL := 120;  --Saturation minimum value for blue
    CONSTANT Bl_V_Min : NATURAL := 50;   --Brightness minimum value for blue
    
    CONSTANT Wh_H_Min : NATURAL := 0;    --Hue mininmum value for white
    CONSTANT Wh_H_Max : NATURAL := 255;  --Hue maximum value for white
    CONSTANT Wh_S_Max : NATURAL := 120;  --Saturation maximum value for white
    CONSTANT Wh_V_Min : NATURAL := 200;  --Brightness minimum value for white
    
    --Compression (AreaLimitedCompression)
    CONSTANT Enable_Compression  : BOOLEAN := true;  --Uses more RAM, decreases noise
    
    CONSTANT Max_Area            : NATURAL := 4; --Bigger Area = less noise but higher RAM usage
    CONSTANT Min_Area            : NATURAL := 2;
    CONSTANT Min_Pixel_Num       : NATURAL := ((Max_Area**2)/2)*1; --min 50% correct color
    
    --Blob Detection
    CONSTANT Blob_Min_H  : NATURAL := 3;   --< = Detect smaller blobs
    CONSTANT Blob_Min_W  : NATURAL := 3;
    CONSTANT Blob_Max_H  : NATURAL := 20;  --> = Detect bigger blobs
    CONSTANT Blob_Max_W  : NATURAL := 40;
    
    --Cone Detection
    CONSTANT Cone_31_Dist_Mult : NATURAL := 3; --Bigger = detect more cones but less accurate
    CONSTANT Cone_32_Dist_Mult : NATURAL := 2;
    
    --Capture and video output parameters

    --|Nr.| Output                            | Color type                  | Recommended color depth  | Recommended compression |
    --|   |                                   | (Force_Mono = false)        | -> Capture_Color_Depth   | -> Capture_Compression  |
    --|---|-----------------------------------|-----------------------------|--------------------------|-------------------------|
    --| 0 | Camera                            | RGB                         | 4                        | 4-5                     |
    --| 1 | Color Filter                      | RGB                         | 4                        | 4-5                     |
    --| 2 | HSV                               | Mono (only Hue)             | 8                        | 4-5                     |
    --| 3 | Threshold with Color_Select color | BW                          | 1                        | 1-2                     |
    --| 4 | Output 3 after Area Compression   | BW                          | 1                        | 1-2                     |
    --| 5 | Blobs                      (ISSP) | RGB                         | 1                        | 2                       |
    --| 6 | Output 7 with marked cones (ISSP) | RGB                         | 1                        | 2                       |
    --| 7 | Threshold with all colors         | RGB                         | 1                        | 2                       |
    
    CONSTANT Capture_Output      : NATURAL := 6;
    CONSTANT Force_Mono          : BOOLEAN := false;  --true forces the image to monochrome
    CONSTANT Capture_Color_Depth : NATURAL := 1;      --How many bits for each color
    CONSTANT Capture_Compression : NATURAL := 2;      --Higher value = less RAM but also less resolution
    CONSTANT Full_Image          : BOOLEAN := true;   --true -> full image with less resolution | false -> part of image with full resolution
    
    SIGNAL Color_Select          : NATURAL range 0 to 3 := 2;  --0 = Yellow 1 = Black 2 = Blue 3 = White
    
    .
    .
    .
```

You can set Capture_Output to 5 so you only output one color. By default the selected color is Blue, so you can change the parameters for blue blobs (Bl_H_Min, Bl_H_Max, ...) to try your own colors.

#### Important: Check the description of the CSI_Camera component. Here you can see what you have to do so the differential IOs for camera and HDMI work properly.

#### Make sure you set Camera_Enable to '1'

## Conclusion

It is pretty difficult to handle this many components, but if you take the example and adapt it to your needs, the object detection is easy like with a processor but at a way higher performance. This Project also has a lot of potential to be expanded and be used for Robots and other smart, high speed products.

We hope you enjoyed the tutorial and feel free to check out 
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vhdp) if you have problems
- [Youtube](https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw) if you are interested in more tutorials
- [Github](https://github.com/search?utf8=%E2%9C%93&q=vhdplus) for more examples and inspiration