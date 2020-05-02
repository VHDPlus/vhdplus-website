---
id: components_motor
title: VHDPlus Motor Extension
sidebar_label:  Motor Extension
---

> :warning: Coming Soon

<video muted autoPlay><source src="/img/extensions/dcmotor/Motor_An.mp4" type="video/mp4"/>Your browser does not support the video tag. You can download the video anyway.</video>

The Motor and Encoder extension is the first step for your own robot. It supports most of the motors you can buy and allows to connect an encoder, so you can profit from the FPGA and keep track of the current speed and driven distance.

## Motor Overview
![Motor Overview](/img/extensions/dcmotor/Top_labled.png)

The VHDPlus Motor Extension features two DRV8871DDAR motor drivers, that can operate from 6.5-45V and deliver a maximum of 3A. To connect the power supply, just push the cables in the terminal block on the top. To disconnect them, push a small screw driver in the hole on the top.

To enable a motor, set one output pin high and the other low. For example set O1.1 '1' and O1.2 '0' to drive forward and O1.1 '0' and O1.2 '1' to drive backward.
By using PWM, you can also control the speed.

Check out [this tutorial](/docs/community_motor) to see how to use the extension. 