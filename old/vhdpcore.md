---
id: vhdpcore
title: VHDP Core
---

![VHDP Core M](/img/vhdpcore/Items.png)

The VHDP Core M is the entry into FPGA programming. With it's many I/Os, internal ADC, large RAM and Flash, you can even realize complex projects with many components and an internal Arduino-compatible processor that work together. Also with the small form factor, it is perfect to be used directly with your own PCBs or the [VHDP Shield](/docs/component_vhdpshield).

The MAX 10 FPGA with 8,000 logic elements can handle tasks from controlling robots to handle audio and video signals. Unlike other FPGAs, it features internal Flash and an ADC, so you can directly save your programs on the chip and don't have to use an external ADC to read analog values.

With the VHDP IDE you can easily program the FPGA with e.g. an [ARROW USB Programmer2](https://shop.trenz-electronic.de/de/TEI0004-02-ARROW-USB-Programmer2-fuer-die-Entwicklung-mit-Intel-FPGAs-2-54mm-Header?showb2c=1&gclid=CjwKCAjwxrzoBRBBEiwAbtX1n_xRbsUaPdSKMEVeSirnKX1QOCKDTkq6HEBdxTVpna69GR3NHCvp5xoC2jQQAvD_BwE), that also allows to send and receive data via USB.

## Core Overview
![Core M Overview](/img/vhdpcore/Items1.png)

For your designes, the Core M has 8 LEDs and 2 Buttons that can be used. The I/Os of the LEDs and with ADC Input can be used like normal I/Os. 
To use the board, connect a 5V supply with the VIN and GND pin. Of course they are protected against reverse polarity, so don't worry about destroying the FPGA. 
With the JTAG connector you can then directly program the FPGA or the internal Flash and use debug functions. 
If you add a Processor to your FPGA design, with the big external RAM and Flash, you can use and save complex programs on the board. The RAM also allows e.g. applications with cameras and object detection.

If you want to have the best experience with FPGA programming and don't want to waste time trying to connect the correct supply or your different components, try the VHDP Shield M with a plug and play experience. You just plug in the Core and can supply 5V or 8.5-28V with screw teminals, a DC power jack or an micro USB port. All inputs are protected and can supply the Core and all the extensions you connect. Learn more about the VHDP Shield [here](/docs/component_vhdpshield)
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

### As Arduino

| | VHDP Core | Arduino UNO | Arduino Zero |
|--|--|--|--|
| Type | 32 Bit | 8 Bit | 32 Bit |
| Frequency | 156 MHz (50 MHz default) (+ 975%) | 16 MHz | 48 MHz |
| RAM | 64.3 Mb (+ 401,873%) | 0.016 Mb | 0.256 Mb |
| Flash | 1.37 Mb (64 Mb External) | 0.25 Mb | 2.05 Mb |
| ADC | 1 MHz 12 Bit | 0.2 MHz 10 Bit | 0.35 MHz 12 Bit |

You get more speed and RAM so even image processing gets possible. Next to the processor, with the VHDP Core you can add additional parallel processes to e.g. control a motor.
