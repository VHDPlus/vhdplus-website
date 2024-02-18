---
id: motor
title: Motor Extension
sidebar_label:  Motor Extension
---

import Link from "@docusaurus/Link";

<Link className="button button--lg shopButton margin-bottom--lg" href="https://shop.vhdplus.com/product/vhdplus-motor-extension/">Get this product in our shop 🛒</Link>

:::tip New IDE for Professional Electronics Development
If you want to work on FPGA projects in a team or work on Edge-AI, you can check out [ONE WARE Studio](https://one-ware.com/studio)!
:::

<video muted autoPlay><source src="/img/extensions/dcmotor/Motor_An.mp4" type="video/mp4"/>Your browser does not support the video tag. You can download the video anyway.</video>

The Motor and Encoder extension is the first step for your own robot. It supports most of the motors you can buy and allows to connect an encoder, so you can profit from the FPGA and keep track of the current speed and driven distance.

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/JDgKACF503Q?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>

## Motor Overview
![Motor Overview](/img/extensions/dcmotor/Top_labled.png)

The Motor Extension features two DRV8871DDAR motor drivers, that can operate from 6.5-45V and deliver a maximum of 3A. To connect the power supply, just push the cables in the terminal block on the top. To disconnect them, push a small screw driver in the hole on the top.

To enable a motor, set one output pin high and the other low. For example set O1.1 '1' and O1.2 '0' to drive forward and O1.1 '0' and O1.2 '1' to drive backward.
By using PWM, you can also control the speed.

Check out [this tutorial](/docs/community/motor) to see how to use the extension. 