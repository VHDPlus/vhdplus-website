---
id: getstarted
title: Get Started with VHDP
sidebar_label: Install
---

**⚠ THIS DOCUMENTATION IS INCOMPLETE!**
**Ist das die falsche Version du Knecht?**

## Get Started

Use the benefits of code suggestions and vendor-independent libraries by using VHDP IDE. The easiest way to program yor FPGA.

### Install VHDP IDE

1. Download <a href="http://download.altera.com/akdlm/software/acdsinst/18.1std/625/ib_installers/max10-18.1.0.625.qdz" target="_blank">MAX 10 device support</a>¹
2. Download and install <a href="http://download.altera.com/akdlm/software/acdsinst/18.1std/625/ib_installers/QuartusLiteSetup-18.1.0.625-windows.exe" target="_blank">Quartus Prime Lite</a> or <a href="http://download.altera.com/akdlm/software/acdsinst/18.1std/625/ib_installers/QuartusLiteSetup-18.1.0.625-linux.run" target="_blank">Quartus Prime Lite for Linux</a>²
3. Choose your version of VHDP IDE according to your operation system:

**Important Notes:**

**VHDP is currently in WIP state. Changes will occur until version 1.0.**
**At this point VHDP IDE does not obtain a Microsoft Certificate. According to that Windows Installer might get blocked by SmartScreen.**

|Operating System| 32 Bit | 64 Bit |
|--|--|--|
| Windows 7+ | {@inject: Win32Download} | {@inject: Win64Download} |
| Debian based (Ubuntu, Linux Mint, ...) | Not supported | {@inject: DEB64Download} |
| RPM based (CentOS, Fedora, OpenSUSE, ...) | Not supported | {@inject: RPM64Download} |
| Other linux | Not supported | {@inject: TAR64Download} |

4. Install the Downloaded VHDP Package:

![VHDP IDE](assets/getstarted/IDE.PNG)

### Addional Programs

#### Code Simulation:

1. Download and install <a href="http://download.altera.com/akdlm/software/acdsinst/18.1std/625/ib_installers/ModelSimSetup-18.1.0.625-windows.exe" target="_blank">ModelSim</a> or <a href="http://download.altera.com/akdlm/software/acdsinst/18.1std/625/ib_installers/ModelSimSetup-18.1.0.625-linux.run" target="_blank">ModelSim for Linux</a>
2. Read our instructions [here](/docs/getstarted_modelsim)

### Overview
VHDP: [Click here](/download/VHDP_Overview.pdf)<br>
VHDP IDE:  [Click here](/download/VHDP_IDE_Overview.pdf)

### Programmer

We recommend using the <a href="https://shop.trenz-electronic.de/de/TEI0004-02-ARROW-USB-Programmer2-fuer-die-Entwicklung-mit-Intel-FPGAs-2-54mm-Header" target="_blank">ARROW USB Programmer 2</a> to have an additional USB to UART interface.<br>
Download the driver <a href="https://shop.trenz-electronic.de/de/Download/?path=Trenz_Electronic/Software/Drivers/Arrow_USB_Programmer" target="_blank">here</a>.

## First program
Creating a program with the VHDP IDE is simple, but to get you started even faster we've created tutorials and a written instruction:

First program:
<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/oGBgobUQ0bU?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowfullscreen></iframe></div>


How to use a library: 
<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/jwuUQ0DZaD0?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowfullscreen></iframe></div>


Debug your code while running: 
<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/Jdzip7TiwgI?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowfullscreen></iframe></div>

### Create your first program:

Manual:
1. Start the VHDP IDE and create a new project (top left). This automatically creates a vhdp file.
2. In the vhdp file, you can program your code. More information about that [here](/docs/getstarted_vhdp). For beginners we recommend to test with this demo code:
```vhdp
/*
Blink example
*/

Main
(
    --I/Os of the FPGA
    LED : OUT STD_LOGIC := '0';  --STD_LOGIC contains states like '1', '0' or 'Z' for High Impedance
)     
{   
    Process Demo ()
    {
        Thread --Every Thread is an endless loop
        {
            LED <= '1';
            Wait(1000000);
            LED <= '0';
            Wait(1000000);
        }
    }
}
```
3. If no errors appeared while analyzing, you can click on create (6. from the left) and a window will open. Here you can connect the in- and outputs from Main with the IOs of the FPGA (They are labelled on the development board and shield).
Before clicking on OK you should check if the Quartus path is correct. On windows, this path is usually "C:\intelFPGA_lite\18.1\quartus"
4. If an error appeared while compiling, you can double click the error (in front of the line and path) to switch to the file with the error. If you double click again, you get to the line. 
If you found the error, you have to go to the VHDP file to fix.
5. If compiling has finished (can last up to several minutes, because the compiler tries to find the most efficient way to connect the logic elements), you can program the FPGA. To do that, you have to press program (7. from the left), select the connected Programmer and connect the Programmer with the JTAG Connector. Now you can add the programming file (or delete the old and add the new one), select the .pof file if you want to save the file with the internal flash, select Program/Configure and press start.


¹MAX 10 device support<br>
The VHDP Core uses a MAX 10 FPGA. Select the device family depending on your development board.

²Quartus Prime<br>
Quartus Prime is necessary for compiling your code and programming your FPGA.
