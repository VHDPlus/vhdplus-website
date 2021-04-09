---
id: logic_analyzer
title: Logic Analyzer with PulseView
sidebar_label:  Logic Analyzer
---

## What is the tutorial about?

![Light Tracker](/img/community/Pv_spiflash_windows10.png)

In this tutorial you learn how to convert FPGA into a Logic Analyzer. Because of the high performance even sample rates of 200MHz and more would be possible. And if you would buy a logic analyzer with this sample rates, you would have to spend more than 100€. 

The code in this tutorial allows 100MHz and the usage of PulseView that also has a wide range of features to analyze your results.

## What you need

- [VHDPlus Core MAX10](/docs/components/vhdpcore_max10) or [MAX1000](/docs/components/max1000)

## Hardware

If you have 3.3V signals to measure, you can just connect the signals with the FPGA pins and the GND pin.
If you want to use the FPGA as normal Logic Analyzer, you should add protections to the pins (for example with the 74HC245)

## The OLS Logic Analyzer

You can find the code [here](https://github.com/leonbeier/OLS_Logic_Analyzer_VHDP). 

This project consists of the following:
- VHDPlus project file "OLS_Logic_Analyzer.vhdpproj" that you can open with the VHDPlus IDE
- VHDP main file "OLS_Logic_Analyzer.vhdp" in that the logic analyzer is added, configured and the needed pins are connected with the FPGA I/Os
- Folder with logic analyzer source files. This is a project from Michael Poppitz that is converted to verilog and adapted for the usage of the internal RAM. 

You can find more information about the OLS logic analyzer [here](https://sigrok.org/wiki/Openbench_Logic_Sniffer).

You can find more information about the HDL project [here](https://www.sump.org/projects/analyzer/).

## Convert the FPGA into a Logic Analyzer

- Clone the repository
- Open the project with the VHDPlus IDE
- Compile the code (you can change the development board and pins with that the inputs are connected)
- Program the FPGA (select Extras/Long-Term Programming to save the program on the FPGA)

## Use the Logic Analyzer

- Download PulseView here
- Install the program
- Go to the device selection and select Openbench Logic Sniffer & SUMP compatibles (ols)
- Select the COM port of the FPGA Board, search for the device and select the logic analyzer
- Try out the functions of the program and start the logic analyzer in the upper left corner
- You should set the sample number to 10k or less and the sample rate to 100MHz or less (keep in mind that the sampling time increases with a smaller sample rate)
- Make sure to zoom in, so you can see the measurement

## Video Tutorial

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/WZTix6MlBNM?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowfullscreen></iframe></div>


We hope you enjoyed the tutorial and feel free to check out 
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vhdp) if you have problems
- [YouTube](https://www.youtube.com/channel/UC7qiOvlaBSiWyAb7R1xTaEw) if you are interested in more tutorials
- [GitHub](https://github.com/search?utf8=%E2%9C%93&q=vhdplus) for more examples and inspiration