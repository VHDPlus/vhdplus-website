---
id: guide_nios2
title: Programming with Arduino
sidebar_label: NIOS II
---

> :warning: This documentation is outdated!


It is possible to design a processor with the logic elements of the FPGA. This is for Intel a NIOS II soft core processor. 
After loading the processor on the FPGA, you can program it with the NIOS II Software Build Tools for Eclipse (Tools/Program NIOS II). 
The processor can be used like a 32-Bit microcontroller, but you can configure it according to your needs. Just add more I/Os' or another SPI interface if you need them!
Of course you can still use the left over logic elements and RAM together with the processor to combine FPGA and microcontroller.

Because this processor can be programmed with c++, people made the Arduino libraries compatible with the NIOS II processor.
Check out the NIOSDuino project on GitHub for more information: <a href="https://github.com/dimag0g/nios_duino" target="_blank">NIOSDuino</a>

![VHDP Overview](/img/getstarted/NIOSDuino.PNG)

Watch this tutorial to see how to add a processor to your FPGA design and program it with Arduino:
<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/YhavjKajX_w?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowfullscreen></iframe></div>

