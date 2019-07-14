---
id: getstarted
title: Get Started with VHDP
sidebar_label: Install
---

**⚠ THIS DOCUMENTATION IS INCOMPLETE!**

## Get Started

Use the benefits of code suggestions and vendor-independent libraries by using VHDP IDE. The easiest way to program yor FPGA.

### Install VHDP IDE

1. <a href="https://www.intel.com/content/www/us/en/programmable/downloads/download-center.html" target="_blank">Sign in</a> (in the upper right corner) or <a href="https://www.intel.com/content/www/us/en/forms/fpga-registration.html" target="_blank">create an account</a>
2. Visit <a href="https://fpgasoftware.intel.com/18.1/?edition=lite&platform=windows&download_manager=direct" target="_blank">Quartus Prime download page</a>
3. Download MAX 10 device support¹
4. Download and install Quartus Prime Lite²
5. Choose your version of VHDP IDE according to your operation system:

|Operating System| 32 Bit | 64 Bit |
|--|--|--|
| Windows | [Download coming soon](#) | [Download coming soon](#) |
| Linux | [Download coming soon](#) | [Download coming soon](#) |

6. Download and install VHDP IDE

### Addional Programs

#### Code Simulation:

1. Download and install ModelSim
2. Read our instructions [here](/docs/getstarted_modelsim)

### Programmer

We recommend using the <a href="https://shop.trenz-electronic.de/de/TEI0004-02-ARROW-USB-Programmer2-fuer-die-Entwicklung-mit-Intel-FPGAs-2-54mm-Header" target="_blank">ARROW USB Programmer 2</a> to have an additional USB to UART interface.<br>
Download the driver <a href="https://shop.trenz-electronic.de/de/Download/?path=Trenz_Electronic/Software/Drivers/Arrow_USB_Programmer" target="_blank">here</a>.

## First program
Creating a program with the VHDP IDE is simple, but to get you started even faster we've created tutorials and a written instruction:

Create your first program: [Link coming soon](#)
How to use a library: [Link coming soon](#)
Communication with Arduino: [Link coming soon](#)

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
