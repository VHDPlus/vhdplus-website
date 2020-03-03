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

![Demonstration](/img/community/Camera_Compare.webp)

## What you need

**Important:** This are only links for the german products.<br/>

1.  [VHDPlus Core MAX10](https://www.trenz-electronic.de/)
2.  [Camera and Display Extension](https://www.trenz-electronic.de/)
3.  [OV5647 camera*](https://amzn.to/39laTEX)
4.  [HDMI Display*](https://amzn.to/2wr6NfW)

*This links are Affiliate Links. By purchasing with them you support us and our work, because we get a part of the revenue as commission. You still pay the same price.

## Structure of the camera libraries



## Conclusion

This is another example of a cool usefull project with an LED matrix. Here are some more:<br/>
1. [Text/Image displayer](community_matrix.md)<br/>
2. [Clock with timer](https://github.com/leonbeier/Matrix-Clock)<br/>
3. [Custom text displayer](https://github.com/HendrikMennen/vhdplus-tests/tree/master/SerialMatrix)
## Possible problems
### Matrix is dark
1. Check if everything is connected properly (3.3V, 5V and GND connected? Does the level shifter have a connection? Correct Pins used?)
2. Is the program correct? (Shutdown => '0'? Does LED_Matrix_Config change from '0' to '1' when the matrix has power?)
3. Has the matrix a MAX7219 IC?
4. Check if the I2S_Interface_IN_Data_L data changes, so the microphone works properly. This code outputs the value with the matrix:
```vhdp
While(true)
{
    For(i IN 0 to 17)
    {
        LED_Matrix_Panel_Bitmap(i)(0) <= I2S_Interface_IN_Data_L(i);
    }
    
    --Update image -> show already defined image
    LED_Matrix_Update     <= '0';
    Step { LED_Matrix_Update <= '1'; }
    
    Wait(50ms);
}
```
### Last column always on
Try to play around with offset constant. The last column is the one for the lowest frequency and an offset is interpreted as a verry low frequency.
### Not sensitive enought
You can set a lower value as volume_divider to increase sensitivity.

We hope you enjoyed the tutorial and feel free to check out 
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vhdp) if you have problems
- [Youtube](https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw) if you are interested in more tutorials
- [Github](https://github.com/search?utf8=%E2%9C%93&q=vhdplus) for more examples and inspiration