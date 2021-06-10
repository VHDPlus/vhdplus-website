---
id: nios2
title: Program Software on your FPGA
sidebar_label: NIOS II
---

> :warning: This documentation is incomplete!

:::warning NIOS on Windows:
Since Quartus **19** you will need to install WSL on your system to use the NIOS tools.
Please follow the steps [here](#setup-for-quartus-19-or-newer-needed-for-windows-onlylo).
:::

Watch this tutorial to see how to add a processor to your FPGA design and program it like an Arduino:
<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/WZTix6MlBNM?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowfullscreen></iframe></div><br/>

## Introduction

It is possible to design a processor with the logic elements of the FPGA. This is for Intel a NIOS II soft core processor. 
After loading the processor on the FPGA, you can program it with the NIOS II Software Build Tools for Eclipse (Tools/Program NIOS II). 
The processor can be used like a 32-Bit microcontroller, but you can configure it according to your needs. Just add more I/Os' or another SPI interface if you need them!
Of course you can still use the left over logic elements and RAM together with the processor to combine FPGA and microcontroller.

Because this processor can be programmed with c++, people made the Arduino libraries compatible with the NIOS II processor.
Check out the NIOSDuino project on GitHub for more information: <a href="https://github.com/dimag0g/nios_duino" target="_blank">NIOSDuino</a>

The VHDPlus IDE features first class C++ support so you don't need to use any external tools.
![CPP Overview](/img/getstarted/C++.png)

The VHDPlus IDE has 3 important shortcuts to use NIOS in the toolbar.

![NIOS Buttons](/img/getstarted/NIOSButtons.png)

1. [Adding a NIOS II Processor to your project](#adding-a-nios-ii-processor-to-your-project)
2. [Adding a software project](#creating-a-software-project)
3. [Compiling and Downloading the software in one go](#creating-a-software-project)

## Setup for Quartus 19 or newer (needed for Windows only)

These steps are provided by Intel ([source](https://www.intel.com/content/altera-www/global/en_us/index/support/support-resources/knowledge-base/tools/2019/how-do-i-install-the-windows--subsystem-for-linux---wsl--on-wind.html)).

> :warning: **WSL 2.0** is not supported!

1. Install Ubuntu 18.04 in the Windows 10 Store<br/>
![WSL Install](/img/getstarted/Ubuntu18WSL.png)

2. Open Ubuntu 18.04 and enter a **username** and **password**.

3. Once Ubuntu WSL is running, copy & paste or enter the following commands<br/>
```terminal
sudo apt update; \
sudo apt install wsl; \
sudo apt install dos2unix; \
sudo apt install make;
```

4. Activate WSL NIOS in the VHDPlus IDE Settings<br/>
![WSL Setting](/img/getstarted/NIOSWSLSetting.png)

5. Done! You should be able to use NIOS with Quartus now!

## Adding a NIOS II processor to your project

> :warning: Make sure to **not have any spaces in your project path** to avoid problems with GNU Make.

The VHDPlus IDE makes it easy to add a NIOS II processor to your project.
Simply open the NIOS II Creator at `NIOS` -> `New` -> `Processor` and configure the processor to your needs.

![NIOS II Creator](/img/getstarted/NIOSCreate.png)

After that you can add the processor to your project by simply adding the component to your main vhdp file.

![NIOS II Add Component](/img/getstarted/NIOSAddComponent.png)

Next you can use the IDE to create the needed signals for you.

![NIOS II Create Signals](/img/getstarted/NIOSCreateSignals.png)

If you are done, you can compile your project.
All needed Signals are connected automatically. Now you can connect optional signals, for example I/Os to use from your software project.
![NIOS II Connect Signals](/img/getstarted/NiosCompile.png)
If you are done connecting signals, just click on compile.

This will generate a `.sopcinfo` file in your project folder that will be needed to create a software project. Download the design to your FPGA to be able to use software.

## Using software

### Creating a Software project

1. Open the Software Creator at `NIOS` -> `New` -> `Software` and choose a name for your software.
2. Select the `.sopcinfo` file you want to use for your software. If you only have one, you can leave this on default.
3. Check `Include NIOSDuino` if you want to allow Arduino like programming. 
4. Click on create and wait for the IDE to initialize the project

### Downloading software to your FPGA

1. If your project is configured correctly, you can simply click on the green arrow to compile and download your software to your FPGA

### Using the NIOS II JTAG Monitor

The NIOS II JTAG Monitor allows you to communicate with your FPGA over JTAG.
If you want to test the Hello World application you will need to use this.
You can find it in the menu at `NIOS` -> `NIOS II JTAG Monitor`

## Debugging

:::tip Coming Soon!
Since VHDPlus IDE **0.9.9.8** NIOS II Debugging is possible!
A detailed guide will arrive soon.
:::
