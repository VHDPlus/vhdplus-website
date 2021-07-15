---
id: maxco2
title: MAXCO2
---


![MAXCO2](/img/maxco2/TEI0024.png)

The Trenz Electronic TEI0024-01 MAXCO2 is a compact evaluation kit for precise CO2 measurement of the ambient air in rooms and displays pre-defined CO2 levels directly via 8 LEDs. MAXCO2 is a combination of the well-known MAX1000 Intel FPGA board, where many tutorials are available, and the high-precision CO2 measurement sensor SCD30 from Sensirion. The board is supplied via a standard micro-USB connector (e.g. mobile phone charger) and shows the current CO2 concentration levels via the LEDs already after a few seconds.

![MAXCO2 Overview](/img/maxco2/Top_labled_ic_rx_NO_Switch.png)

A Softcore uController is implemented in the Intel MAX10 FPGA of the MAX1000, which controls and reads out the SCD30 sensor. Every 2 seconds a measurement of the CO2 concentration, the humidity and the temperature is provided. These three values in float format ​​are transferred to the FPGA and converted into integer ​​by the FPGA. The corresponding CO2 level is identified and immediately displayed on the LEDs for the user to see. By connecting the MAXCO2 to the PC via a USB cable, the three measured values ​​(CO2 concentration, humidity, temperature) can be displayed on a COM terminal window in real time on the screen. The values ​​are sent via a UART to a USB bridge (FTDI FT2232) from the FPGA to the PC. Users can grab the data points, to store on the PC, to display in graphs or to send into cloud. All software source files are made available so that developers can easily make their own adjustments. In addition, no FPGA knowledge is required, since the Softcore uController used can be accessed via a standard IDE programming environment (e.g. Eclipse) and this can be modified or programmed with standard C code (including debugging).

Since the precise CO2 concentration measurement with the SCD30 does not allow an ultra-low power application, an FPGA can fully demonstrate its strengths here. With the implemented FPGA Softcore uController, individual interfaces can easily be added and make the Evalkit to a highly flexible user platform. Many adapter boards and own circuits can be connected via the Pmod connector and the unused I/O pins (see available Pmod modules with WIFI / BLE / Interface / Sensor /…). For example, a Pmod display can be used to show the sensor values ​​without a PC and can act as a standalone measurement system powered via USB or battery pack. In principle, a much smaller FPGA in the single dollar area is possible, according the used resources for the code. In addition, FPGAs offer integrated float-to-integer HDL implementations, which simplify the conversion of the measured values, instead of doing this in the software.

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/KJsz-dilXjg?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>

The CO2 sensor SCD30 from Sensirion delivers precise and long-term stable (measured) values, ​​in air condition monitoring systems for humans. The accuracy of the CO2 sensor is +/- (30ppm + 3% of the measured value) at typical ambient air environments of approx. 400ppm CO2. The measuring principle of the SCD30 is based on the optical NDIR (Non Dispersive Infra-Red) method. In order not to influence the optical measuring section, movements, mechanical loads, impacts, direct sunlight, dust and airflows must be avoided. At the same time, however, normal air access to the sensor must be ensured. To achieve long-term stability and to maintain measurement accuracy, the intelligent auto-calibration feature of the SCD30 is used, which independently calibrates the sensor at regular intervals.

In order to achieve good measurement results, the [DesignIn Guide](https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD30_Design-In_Guidelines_D1.pdf) from Sensirion should be observed.

(Source: Trenz Electronic)

# MAX1000

The MAX1000 FPGA Development Board is most inexpensive way to start with FPGAs and the VHDPlus IDE. But you still have all the hardware you get with the Core MAX10. 
The MAX1000 doesn't feature the plug & play and high speed capabilities of the Core MAX10, but you can still profit from the extremly high performance of FPGAs, the onboard programmer or the onboard SDRAM.

Whether you want to program with your own modular NIOS processor using Arduino libraries. 
Create a 200MHz logic analyzer that you can use together with our serial plotter. 
Or build a self balancing robot together with the onboard accelerometer.
The capabilities of this development board are way beyond the usual microcontroller board you could get for this price.

## MAX1000 Overview
![MAX1000 Overview](/img/max1000/Top_labled.png)

> :warning: 3.3V I/O Voltage! Use Level Shifter to Connect 5V Hardware

The new FPGA IoT Maker Board that has been designed for end-to-end application development and optimised for cost. The Arrow MAX1000 board can be installed directly into a custom application or integrated on to a completely separate board. It has been created for start-ups, universities or established equipment manufacturers who want a flexible, low cost FPGA platform for development. Also customised variants can be supplied.

At the heart of the maker board is a compact (11x11mm) Intel MAX 10 FPGA with 8000 logic elements. This single chip includes integrated flash memory, a 1Msps 12bit ADC for analogue signals and a 3.3V power supply. Other features include embedded SRAM, DSP blocks, instant-on within milliseconds, and the ability to implement Intel’s NIOS II soft core embedded processor to perform microcontroller tasks.

The board is equipped with an integrated Arrow USB-Programmer that enables the FPGA to be programmed directly from a PC and debugged using the free of charge Intel Quartus Prime Lite software. This makes Arrow MAX1000 an easy to use plug and play solution.

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/zSNgOrOqXTg?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>

The MAX1000’s power can be supplied as 5V from the USB port or via a separate pin. An Enpirion DC/DC converter with integrated coil then generates the 3.3V supply used on board. A MEMS oscillator provides the clock supply for the FPGA and the USB bridge. The low power, 3-axis acceleration sensor – also based on MEMS technology – can be used for position and motion detection, which are often required in IoT applications. External SDRAM can be used for storage of application data or as memory for the NIOS II processor.

To provide an easy introduction into the use of FPGAs, a series of demo projects with NIOS II soft IP controllers are provided with the MAX1000. Eight configurable LEDs are available to display status and user inputs can be made via two buttons. A two row connector, based on the Arduino MKR standard, and a Pmod plug provide flexible connectivity options including the ability to attach adaptor boards for wireless ICs or sensors.

Source: Arrow Electronics

### Specs

    MAX 10 FPGA (10M08SAU169C8G):
        Logic Elements          - 8,000
        RAM                     - 378 Kb
        Configuration Memory    - 2.24 Mb
        ADC                     - 1 Mio. Samples/s
                                - 12 Bit
                                - 8 Inputs
        PLL                     - 2
                                - > 300 MHz
        18 x 18 Multiplier      - 24
        Configuration Images    - 2
    SDRAM (W9864G6JT-6):        - 64 Mb
    Flash (W74M64FVSSIQ):       - 64 Mb
    Oscillator (DSC6011ME2A):   - 12 MHz

### Software

Don't be overwhelmed by all the features of the MAX1000. Because of the deep integration in the VHDPlus IDE, you don't have to think about where to connect the SDRAM and how to set the I/O voltage. The I/Os are already defined in the libraries and in the graphical editor, you can can just click on the pin to connect.

![MAX1000 Overview](/img/max1000/Image2.jpg)

### Reasons for an FPGA

#### 1. Speed
With an FPGA you can not only program software, but also hardware. Here is a quick comparison:

|                        |Software                                      |Hardware         |
|------------------------|----------------------------------------------|-----------------|
|Parallel Processes      |Usually 1                                     |As many as needed|
|Cycles for one operation|From 4 up to dozens<br/>depending on operation|1                |
|Operations per Cycle    |1                                             |As many as needed|

If you need the speed, you program hardware and for the rest you can still put a processor on the FPGA.

#### 2. Versatility
Normally you have e.g. 8 PWM pins and 2 UART, 1 SPI and 1 I²C controller. With an FPGA you just take the UART component from the libraries and add it to your design as often as you want. <br/>
But also protocols that are not used that often, like I²S for audio data, are no problem.

#### As Arduino
**IMPORTANT:** By programming the hardware with VHDP, the FPGA is much faster. This overview only compares the processor you can add to your FPGA design.

|           | VHDP Core                         |
|-----------|-----------------------------------|
| Type      | 32 Bit                            |
| Frequency | 116 MHz (50 MHz default)          |
| RAM       | 64.3 Mb                           |
| Flash     | 1.37 Mb (64 Mb External)          |
| ADC       | 1 MHz 12 Bit                      |

You get more speed and RAM so even image processing gets possible. Next to the processor, you can add additional parallel processes to e.g. control a motor.

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/WZTix6MlBNM?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>