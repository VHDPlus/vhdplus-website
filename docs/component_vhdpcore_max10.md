---
id: component_vhdpcore_max10
title: VHDPlus Core MAX10
---

![VHDP Core MAX10](/img/vhdpcore/max10_img.jpg)

> This board isn't build for a one time use - It is an investment in all the projects you can now instantly control with just one piece of hardware

#### The Board
The VHDPlus Core MAX10 is the entry into FPGA programming. With its many I/Os, internal ADC, large RAM, Flash and an onboard USB programmer, you can even realize complex projects with many components and an internal Arduino-compatible processor that work together.<br/>
Unlike other cheap development boards it features a CRUVI High Speed connector that allows to connect e.g. Camera, Display, RAM, Ethernet and a lot more extensions with differential I/Os so the FPGA can reach its full potential.

#### The FPGA
The MAX 10 FPGA with 8,000 logic elements can handle tasks from controlling robots to handle audio and video signals. Unlike other FPGAs, it features internal Flash and an ADC, so you can directly save your programs on the chip and don't have to use an external ADC to read analog values.

#### The Integration
Form the libraries to the grafical pin assignment, with the Core MAX10 and the VHDPlus IDE you get the best FPGA programming experience. Just connect the board with an USB cable and you can not only program the FPGA, but also send and receive data via the same USB connection.

## Core Overview
![Core M Overview](/img/vhdpcore/Items2.png)

On the top, the Core MAX10 features an onboard LED, button, switch and a CRUVI High Speed and Low Speed connector.<br/>
With the USB port you can program the FPGA and use debug functions.<br/>
The switches 1-3 set the I/O voltage of the green marked pins.

> :warning: 3.3V I/O Voltage! Use Level Shifter to Connect 5V Hardware

![Core M Overview](/img/vhdpcore/Items4.png)

Other hardware can be connected on the bottom with the 2.54mm headers.

Keep in mind: 
- The ADC I/Os can be used like normal I/Os.
- The I/Os A0-B5 and LS16-19 are also connected with the CRUVI HS connector and depending on the extension you connect with the HS connector, some of them may be unusable.

### Specs

    MAX 10 FPGA (10M08SAU169C8G):
        Logic Elements          - 8,000
        RAM                     - 378 Kb
        Configuration Memory    - 2.24 Mb
        ADC                     - 1 Mio. Samples/s
                                - 12 Bit
                                - 9 Inputs
        PLL                     - 2
                                - > 300 MHz
        18 x 18 Multiplier      - 24
        Configuration Images    - 2
    SDRAM (W9864G6JT-6):        - 64 Mb
    Flash (W74M64FVSSIQ):       - 64 Mb
    Oscillator (DSC6011ME2A):   - 12 MHz

### Reasons for an FPGA

#### 1. Speed
With an FPGA you can not only program software, but also hardware. Here is a quick comparison:

|                        |Software                                      |Hardware         |
|------------------------|----------------------------------------------|-----------------|
|Parallel Processes      |Usualy 1                                      |As many as needed|
|Cycles for one operation|From 4 up to dozens<br/>depending on operation|1                |
|Operations per Cycle    |1                                             |As many as needed|

If you need the speed, you program hardware and for the rest you can still put a processor on the FPGA.

#### 2. Versatility
Normaly you have e.g. 8 PWM pins and 2 UART, 1 SPI and 1 I²C controller. With an FPGA you just take the UART component from the libraries and add it to your design as often as you want. <br/>
But also protocols that are not used that often, like I²S for audio data, are no problem.

### Comparison

|                                            | Core MAX10 | TinyFPGA BX | Alchitry Cu |
|--------------------------------------------|------------|-------------|-------------|
| Logic Elements                             | 8000       | 7680        | 7680        |
| Internal RAM                               | 378 Kb     | 128 Kb      | 128 Kb      |
| External RAM                               | 64 Mb      | 0           | 0           |
| Usable IOs                                 | 74         | 24          | 87          |
| -IOs on 0.1" header                        | 56         | 24          | 0           |
| -High Speed IOs <br/> (differential pairs) | 12         | 0           | 12          |
| ADC Inputs                                 | 8          | 0           | 0           |

#### As Arduino
**IMPORTANT:** By programming the hardware with VHDP, the FPGA is much faster. This overview only compares the processor you can add to your fpga design.

|           | VHDP Core                         | Arduino UNO    | Arduino Zero    |
|-----------|-----------------------------------|----------------|-----------------|
| Type      | 32 Bit                            | 8 Bit          | 32 Bit          |
| Frequency | 156 MHz (50 MHz default) (+ 975%) | 16 MHz         | 48 MHz          |
| RAM       | 64.3 Mb (+ 401,873%)              | 0.016 Mb       | 0.256 Mb        |
| Flash     | 1.37 Mb (64 Mb External)          | 0.25 Mb        | 2.05 Mb         |
| ADC       | 1 MHz 12 Bit                      | 0.2 MHz 10 Bit | 0.35 MHz 12 Bit |

You get more speed and RAM so even image processing gets possible. Next to the processor, you can add additional parallel processes to e.g. control a motor.

### VHDPlus Shield MAX10
If you want to supply the Core, all the extensions and other components (e.g. motors) with one power adapter or battery. Check out the Shield fitting to the Core MAX10 [here](/docs/components_shield)
